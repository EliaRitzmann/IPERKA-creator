import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Editor } from "./pages/editor/Editor";
import { useAuth } from "./context/AuthContext";
import { DatabaseContextProvider } from "./context/DatabaseContext";
import { Profile } from "./pages/Profile";

function App() {
  //MAKE BETTER ROUTING (FILTER???)
  const { user } = useAuth();
  return (
    <div className=" h-screen overflow-hidden">
      
      <BrowserRouter>
        {user ? <DatabaseContextProvider>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/editor/:id" element={<Editor></Editor>}></Route>
          </Routes>
            
            </DatabaseContextProvider> :
            <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;
