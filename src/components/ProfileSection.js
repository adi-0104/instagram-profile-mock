import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileSection.css";
import { Avatar, Link } from "@mui/material";
import ProfileTabs from "./ProfileTabs";

const ProfileSection = () => {
  let config = { endpoint: "https://jsonplaceholder.typicode.com/users/1" };
  let [userDetails, setUserDetails] = useState({});

  const getUserDetails = async (url) => {
    try {
      let response = await axios.get(url);
      let data = await response.data;
      setUserDetails(data);
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  useEffect(() => {
    getUserDetails(config.endpoint);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
        <Box className="content-wrapper">
          <header className="user-details-container">
            <Box className="user-picture">
              <Avatar sx={{ width: 150, height: 150 }} />
            </Box>
            <Box className="user-details">
              <Box className="user-summary">
                <Box>
                  <span>{userDetails.username}</span>{" "}
                  <span>
                    <i className="bi bi-patch-check-fill"></i>
                  </span>
                </Box>
                <Box className="user-actions">
                  <button id="follow-button">Follow</button>
                  <button id="message-button">Message</button>
                  <button id="suggestion-button">
                    <i className="bi bi-person-fill-add"></i>
                  </button>
                  <button id="more-button">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </Box>
              </Box>
              <Box className="user-metrics">
                <Box className="user-metric">
                  <span className="metric">500 </span>
                  <span>posts</span>
                </Box>
                <Box>
                  <span className="metric">314M </span>
                  <span>followers</span>
                </Box>
                <Box>
                  <span className="metric">31 </span>
                  <span>following</span>
                </Box>
              </Box>
              <Box className="user-description">
                <Box>{userDetails.name}</Box>
                <Box>Carpediem!!</Box>
                <Link underline="none">{userDetails.website}</Link>
              </Box>
            </Box>
          </header>
          <ProfileTabs />
        </Box>
      </Container>
    </main>
  );
};

export default ProfileSection;
