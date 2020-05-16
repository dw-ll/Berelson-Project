import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { Switch } from "react-router";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import resultData from "../json/resultData";

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "lightgrey",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
};

const Results = (props) => {
  const [galleryImages, setImages] = useState([]);
  const [renderedImages, setRenderedImages] = useState([]);

  useEffect(() => {
    onLoad();
    console.log("New Render");
  }, [props.match.params.id]);

  function onLoad() {
    var input = getQuery();
    var results = getResults(input);
    setImages(
      results.map((i) => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.caption}</div>
            {i.hasOwnProperty("tags") && setCustomTags(i)}
          </div>
        );
        return i;
      })
    );
  }

  const getQuery = () => {
    let query = props.match.params.search;
    return query;
  };

  const getResults = (input) => {
    if (input.length > 0) {
      const query = input.toLowerCase();
      var searchResult = [];
      for (let i = 0; i < resultData.length; i++) {
        resultData[i].tags.forEach((tag) => {
          if (tag && tag.value) {
            if (!tag.value.value) {
              if (tag.value.includes(query)) {
                searchResult.push(resultData[i]);
              }
            } else {
              if (tag.value.value.includes(query)) {
                searchResult.push(resultData[i]);
              }
            }
          }
        });
      }
      return searchResult;
    }
  };

  const renderResults = (results) => {
    setRenderedImages(
      results.map((i) => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.caption}</div>
            {i.hasOwnProperty("tags") && setCustomTags(i)}
          </div>
        );
        return i;
      })
    );
  };

  const setCustomTags = (i) => {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  };
  const showResults = () => {
    console.log("Showing:", galleryImages);
    return (
      <Gallery
        images={galleryImages}
        enableImageSelection={false}
        thumbnailWidth={500}
        thumbnailHeight={500}
        tagStyle={{
          display: "none",
        }}
        showLightboxThumbnails={true}
        backdropClosesModal={true}
      />
    );
  };
  return (
    <Router>
      <Switch>
        <div>
          <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
          <div className="search-results">{galleryImages && showResults()}</div>
        </div>
      </Switch>
    </Router>
  );
};
export default withRouter(Results);
