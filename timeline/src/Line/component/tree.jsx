import React, { createRef, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Script from "react-load-script";
import "react-vertical-timeline-component/style.min.css";
import HorizontalScroll from "react-scroll-horizontal";
import Tree from "react-d3-tree";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import Missing from "../../Media/missing_profile.jpg";
import Chana from "../../Media/Pre-WWII/Chana.Fodeman025.jpeg";
import Abram from "../../Media/Abram.Baigelman040.pdf";
import DavidB from "../../Media/Pre-WWII/David.Baigelman016.jpeg";
import Henry from "../../Media/Post-WWII 2/Henry.Baigelman119.jpeg";
import Riva from "../../Media/Modern/Riva346.jpeg";
import Jack from "../../Media/Post-WWII 2/Jack.Baigelman057.jpeg";

// Profile Pages
import AbramP from "../../gallery/component/people/pre_abram.jsx";
import ChanaP from "../../gallery/component/people/pre_chana.jsx";
import David from "../../gallery/component/people/pre_david.jsx";
import Gita from "../../gallery/component/people/pre_gita.jsx";
import HenryP from "../../gallery/component/people/pre_henry.jsx";
import Jolly from "../../gallery/component/people/pre_jolly.jsx";
import Leon from "../../gallery/component/people/pre_leon.jsx";
import Lodz from "../../gallery/component/people/pre_lodz.jsx";
import ChanaGreet from "../../Media/Pre-WWII/Gita.Baigelman142.jpeg";
import Gita2 from "../../gallery/component/people/ww2_gita.jsx";
import Henry2 from "../../gallery/component/people/ww2_henry.jsx";
import Happy from "../../gallery/component/people/ww2_happy.jsx";
import Rachella from "../../gallery/component/people/ww2_rachella.jsx";
import GreetImage from "../../Media/WWII/HappyBoys4282.jpeg";
import Ed from "../../gallery/component/people/post_ed.jsx";
import Fonia from "../../gallery/component/people/post_fonia.jsx";
import GitaPost from "../../gallery/component/people/post_gita.jsx";
import HenryPost from "../../gallery/component/people/post.henry.jsx";
import JackPost from "../../gallery/component/people/post_jack.jsx";
import Justina from "../../gallery/component/people/post_justina.jsx";
import Katie from "../../gallery/component/people/post_katie.jsx";
import Levin from "../../gallery/component/people/post_levin.jsx";
import Pinek from "../../gallery/component/people/post_pinek.jsx";
import Pola from "../../gallery/component/people/post_pola.jsx";
import RachellaPost from "../../gallery/component/people/post_rachella.jsx";
import RivaPost from "../../gallery/component/people/post_riva.jsx";
import Sam from "../../gallery/component/people/post_sam.jsx";
import Sandy from "../../gallery/component/people/post_sandy.jsx";
import Adolfo from "../../gallery/component/people/present_adolfo.jsx";
import Carol from "../../gallery/component/people/present_carol.jsx";
import EdModern from "../../gallery/component/people/present_ed.jsx";
import FoniaModern from "../../gallery/component/people/present_fonia.jsx";
import HenryModern from "../../gallery/component/people/present_henry.jsx";
import JackModern from "../../gallery/component/people/present_jack.jsx";
import Mordecai from "../../gallery/component/people/present_mordecai.jsx";
import PolaModern from "../../gallery/component/people/present_pola.jsx";
import Rachel from "../../gallery/component/people/present_rachel.jsx";
import RivaModern from "../../gallery/component/people/present_riva.jsx";
import Sevek from "../../gallery/component/people/present_sevek.jsx";
import Starski from "../../gallery/component/people/present_starski.jsx";

const routes = [
  {
    component: AbramP,
    path: "/pre/abram"
  },
  {
    component: ChanaP,
    path: "/pre/chana"
  },
  {
    component: David,
    path: "/pre/david"
  },
  {
    component: Gita,
    path: "/pre/gita"
  },
  {
    component: HenryP,
    path: "/pre/henry"
  },
  {
    component: Jolly,
    path: "/pre/jolly_boys"
  },
  {
    component: Leon,
    path: "/pre/leon"
  },
  {
    component: Lodz,
    path: "/pre/lodz"
  },
  {
    component: Gita2,
    path: "/ww2/gita"
  },
  {
    component: Happy,
    path: "/ww2/happy_boys"
  },
  {
    component: Henry2,
    path: "/ww2/henry"
  },
  {
    component: Rachella,
    path: "/ww2/rachella"
  },
  { component: Ed, path: "/post/ed" },
  { component: Fonia, path: "/post/fonia" },
  { component: GitaPost, path: "/post/gita" },
  { component: HenryPost, path: "/post/henry" },
  { component: JackPost, path: "/post/jack" },
  { component: Justina, path: "/post/justina" },
  { component: Katie, path: "/post/katie" },
  { component: Levin, path: "/post/levin" },
  { component: Pinek, path: "/post/pinek" },
  { component: Pola, path: "/post/pola" },
  { component: Rachella, path: "/post/rachella" },
  { component: Riva, path: "/post/riva" },
  { component: Sam, path: "/post/sam" },
  { component: Sandy, path: "/post/sandy" },
  { component: Adolfo, path: "/present/adolfo" },
  { component: Carol, path: "/present/carol" },
  { component: Ed, path: "/present/ed" },
  { component: Fonia, path: "/present/fonia" },
  { component: HenryModern, path: "/present/henry" },
  { component: Jack, path: "/present/jack" },
  { component: Mordecai, path: "/present/mordecai" },
  { component: Pola, path: "/present/pola" },
  { component: Rachel, path: "/present/rachel" },
  { component: Riva, path: "/present/riva" },
  { component: Sevek, path: "/present/sevek" },
  { component: Starski, path: "/present/starski" }
];

class FamilyTree extends Component {
  constructor(props) {
    super(props);
    this.topRef = createRef(); // Create a ref object
  }
  componentDidMount() {
    this.topRef.current.scrollIntoView({
      behavior: "auto"
    });
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.topRef.current.offsetTop);
  }
  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  render() {
    return (
      <div class="top" ref={this.topRef}>
        <Script
          url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Script
          url="jquery.zoomooz.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div>
          <h4 style={{ textAlign: "center" }}>Berelson Family Tree</h4>
          <h6 style={{ textAlign: "center" }}>
            Explore and learn more about the Berelson ancestry.
          </h6>
        </div>

        <div class="tree-wrapper">
          <div class="tree">
            <ul>
              <li>
                <a href="#" class="zoomTarget">
                  <img class="tree-profile" src={Missing} />
                  <div class="tree-info">Koppel</div>
                </a>
                <a href="#" class="zoomTarget">
                  <img class="tree-profile" src={Chana} />
                  <div class="tree-info">Chana Fodeman</div>
                </a>
                <ul>
                  <li>
                    <a class="family spouse" href="#">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Pinchas</div>
                    </a>

                    <a href="#" class="zoomTarget">
                      Katz
                    </a>
                    <ul>
                      <li>
                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={Abram} />
                          <div class="tree-info">Abram</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Brother</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Michael</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Married</div>
                                </a>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Putty</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Freide</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Pessel</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Rosa</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Simon</div>
                    </a>
                    <a href="#" class="zoomTarget">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Riva</div>
                    </a>

                    <ul>
                      <li>
                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={DavidB} />
                          <div class="tree-info">David</div>
                        </a>

                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana Federman</div>
                        </a>

                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Dinchaz</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chaya</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Liebel</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Anja</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Shlameck</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Rose</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Lola</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={Henry} />
                          <div class="tree-info">Henry</div>
                        </a>
                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Greta Glazer</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Riva} />
                              <div class="tree-info">Riva</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">David Berelson</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#" class="zoomTarget">
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Serj</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Simon</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Bahbi Fisher</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#" class="zoomTarget">
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Serj</div>{" "}
                                </a>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Dan Wagowski</div>
                                </a>
                                <ul>
                                  <li>
                                    <a class="short-single-child" href="#">
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Eli</div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Aron</div>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Abby</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Shlomo</div>
                        </a>
                      </li>

                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Rosa</div>
                        </a>
                        <a href="#" class="zoomTarget">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Abram</div>
                        </a>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Raquel</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Felicia</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Avram</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chaina</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chamon</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Eita</div>
                        </a>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Shmuel</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Jack} />
                              <div class="tree-info">Jack</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Rita Guttman</div>
                            </a>
                            <ul>
                              <li>
                                <li>
                                  <a href="#" class="zoomTarget">
                                    {" "}
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Sandy</div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="zoomTarget">
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Mark</div>
                                  </a>
                                  <a href="#" class="zoomTarget">
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Blaine</div>
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="#" class="zoomTarget">
                                        {" "}
                                        <img
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Mollie</div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" class="zoomTarget">
                                        {" "}
                                        <img
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Nina</div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#" class="zoomTarget">
                                    {" "}
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Illana</div>
                                  </a>
                                </li>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Avram</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Leizer</div>
                    </a>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Ida</div>
                    </a>
                    <ul>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Shmuel</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Avram</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chava</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Sheindel</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Maika</div>
                    </a>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Rochverg</div>
                    </a>
                    <ul>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Max</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Simon</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Phillip</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Girl</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Girl</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Yessel</div>
                    </a>
                    <a href="#" class="zoomTarget">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Paige Laufer</div>
                    </a>
                    <ul>
                      <li>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Yitzshak Baigelman</div>
                        </a>
                        <a href="#" class="zoomTarget">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana HS</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Abram</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Bryndi</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Morris Rubenstein</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Sam</div>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Ben</div>
                                </a>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Rose</div>
                                </a>
                                <ul>
                                  <li>
                                    <a href="#" class="zoomTarget">
                                      {" "}
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Joan Boarch</div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="zoomTarget">
                                      {" "}
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Mitch</div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="zoomTarget">
                                      {" "}
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Dan</div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Esther</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Sherman</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Child</div>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="zoomTarget">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Child</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Rivka</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Gottlieb</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Ethel</div>
                            </a>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Bond</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="zoomTarget">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Avram</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
  
      </div>
    );
  }
}
export default FamilyTree;
