import React, { useState, useEffect, useMemo} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Table from "./components/Table";

  

function App(){

  const [data, setData] = useState([]);

// Using useEffect to call the json once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await frineds;
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Employee",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Role",
            accessor: "occupation"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Branch Location",
            accessor: "location"
          },
          {
            Header: "Headshot",
            accessor: "image"
          },
        ]
      }
    ],
    []
  );

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object

    return (
      <Wrapper>
        <Title>Employee List</Title>
        <Table columns={columns} data={data} />
        {/* {this.state.friends.map(friend => (
          // <FriendCard
          //   removeFriend={this.removeFriend}
          //   id={friend.id}
          //   key={friend.id}
          //   name={friend.name}
          //   image={friend.image}
          //   occupation={friend.occupation}
          //   location={friend.location}
          // />
        ))} */}
      </Wrapper>
    );
  }


export default App;
