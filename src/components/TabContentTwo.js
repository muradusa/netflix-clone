import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">TRY IT NOW</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/*TV Image Container*/}
          <div>
            <img src={ImgTv} style={{ width: "18.75rem" }} alt="TV" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          {/*Tablet Image Container*/}
          <div>
            <img src={ImgTablet} style={{ width: "18.75rem", paddingTop: '0.625rem' }} alt="TV" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          {/*Macbook Image Container*/}
          <div>
            <img
              src={ImgMacbook}
              style={{ width: "18.75rem", paddingTop: '0.625rem', paddingBottom: '0.625rem' }}
              alt="TV"
            />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

// Main Tab Content Container

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  //Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2rem 0;
  }
  span {
    grid-column: 1 / 8;
  }
  .btn {
    margin: 0 1.25rem;
    grid-column: 10 / 12;
  }
`;
