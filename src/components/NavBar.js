import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./NavBar.css";

const NavItem = ({ children }) => {
  return (
    <li className="nav-item">
      <button className="nav-link">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {children}
        </Box>
      </button>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Box className="logo-container">
          <li className="logo">
            <button className="nav-link">
              <Box>
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </Box>
            </button>
          </li>
        </Box>
        <Box className="main-nav-buttons">
          <NavItem>
            <i className="bi bi-house-door" style={{ fontSize: "1.5rem" }}></i>
          </NavItem>
          <NavItem>
            <i className="bi bi-compass" style={{ fontSize: "1.5rem" }}></i>
          </NavItem>
          <NavItem>
            <i
              className="bi bi-camera-reels"
              style={{ fontSize: "1.5rem", padding: 0 }}
            ></i>
          </NavItem>
          <NavItem>
            <i className="bi bi-chat" style={{ fontSize: "1.5rem" }}></i>
          </NavItem>
          <NavItem>
            <i className="bi bi-plus-square" style={{ fontSize: "1.5rem" }}></i>
          </NavItem>
          <NavItem>
            <Avatar sx={{ width: 32, height: 32 }} />
          </NavItem>
        </Box>
        <Box className="more-container">
          <NavItem>
            <i
              className="bi bi-three-dots-vertical"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </NavItem>
        </Box>
      </ul>
    </nav>
  );
};

export default NavBar;
