import React from "react";
import { useState } from "react";
import { Col, Dropdown, Form, Row, Table } from "react-bootstrap";
import linGraph from "../assets/line-graph.png";
import peiGraph from "../assets/piechart.png";
import profileImage from "../assets/profile-pic-01.jpg";
import profileImage2 from "../assets/profile-pic-02.jpg";
import profileImage3 from "../assets/profile-pic-03.jpg";
import profileImage4 from "../assets/profile-pic-04.jpg";
import profileImage5 from "../assets/profile-pic-05.jpg";
import profileImage6 from "../assets/profile-pic-06.jpg";
import CardLayout from "../components/card/CardLayout";
import SearchBox from "../components/ui/serchBox/SearchBox";
import NewVideoPlayer from "../components/video-player/video-player";

function DashBoardLayout({ children }) {
  const [show, setShow] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  const [notification, setNotification] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };
  const toggleNotification = () => {
    setNotification(!notification);
  };
  return (
    <div className={show ? "body body-pd" : "body"}>
      <header className={show ? "body-pd header" : "header"} id="header">
        <div className="d-flex">
          <div className="header_toggle" onClick={toggle}>
            <i className="bx bx-menu ms-2" id="header-toggle" />
          </div>
          <SearchBox />
        </div>
        <div className="d-flex">
          <div className="position-relative">
            <i
              className="bx bx-bell me-2 notification-icon"
              onClick={toggleNotification}
              role="button"
            ></i>
            <div
              className={
                notification
                  ? "notification-menu d-block"
                  : "notification-menu "
              }
            >
              <div className="notification-section">
                <ul className="list-unstyled ms-4 user-list">
                  <li className="d-flex justify-content-between mb-4 mt-3">
                    <div className="d-flex">
                      <img src={profileImage2} alt="" />
                      <div className="mt-1 ms-1 d-flex flex-column ms-3">
                        <label className="user-name">Drew James</label>
                        <label className="sub-name">
                          Assigned you on the call with Sara
                        </label>
                      </div>
                    </div>
                    <div className="mt-2 me-3">
                      <span className="contact-number">2 min ago</span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between mb-4 mt-3">
                    <div className="d-flex">
                      <img src={profileImage5} alt="" />
                      <div className="mt-1 ms-1 d-flex flex-column ms-3">
                        <label className="user-name">Drew James</label>
                        <label className="sub-name">
                          Marked the task New UI as done.
                        </label>
                      </div>
                    </div>
                    <div className="mt-2 me-3">
                      <span className="contact-number">2 min ago</span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between mb-4 mt-3">
                    <div className="d-flex">
                      <img src={profileImage6} alt="" />
                      <div className="mt-1 ms-1 d-flex flex-column ms-3">
                        <label className="user-name">Drew James</label>
                        <label className="sub-name">
                          Added new comment on sales task
                        </label>
                      </div>
                    </div>
                    <div className="mt-2 me-3">
                      <span className="contact-number">2 min ago</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-center mt-1">
                <a href="ggggg">Show More</a>
              </div>
            </div>
          </div>

          <div className="d-flex " role={"button"} onClick={toggleDropDown}>
            <div className="header-name d-flex">
              <span>John Doe</span>
              <i className="bx bx-chevron-down"></i>
            </div>
            <div className="header_img d-flex">
              <img src={profileImage} alt="" />
            </div>
          </div>

          <div className={dropdown ? "popup-menu d-block" : "popup-menu"}>
            <ul className="list-unstyled ms-4">
              <li>
                <i className="bx bx-user"></i>
                <label>My Porfile</label>
              </li>
              <li>
                <i className="bx bx-book-add"></i>
                <label>Billing</label>
              </li>
              <li>
                <i className="bx bx-log-out"></i>
                <label>Logout</label>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={show ? "l-navbar show" : "l-navbar"} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo">
              <span className="nav_logo-name">ACME</span>{" "}
            </a>
            <div className="nav_list">
              <a href="#" className="nav_link active">
                <i className="bx bx-home nav_icon" />
                <span className="nav_name">Home</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bxs-dashboard nav_icon" />
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bxs-inbox nav_icon" />
                <span className="nav_name">Inbox</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-bookmark nav_icon" />
                <span className="nav_name">Products</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-cog nav_icon" />
                <span className="nav_name">Admin</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/*Container Main start*/}
      <div className="h-100 bg-light mt-3">
        <div className="ms-5 me-3">{children}</div>
      </div>
    </div>
  );
}

export default DashBoardLayout;
