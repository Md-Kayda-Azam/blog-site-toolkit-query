import React from "react";
import "./Home.scss";
import { Link, Outlet } from "react-router-dom";
import TopHeader from "../../components/TopHeader/TopHeader";
import BodyHeader from "../../components/BodyHeader/BodyHeader";
const Home = () => {
  return (
    <>
      <div className="section">
        <div className="wraper">
          <div className="header">
            <TopHeader />
            <BodyHeader />
          </div>
          <div className="body">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
