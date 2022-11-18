import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/home/navbar/Navbar";
import { useAuth } from "../context/AuthContext";
import { Projects } from "./home/Projects";
import { Profile } from "./Profile";

export const Home = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-200">
      <Navbar></Navbar>
      {user ? <Projects></Projects> : <h1>Please Login</h1>}
      <Profile></Profile>
    </div>
  );
};

/*
<h1>Hallo {user.displayName}</h1>
        <button onClick={logout}>Logout</button> <br></br>
        <button onClick={() => navigate("/editor/janic")}>Zum Editor</button>
*/