import React, { Fragment } from "react";
import { Col, Row, Table } from "react-bootstrap";
import linGraph from "../../assets/line-graph.png";
import peiGraph from "../../assets/piechart.png";
import profileImage from "../../assets/profile-pic-01.jpg";
import profileImage2 from "../../assets/profile-pic-02.jpg";
import profileImage3 from "../../assets/profile-pic-03.jpg";
import profileImage4 from "../../assets/profile-pic-04.jpg";
import CardLayout from "../../components/card/CardLayout";
import NewVideoPlayer from "../../components/video-player/video-player";

function Home() {
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <h3 className="mt-3 title-header">Overview</h3>
        <button type="button" className="btn btn-primary mt-3 custom-button">
          Add Funds
          <span>
            <i className="bx bxs-plus-circle ms-1" />
          </span>
        </button>
      </div>
      <Row className="mt-3 flex-row-reverse">
        <Col lg="4">
          <Col lg="12">
            <CardLayout>
              <div className="text-center card-profile">
                <img src={profileImage} alt="" className="profile-image mb-3" />
                <h5 className="custom-heading">Nick Herasimenka</h5>
                <span className="sub-label">United States</span>
                <div className="social-icon">
                  <i className="bx bxl-twitter"></i>
                  <i className="bx bxl-facebook-circle"></i>
                  <i className="bx bxl-linkedin-square"></i>
                  <i className="bx bxl-whatsapp"></i>
                </div>
              </div>
              <div className="mt-5 user-list">
                <div className="d-flex justify-content-between">
                  <h5 className="custom-heading ">Our Users</h5>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </div>
                <ul className="mt-2">
                  <li className="d-flex justify-content-between mb-4">
                    <div className="d-inline-flex">
                      <img
                        src={profileImage2}
                        alt=""
                        className="our-userProfile"
                      />
                      <div className="mt-1 ms-1 d-flex flex-column">
                        <label className="user-name">Drew James</label>
                        <label className="sub-name">United States</label>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="contact-number">Mobile:9878654323</span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between mb-4">
                    <div className="d-inline-flex">
                      <img
                        src={profileImage3}
                        alt=""
                        className="our-userProfile"
                      />
                      <div className="mt-1 ms-1 d-flex flex-column">
                        <label className="user-name">Drew James</label>
                        <label className="sub-name">United States</label>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="contact-number">Mobile:9878654323</span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between mb-4">
                    <div className="d-inline-flex">
                      <img
                        src={profileImage4}
                        alt=""
                        className="our-userProfile"
                      />
                      <div className="mt-1 ms-1 d-flex flex-column">
                        <label className="user-name">Drew James</label>
                        <label className="sub-name">United States</label>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="contact-number">Mobile:9878654323</span>
                    </div>
                  </li>
                </ul>
              </div>
            </CardLayout>
          </Col>
          <Col lg="12 mt-4">
            <CardLayout>
              <div className="d-flex justify-content-between">
                <h5 className="custom-heading ">Product Video</h5>
                <i className="bx bx-dots-vertical-rounded"></i>
              </div>
              <NewVideoPlayer />
            </CardLayout>
          </Col>
        </Col>
        <Col lg="8">
          <Row>
            <Col lg="6">
              <CardLayout>
                <div className="d-flex justify-content-between">
                  <h5 className="custom-heading">Statistics</h5>
                  <select
                    name="select7"
                    id="select7"
                    className="custom-select sources customSelect"
                    placeholder="Select"
                  >
                    <option value="">Last 6 Months</option>
                    <option value="">Last 3 Months</option>
                    <option value="">Last 1 Months</option>
                  </select>
                </div>
                <div className="mt-2">
                  <img src={linGraph} className="w-100"  height={350} />
                </div>
              </CardLayout>
            </Col>
            <Col lg="6">
              <CardLayout>
                <div className="d-flex justify-content-between">
                  <h5 className="custom-heading">Sales Distribution</h5>
                </div>
                <div className="mt-2 w-100">
                  <img src={peiGraph}  height={350}  className="w-100"/>
                </div>
              </CardLayout>
            </Col>
            <Col lg="12" className="mt-3">
              <CardLayout>
                <h5 className="custom-heading">Referrer</h5>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Views</th>
                        <th>Sales</th>
                        <th>Conversion</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>google.com</td>
                        <td>3746</td>
                        <td>725</td>
                        <td>43%</td>
                        <td>$ 19,261</td>
                      </tr>
                      <tr>
                        <td>google.com</td>
                        <td>3746</td>
                        <td>725</td>
                        <td>43%</td>
                        <td>$ 19,261</td>
                      </tr>
                      <tr>
                        <td>google.com</td>
                        <td>3746</td>
                        <td>725</td>
                        <td>43%</td>
                        <td>$ 19,261</td>
                      </tr>
                      <tr>
                        <td>google.com</td>
                        <td>3746</td>
                        <td>725</td>
                        <td>43%</td>
                        <td>$ 19,261</td>
                      </tr>
                      <tr>
                        <td>google.com</td>
                        <td>3746</td>
                        <td>725</td>
                        <td>43%</td>
                        <td>$ 19,261</td>
                      </tr>
                      <tr>
                        <td>google.com</td>
                        <td>3746</td>
                        <td>725</td>
                        <td>43%</td>
                        <td>$ 19,261</td>
                      </tr>
                    </tbody>
                  </Table>
                  <a href="">Show More</a>
                </div>
              </CardLayout>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Home;
