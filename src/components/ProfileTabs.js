import { Grid } from "@mui/material";
import React, { useState } from "react";
import Posts from "./Posts";
import "./ProfileTabs.css";
import TabContent from "./TabContent";
const ProfileTabs = () => {
  let [activeTab, setActiveTab] = useState("posts");

  let handleActiveTab = (event) => {
    setActiveTab(event.currentTarget.id);
  };
  return (
    <>
      <div className="tab-section">
        <div
          className={activeTab === "posts" ? "tab active-tab" : "tab"}
          id="posts"
          onClick={(e) => handleActiveTab(e)}
        >
          <span className="tag-icons">
            <i className="bi bi-grid-3x3"></i>
          </span>
          POSTS
        </div>
        <div
          className={activeTab === "reels" ? "tab active-tab" : "tab"}
          id="reels"
          onClick={handleActiveTab}
        >
          <span className="tag-icons">
            <i className="bi bi-camera-reels"></i>
          </span>
          REELS
        </div>
        <div
          className={activeTab === "tagged" ? "tab active-tab" : "tab"}
          id="tagged"
          onClick={handleActiveTab}
        >
          <span className="tag-icons">
            <i className="bi bi-person-square"></i>
          </span>
          TAGGED
        </div>
      </div>
      <div className="outlet">
        <TabContent id="posts" activeTab={activeTab}>
          <Grid
            container
            rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Posts />
          </Grid>
        </TabContent>
        <TabContent id="reels" activeTab={activeTab}></TabContent>
        <TabContent id="tagged" activeTab={activeTab}></TabContent>
      </div>
    </>
  );
};

export default ProfileTabs;
