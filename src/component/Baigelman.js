import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import TextLoop from "react-text-loop";
import DavidProfile from "../Media/Pre-WWII/DavidProfile.jpeg";
import HenryProfile from "../Media/Post-WWII 2/Henry.Baigelman119 2.jpeg";



class Baigelman extends Component {
    render() {
        return (
    
            <div class="container" style={{ marginTop: "35px" }}>
                <div className="intro-text-paragraph-container">
                    <h2 className="intro-text-loop">
                        The Baigelman (Beigelman) family of Łódź were &nbsp;
                    <TextLoop>
                            <span className="intro-text-loop">
                                prominent musicians
                      </span>
                            <span className="intro-text-loop"> composers</span>
                            <span className="intro-text-loop"> conductors</span>
                            <span className="intro-text-loop">
                                {" "}
                        theater performers
                      </span>
                        </TextLoop>{" "}
                    </h2>
                    <h4
                        style={{ textAlign: "left" }}
                        className="intro-text-paragraph"
                    >
                        The patriarch, Simon (Szymon) Baigelman was first oboe for
                        the Łódź Symphony Orchestra, which was populated mostly by
                        musicians related to the family including the last names of
                        Spielman, Mutzman, Ostrowiec, and Spaismacher. Perhaps the
                        most famous was prodigy David (Dawid) Beigelman (1887-1945),
                        a violinist, orchestra leader, and composer of Yiddish
                        theater music and songs. He became director of the Łódź
                        Yiddish Theater in 1912. Among other major accomplishments,
                        he arranged the music for the hugely popular S. Ansky play,
                        The Dybbuk. In 1929 he became composer and music director of
                        the Łódź Ararat Theater.
                  </h4>
                </div>
                <div class="row profiles">
                    <div class="col-4">
                        <h4
                            id="toggle-text"
                            style={{ textAlign: "center" }}
                            className="intro-text"
                        >
                            meet the family
                    </h4>
                        <h6 class="hover-prompt">
                            Hover over a portrait to learn more about that person.
                    </h6>

                        <div class="hover-text-container"></div>
                    </div>

                    <div class="col-4">
                        <Card id="david-profile" className="landing-card">
                            <Link to="/pre/david/">
                                <Card.Img src={DavidProfile}></Card.Img>
                            </Link>
                            <Card.Body>
                                <Card.Title>David Baigelman</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div class="col-4">
                        <Card id="henry-profile" className="landing-card">
                            <Link to="/pre/henry/">
                                <Card.Img src={HenryProfile}></Card.Img>
                            </Link>
                            <Card.Body>
                                <Card.Title>Henry Baigelman</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
export default Baigelman;