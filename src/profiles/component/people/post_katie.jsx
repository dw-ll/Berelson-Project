import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Post from "../../../component/post.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Post-WWII%202/";
const slideImages = `${IMGURL}katie159.jpeg`;

const Slideshow = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/post"
          exact
          render={() => {
            return <Post />;
          }}
        />
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 className="profile_title">Katie</h3>
              <h6>B. 1900 D. 1950</h6>
              <h6 className="profile_bio">
                Katie was lorem ipsumdolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </h6>
            </div>
            <div class="col-6">
              <img
                className="single_photo"
                src={slideImages}
                alt=""
                height="500px"
              />
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;