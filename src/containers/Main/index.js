// @flow
import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import { getTripsData } from "../../redux/selectors";
import { SearchFilter } from "../../components/SearchFilter";
import { TripCard } from "../../components/TripCard";
import { NoResult } from "../../components/NoResult";

declare type Props = {
  tripsData: Array<TTripData>,
};

const Main = ({ tripsData }: Props) => {
  return (
    <Styled.MainSideWrapper>
      <SearchFilter />
      {tripsData && tripsData.length ? (
        tripsData.map((tripData) => {
          return <TripCard key={tripData.id} tripData={tripData} />;
        })
      ) : tripsData && !tripsData.length ? (
        <NoResult />
      ) : null}
    </Styled.MainSideWrapper>
  );
};

const mapStateToProps = (state) => ({
  tripsData: getTripsData(state),
});

export default connect(mapStateToProps)(Main);
