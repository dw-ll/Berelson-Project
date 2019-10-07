import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Switch } from "react-router";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Archive from "./archive";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import About from "./about";
import Tree from "./tree";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Greeting from "react-lazy-hero";
import FoniaGreet from "../../Media/Post-WWII 2/Fonia213.jpeg";
import Lodz from "../../Media/lodz.jpg";
import * as famData from "../../family.json";

const routes = [
  {
    component: Pre,
    path: `${process.env.PUBLIC_URL}/pre/`
  },
  {
    component: WWII,
    path: "/ww2"
  },
  {
    component: Post,
    path: "/post"
  },
  {
    component: Present,
    path: "/present"
  },
  {
    component: About,
    path: "/about"
  },
  {
    component: Archive,
    path: "/archive/"
  },
  {
    component: Tree,
    path: "/tree/"
  }
];

const timelineObjects = [
  {
    title: " Pre-World War II",
    subtitle: "Photos and information spanning the time before World War Two",
    image: require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg"),
    path: `${process.env.PUBLIC_URL}/pre/`,
    divID: "preDiv",
    nodeColor: "rgb(40,49,72)"
  },
  {
    title: "World War II",
    subtitle: "Photos and information spanning the time during World War Two.",
    image: require("../../Media/WWII/HappyBoys4282.jpeg"),
    path: "/ww2",
    divID: "warDiv",
    nodeColor: "rgb(142,39,17)"
  },
  {
    title: "Post-World War II",
    subtitle: "Photos and information spanning the time after World War Two.",
    image: require("../../Media/Post-WWII 2/pola178.jpeg"),
    path: "/post",
    divID: "postDiv",
    nodeColor: "rgb(102, 102, 51)"
  },
  {
    title: "Present",
    subtitle: "Photos and information about recent days.",
    image: require("../../Media/Modern/Sevek261.jpeg"),
    path: "/present",
    divID: "modernDiv",
    nodeColor: "rgb(204, 153, 0)"
  }
];

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.preScroll = createRef();
    this.warScroll = createRef();
    this.postScroll = createRef();
    this.presentScroll = createRef();
    this.attachRef = target => this.setState({ target });
    this.state = {
      popped: false
    };
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
    const cards = timelineObjects.map((card, i) => (
      <React.Fragment key={i}>
        {i % 2 === 0 ? (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={i}
            contentStyle={{ border: "blue" }}
            iconStyle={{
              background: card.nodeColor,
              color: "#000"
            }}
            paddingTop="0em"

            //icon={<Print/>}
          >
            <div className={card.divID}>
              <Card className="card-style">
                <CardActionArea>
                  <CardMedia
                    style={{ height: 0, paddingTop: "100%" }}
                    image={card.image}
                  />
                  <CardContent>
                    <Typography
                      className="card-info"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.title}
                    </Typography>
                    <Typography className="card-info" component="p">
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={card.path}
                >
                  Learn More
                </Button>
                <Popover
                  open={this.state.popped === i}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    horizontal: "right",
                    vertical: "center "
                  }}
                  transformOrigin={{
                    horizontal: "right",
                    vertical: "bottom"
                  }}
                  onClose={this.handleRequestClose}
                >
                  Right popover text
                </Popover>
              </Card>
            </div>
          </VerticalTimelineElement>
        ) : (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={i}
            contentArrowStyle={{ border: "#ffffff" }}
            iconStyle={{
              background: card.nodeColor,
              color: "#000"
            }}
            paddingTop="0em"

            //icon={<Print/>}
          >
            <div>
              <Card className="card-style">
                <CardActionArea>
                  <CardMedia
                    style={{ height: 0, paddingTop: "100%" }}
                    image={card.image}
                  />
                  <CardContent>
                    <Typography
                      className="card-info"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.title}
                    </Typography>
                    <Typography className="card-info" component="p">
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={card.path}
                >
                  Learn More
                </Button>
                <Popover
                  open={this.state.popped === i}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    horizontal: "left",
                    vertical: "center "
                  }}
                  transformOrigin={{
                    horizontal: "left",
                    vertical: "bottom"
                  }}
                  onClose={this.handleRequestClose}
                >
                  Left popover text
                </Popover>
              </Card>
            </div>
          </VerticalTimelineElement>
        )}
      </React.Fragment>
    ));

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              key={i}
              exact
              render={() => {
                return <route.component />;
              }}
            />
          ))}

          <div id="hero-greet">
        
            <Greeting
              minHeight="100vh"
              opacity="0"
              isCentered={true}
              imageSrc={Lodz}
              className="greeting"
            >
            <div className="greeting-greet">
              <h3 className="greeting-text" style={{ color: "black", fontFamily: "Times", marginTop:"10px"}}>
                The Berelson Project
              </h3>
              <div className="greeting-button">
                <Grid item>
                  <ButtonGroup
                    aria-label="Outlined primary button group"
                  >
                    <Button
                      component={Link}
                      to="/archive"
                      className="greeting-button-text"
                    >
                      Visit Archive
                    </Button>
                  </ButtonGroup>
                </Grid>
              </div>
              </div>
            </Greeting>
          </div>
        </Switch>
      </Router>
    );
  }
}
render(<Line />, document.getElementById("root"));
