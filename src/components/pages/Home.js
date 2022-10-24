import axios from "axios";
import React from "react";
import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import "../css/home.css"
const Home= () =>{

  const [users, setUsers]=useState([]);

  useEffect(()=>{
     loadUsers();
  },[])

  const loadUsers=async () => {
    const result= await axios.get("http://localhost:3004/users");
    setUsers(result.data);
    console.log(result.data)
  }
  return (
    <>
      <div className="container">
        <div className="homeData">
          <table className="table " >
            <thead className="thead-dark table-dark" style={{textAlign:"center"}}>
              <tr >
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">User name</th>
                <th scope="col">Email</th>
                 <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                users.map((user,index)=>(
                  <tr style={{textAlign:"center"}}>
                    <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link className="btn btn-primary mx-2">View</Link>
                      <Link className="btn btn-outline-primary mx-2">Edit</Link>
                      <Link className="btn btn-danger mx-2">Delete</Link>
                    </td>
                  
                </tr>
                )
                )
              }
                 
            
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
