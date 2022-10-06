import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useState } from "react";
import { Col, Dropdown, Form, Row, Table } from "react-bootstrap";
import CardLayout from "./components/card/CardLayout";
import linGraph from "./assets/line-graph.png";
import peiGraph from "./assets/piechart.png";
import profileImage from "./assets/profile-pic-01.jpg";
import profileImage2 from "./assets/profile-pic-02.jpg";
import profileImage3 from "./assets/profile-pic-03.jpg";
import profileImage4 from "./assets/profile-pic-04.jpg";
import profileImage5 from "./assets/profile-pic-05.jpg";
import profileImage6 from "./assets/profile-pic-06.jpg";
import NewVideoPlayer from "./components/video-player/video-player";
import SearchBox from "./components/ui/serchBox/SearchBox";
import DashBoardLayout from "./layouts/DashBoardLayout";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <DashBoardLayout>
     
        <Home />
      </DashBoardLayout>
    </div>
  );
}

export default App;
