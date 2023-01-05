// @flow
import React, { useRef, useState, useEffect, useCallback } from "react";
import * as Styled from "./styled";
import { icons } from "../../icons";
import debounce from "lodash.debounce";
import { globalColors } from "../../consts/colors";
import { getIsLessThanThreeLetters } from "./helpers";
import { fetchAutoCompleteValues } from "../../api/mainApi";
import { AutoCompleteDropdown } from "./AutoCompleteDropdown";
import { useOnClickOutside, useEventListener } from "../../customHooks";

const fetchAutoCompleteDataDeboucne = (fn, interval = 300) =>
  debounce(fn, interval, { maxWait: 10000 });

declare type Props = {
  className?: string,
  placeholder: string,
  onSelect: (id: number) => void,
};

export const AutoCompleteSearchBar = React.memo<Props>((props: Props) => {
  const { placeholder, onSelect, className = "" } = props;

  const searchBarRef = useRef(null);
  const inputRef = useRef(null);

  const [searchValue, setSearchValue] = useState("");
  const [autoCompleteValues, setAutoCompleteValues] = useState(null);
  const [isAutoCompleteDropdownVisible, setIsAutoCompleteDropdownVisible] =
    useState(false);

  // fetching API only after 300ms, to get rid of many unnecessary fetches
  const { current: searchForAutoCompleteValues } = useRef(
    fetchAutoCompleteDataDeboucne((searchString) => {
      fetchAutoCompleteValues(searchString).then((data) => {
        setAutoCompleteValues(data.result);

        if (data.result.length) {
          setIsAutoCompleteDropdownVisible(true);
          return;
        }
        setIsAutoCompleteDropdownVisible(false);
      });
    })
  );

  const onChangeSearchValue = useCallback((searchString) => {
    setSearchValue(searchString);
    const isLessThanThreeLetters = getIsLessThanThreeLetters(searchString);
    if (isLessThanThreeLetters) {
      setAutoCompleteValues(null);
      setIsAutoCompleteDropdownVisible(false);
      return;
    }

    searchForAutoCompleteValues(searchString);
  }, []);

  const onListItemClick = useCallback(
    (airportId: number, airportName: string) => {
      onSelect(airportId);
      setSearchValue(airportName);
      setIsAutoCompleteDropdownVisible(false);
    },
    []
  );

  useEffect(() => {
    // To reset context API values
    if (
      searchValue.length < 3 &&
      (!autoCompleteValues || !autoCompleteValues.length)
    ) {
      onSelect(null);
    }
  }, [searchValue, autoCompleteValues]);

  const chooseFirstAutoCompleteValue = useCallback(
    (event) => {
      // press ENTER to select
      if (event.keyCode === 13) {
        if (isAutoCompleteDropdownVisible) {
          const { id, name, iata } = autoCompleteValues[0];
          const airportName = `${name} ${iata ? `(${iata})` : ""}`;

          onSelect(id);
          setSearchValue(airportName);
          setIsAutoCompleteDropdownVisible(false);
        }
      }
    },
    [isAutoCompleteDropdownVisible, autoCompleteValues]
  );

  useOnClickOutside(searchBarRef, chooseFirstAutoCompleteValue);
  useEventListener("keydown", chooseFirstAutoCompleteValue, inputRef.current);

  return (
    <Styled.SearchBarWrapper className={className} ref={searchBarRef}>
      <Styled.SearchBar
        ref={inputRef}
        value={searchValue}
        onChange={(e) => onChangeSearchValue(e.target.value)}
        placeholder={placeholder}
      />

      {isAutoCompleteDropdownVisible ? (
        <AutoCompleteDropdown
          onClick={onListItemClick}
          autoCompleteValues={autoCompleteValues}
        />
      ) : null}
    </Styled.SearchBarWrapper>
  );
});
