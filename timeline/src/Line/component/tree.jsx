import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Tree from "react-d3-tree";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";

const myTreeData = [
  {
    name: "Koppel Multzman",
    attributes: {
      keyA: "Koppel Multzman",
      keyB: "Chana"
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "Pinchas",
          keyB: "Freide",
          keyC: "Pessel",
          keyD: "Rosa"
        }
      },
      {
        name: "Level 2: B"
      }
    ]
  }
];

class FamilyTree extends Component {
  render() {
    return (
      <div class="Treewrapper">
          <div class ="treecase">
        <div class="tree">
          <ul>
            <li>
              <a href="#">Koppel</a>
              <ul>
                <li>
                  <a href="#">Pinchas</a>
                  <ul>
                    <li>
                      <a href="#">Katz</a>
                      <ul>
                        <li>
                          <a href="#">Abram</a>
                        </li>
                        <li>
                          <a href="#">? (Brother)</a>
                          <ul>
                            <li>
                              <a href="#">Michael</a>
                              <ul>
                                <li>
                                  <a href="#">Married?</a>
                                  <a href="#">Putty</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Freide</a>
                </li>
                <li>
                  <a href="#">Pessel</a>
                </li>
                <li>
                  <a href="#">Rosa</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Chana</a>
              <ul>
                <li>
                  <a href="#">Simon (Married Riva)</a>
                  <ul>
                    <li>
                      <a href="#">David (Married Chana Federman)</a>
                      <ul>
                        <li>
                          <a href="#">Dinchaz B. Lodz</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Chaya</a>
                      <ul>
                        <li>
                          <a href="#">Liebel</a>
                        </li>
                        <li>
                          <a href="#">Anja</a>
                        </li>
                        <li>
                          <a href="#">Shlameck</a>
                        </li>
                        <li>
                          <a href="#">Rose</a>
                        </li>
                        <li>
                          <a href="#">Lola</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Henry (Married Greta Glazer)</a>
                      <ul>
                        <li>
                          <a href="#">Liebel</a>
                        </li>
                        <li>
                          <a href="#">Anja</a>
                        </li>
                        <li>
                          <a href="#">Shlameck</a>
                        </li>
                        <li>
                          <a href="#">Rose</a>
                        </li>
                        <li>
                          <a href="#">Lola</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">Shlomo B. Lodz</a>
                    </li>
                    <li>
                      <a href="#">Eita</a>
                    </li>
                    <li>
                      <a href="#">Rosa</a>
                    </li>
                    <li>
                      <a href="#">Avram</a>
                    </li>
                    <li>
                      <a href="#">Chaina</a>
                    </li>
                    <li>
                      <a href="#">Chamon?</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Leizer (Married Ida)</a>
                </li>
                <li>
                  <a href="#">Maika (Married Rochverg [Frank])</a>
                </li>
                <li>
                  <a href="#">Yessel (Married Paige Laufer)</a>
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
