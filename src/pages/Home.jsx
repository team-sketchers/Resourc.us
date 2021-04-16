import React, { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import Sort from "../components/Sort";
const HomePage = (props) => {
  const [_teams, setTeams] = useState([]);
  const [_resources, setResources] = useState([]);
  const [sortingPref, setSorting]  = useState('')

  return (
    <div className="container">
    <div style= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <h1>Home Page</h1>
      <Sort setSorting = {setSorting} />
    </div>
      <ResourceCard
        loadInitial={props.loadInitial}
        teamId="allTeams"
        setSorting = {setSorting}
        sortingPref = {sortingPref}
      ></ResourceCard>
    </div>
  );
};

export default HomePage;
