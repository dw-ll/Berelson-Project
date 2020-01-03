import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Greeting from "react-lazy-hero";
import Gita from "../profiles/component/people/ww2_gita.jsx";
import Henry from "../profiles/component/people/ww2_henry.jsx";
import Happy from "../profiles/component/people/ww2_happy.jsx";
import Rachella from "../profiles/component/people/ww2_rachella.jsx";
import GreetImage from "../Media/WWII/HappyBoys4282.jpeg";

import "react-vertical-timeline-component/style.min.css";
const routes = [
  {
    component: Gita,
    path: "/ww2/gita"
  },
  {
    component: Happy,
    path: "/ww2/happy_boys"
  },
  {
    component: Henry,
    path: "/ww2/henry"
  },
  {
    component: Rachella,
    path: "/ww2/rachella"
  }
];
const ww2TimelineObjects = [
  {
    title: "Gita Baigelman",
    subtitle: "More info about Gita.",
    style:"image-gita",
    image: require("../Media/WWII/gita.Baigelman144.jpeg"),
    path: "/ww2/gita"
  },
  {
    title: "Happy Boys",
    subtitle: "More info about the Happy Boys.",
    style:"image-happy-boys",
    image: require("../Media/WWII/HappyBoys4282.jpeg"),
    path: "/ww2/happy_boys"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    style:"image-henry",
    image: require("../Media/WWII/Henry.Baigelman118.jpeg"),
    path: "/ww2/henry"
  },
  {
    title: "Rachella",
    subtitle: "More info about Rachella.",
    style:"image-rachella",
    image: require("../Media/WWII/Rachella148.jpeg"),
    path: "/ww2/rachella"
  }
];

//import {Print} from 'material-ui-icons/AccessAlarm';

class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.myRef = createRef(); // Create a ref object
    this.state = {
      popped: false
    };
  }

  componentDidMount() {
    this.myRef.current.scrollIntoView({
      behavior: "auto"
    });
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }
  handlePop = (e, i) => {
    e.preventDefault();

    this.setState({
      popped: i,
      anchorEl: e.currentTarget
    });
  };
  handleRequestClose = () => {
    this.setState({
      popped: null
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              exact
              render={() => {
                return <route.component />;
              }}
            />
          ))}

          <div ref={this.myRef} className="back">
            <div id="landing">
              <Greeting
                opacity="0.2%"
                isCentered={true}
                imageSrc={GreetImage}
                className="greeting"
              >
                <h3 style={{ color: "white" }}>World War II</h3>
                <div
                  className="scroll-down"
                  onClick={() => {
                    this.scrollDiv.current.scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                ></div>
              </Greeting>
            </div>

            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline">
                <div className="era-starter-info">
                  <h4 style={{ textAlign: "center" }}>World War 2</h4>
                  <h6 style={{ textAlign: "center" }}>
                    History and more information about the family during the
                    second World War.
                  </h6>
                </div>
              </div>
              <ul className="eras">
                {ww2TimelineObjects.map((person, i) => (
                  <li className="era-span">
                    <Link to={person.path} className="span-link">
                      <a
                        class={person.style}
                        style={{
                          backgroundImage: 'url("' + person.image + '")'
                        }}
                        href=" "
                      >
                        &nbsp;
                      </a>
                    </Link>
                    <div className="l-container era-text-container">
                      <div className="page-section__row era-text-inner-container">
                        <div className="page-section__title-container era-text-break"></div>
                        <div className="page-section__content era-text">
                          <Link to={person.path} className="span-title-link">
                            <h3 className="era-text-link">{person.title}</h3>
                          </Link>
                          <p className="era-date">
                            <span>1900-1950</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;
