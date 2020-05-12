import React, { useState, useEffect, useMemo} from "react";
import FriendCard from "./components/FriendCard";

import Title from "./components/Title";
import friends from "./friends.json";
import Table from "./components/Table";
import "./App.css";

function App(){

  const [data, setData] = useState([]);

// Using useEffect to call the json once mounted and set the data
  useEffect(() => {
    const data = friends;
      setData(data);
    // (async () => {
    //   const result = await friends;
    //   setData(result.data);
    // })();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - Employee
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
            accessor: "location",
           
          },
          {
            Header: "Headshot",
            accessor: "image",
            Cell: ({ cell: { value } }) => <FriendCard friend={value}/>
          },
        ]
      }
    ],
    []
  );

    return (
      <div className="App">
      
      <Title>Employee List</Title>
        <Table columns={columns} data={data} />
        </div>
    );
  }


export default App;
