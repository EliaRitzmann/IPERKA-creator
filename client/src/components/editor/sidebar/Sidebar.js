import React from "react";
import { useAuth } from "../../../context/AuthContext";
//Navigation
import { useNavigate } from "react-router-dom";
import { Logo } from "../../other/Logo";

export const Sidebar = (props) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen w-20 py-2 absolute">
      <div className="flex flex-col items-center">
        <Logo></Logo>
        <div className="tooltip tooltip-right z-30" data-tip="Dashboard">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Dashboard")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </button>
        </div>

        <div className="divider -my-1 mx-2"></div>

        <div className="tooltip tooltip-right z-30" data-tip="Informieren">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Informieren")}
          >
            <h1 className="font-serif text-lg font-semibold">I</h1>
          </button>
        </div>

        <div className="tooltip tooltip-right z-30" data-tip="Planen">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Planen")}
          >
            <h1 className="font-serif text-lg font-semibold ">P</h1>
          </button>
        </div>

        <div className="tooltip tooltip-right z-30" data-tip="Entscheiden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Entscheiden")}
          >
            <h1 className="font-serif text-lg font-semibold">E</h1>
          </button>
        </div>

        <div className="tooltip tooltip-right z-30" data-tip="Realisieren">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Realisieren")}
          >
            <h1 className="font-serif text-lg font-semibold">R</h1>
          </button>
        </div>

        <div className="tooltip tooltip-right z-30" data-tip="Kontrollieren">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Kontrollieren")}
          >
            <h1 className="font-serif text-lg font-semibold">K</h1>
          </button>
        </div>

        <div className="tooltip tooltip-right z-30" data-tip="Auswerten">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => props.setCurrentPage("Auswerten")}
          >
            <h1 className="font-serif text-lg font-semibold">A</h1>
          </button>
        </div>

        <div className="divider -my-1 mx-2"></div>

        <div className="tooltip tooltip-right z-30" data-tip="Export">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="tooltip tooltip-right z-30" data-tip="Projekte">
          <a className="btn btn-square btn-ghost" href="/">
            <svg viewBox="0 0 32 32" fill="currentColor" width="36" height="36">
              <path
                d="M5 7.6551C5 6.19071 6.18712 5 7.65151 5 9.1159 5 10.303 6.19071 10.303 7.6551 10.303 9.11949 9.1159 10.3102 7.65151 10.3102 6.18712 10.3102 5 9.11949 5 7.6551zM5 15.9996C5 14.5352 6.18712 13.3445 7.65151 13.3445 9.1159 13.3445 10.303 14.5352 10.303 15.9996 10.303 17.464 9.1159 18.6547 7.65151 18.6547 6.18712 18.6547 5 17.464 5 15.9996zM7.65151 21.6899C6.18712 21.6899 5 22.8807 5 24.345 5 25.8094 6.18712 27.0001 7.65151 27.0001 9.1159 27.0001 10.303 25.8094 10.303 24.345 10.303 22.8807 9.1159 21.6899 7.65151 21.6899zM13.3333 7.6551C13.3333 6.19071 14.5204 5 15.9848 5 17.4491 5 18.6363 6.19071 18.6363 7.6551 18.6363 9.11949 17.4491 10.3102 15.9848 10.3102 14.5204 10.3102 13.3333 9.11949 13.3333 7.6551zM24.3483 5C22.8839 5 21.6968 6.19071 21.6968 7.6551 21.6968 9.11949 22.8839 10.3102 24.3483 10.3102 25.8127 10.3102 26.9998 9.11949 26.9998 7.6551 26.9998 6.19071 25.8127 5 24.3483 5zM13.3333 15.9996C13.3333 14.5352 14.5204 13.3445 15.9848 13.3445 17.4491 13.3445 18.6363 14.5352 18.6363 15.9996 18.6363 17.464 17.4491 18.6547 15.9848 18.6547 14.5204 18.6547 13.3333 17.464 13.3333 15.9996zM15.9848 21.6897C14.5204 21.6897 13.3333 22.8804 13.3333 24.3448 13.3333 25.8092 14.5204 26.9999 15.9848 26.9999 17.4491 26.9999 18.6363 25.8092 18.6363 24.3448 18.6363 22.8804 17.4491 21.6897 15.9848 21.6897zM21.6667 15.9996C21.6667 14.5352 22.8539 13.3445 24.3183 13.3445 25.7826 13.3445 26.9698 14.5352 26.9698 15.9996 26.9698 17.464 25.7826 18.6547 24.3183 18.6547 22.8539 18.6547 21.6667 17.464 21.6667 15.9996zM24.3183 21.6899C22.8539 21.6899 21.6667 22.8807 21.6667 24.345 21.6667 25.8094 22.8539 27.0001 24.3183 27.0001 25.7826 27.0001 26.9698 25.8094 26.9698 24.345 26.9698 22.8807 25.7826 21.6899 24.3183 21.6899z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>

        <div className="dropdown dropdown-right dropdown-end z-10">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 ml-5"
          >
            <li>
              <h1>{user.displayName}</h1>
            </li>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={signOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
