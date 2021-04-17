import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResourceCard from "../components/ResourceCard";
import Sort from "../components/Sort";
const HomePage = (props) => {
  const [_teams, setTeams] = useState([]);
  const [_resources, setResources] = useState([]);
  const [sortingPref, setSorting]  = useState('Most Upvoted')

  useEffect(async () => {
    await fetch("http://localhost:3000/teams/topTeams")
      .then((response) => {
        return response.json(); //Parses to JSON
      })
      .then((data) => {
        if (!props.teams) setTeams(data);
      })
      .catch((err) => {
        console.log("GET FAILED", err);
      });
  }, []);

  const joinTeam = async (e, teamId) => {
    //e.preventDefault();
    if (!userIsLoggedIn()) {
      // TODO: need to redirect to login instead.
      // Using this ghetto workaround until then.
      alert("You must be logged in to join a team!");
      history.push("/");
      history.goBack();
      return;
    }

    await fetch("http://localhost:3000/teams/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamId: teamId,
        user: user.user,
      }),
    })
      .then((rsp) => rsp.json())
      .then((data) => {
        // Don't do anything with the data yet.
      })
      .catch((err) => {
        alert("You have already joined this team!", err);
        history.goBack();
      });
  };

  return (
    <div className="container">
    <div className="container__home">
        <div>
          <div style= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h4>{sortingPref}</h4>
            <Sort setSorting = {setSorting} />
          </div>
          <ResourceCard
            loadInitial={props.loadInitial}
            teamId="allTeams"
            setSorting = {setSorting}
            sortingPref = {sortingPref}
          ></ResourceCard>
        </div>
        <div className="teamsCard">
              <h4>Most active teams</h4>
              {_teams.map((team) => (
                <div className="teamCard teamCard__compact" key={team.name}>
                    <header>
                      <Link to={"/teams/" + team._id}><h4>{team.name}</h4></Link>
                      <p>{team.description}</p>
                      <Link
                        to={"/teams/" + team._id}
                        onClick={(e) => joinTeam(e, team._id)}
                      >
                        + Join Team ({team.userList === undefined ? 0 : team.userList.length})
                      </Link>
                    </header> 
                </div>
              ))}
              <Link to="/teams" className="btn btn-default">View all</Link>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
