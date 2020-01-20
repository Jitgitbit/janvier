import React from "react";
import "./App.css";
import ComponentTitle from "./components/ComponentTitle";
import ItemTeam from "./components/ItemTeam";
import ComponentTitleTitle from "./components/ComponentTitleTitle";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <header id="header" className="section-header scroll">
          <a href="./">
            <img className="icon" src="https://learntocodetogether.nl/assets/icon.svg" />
          </a>
          <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
            <img className="meetup-icon" src="https://learntocodetogether.nl/assets/meetup-icon.svg" />
          </a>
          <nav>
            <a href="/courses.html">Our Courses</a>
          </nav>
        </header>
        <div className="section-header-spacer"></div>
        <div className="content">
          <div className="section section-what-usp">
            <div className="component-section-header">
              <div className="title-badge">
                <div className="title-badge-title">Do you want to</div>
              </div>
              <h2>
                <ComponentTitle content = "Learn how to code" />
              </h2>
              <div className="description">
                Awesome! Let’s do this together. We are here to support you in your coding journey.
              </div>
            </div>
            <div className="component-usp-row">
                <ItemTeam src="https://learntocodetogether.nl/assets/team.svg">
                  <ComponentTitleTitle content="Get help from experienced developers"/>
                </ItemTeam>
                <ItemTeam src="https://learntocodetogether.nl/assets/community.svg">
                  <ComponentTitleTitle content="Learn &amp; share with our community"/>
                </ItemTeam>
                <ItemTeam src="https://learntocodetogether.nl/assets/personal-speed.svg">
                  <ComponentTitleTitle content="Personal &amp; at your own speed"/>
                </ItemTeam>
            </div>
          </div>
          <div className="section-line">
            <div className="line "></div>
          </div>
          <div className="section section-courses-usp">
            <div className="component-section-header">
              <div className="title-badge">
                <div className="title-badge-title">Courses</div>
              </div>
              <h2>
                <ComponentTitle content = "Our courses" />
              </h2>
              <div className="description">
                We have created courses to help you learn, with easy to follow steps and some sparks of fun!
              </div>
            </div>
            <div className="component-usp-row">
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/expand-horizon.svg" />
                <ComponentTitleTitle content = "Learn new skills and expand your horizon"/>
              </div>
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/developers.svg" />
                <ComponentTitleTitle content = "Follow courses created by experienced developers"/>
              </div>
              <div className="item team">
                <img className="image" style={{ width: "200px" }} src="https://learntocodetogether.nl/assets/step-by-step.svg" />
                <ComponentTitleTitle content = "Fun, hands on and easy to follow"/>
              </div>
            </div>
          </div>
          <div className="section-line">
            <div className="line "></div>
          </div>
          <div className="section section-why-usp">
            <div className="component-section-header">
              <div className="title-badge">
                <div className="title-badge-title">Why?</div>
              </div>
              <h2>
              <ComponentTitle content = "Why we do this" />
              </h2>
              <div className="description">
                It’s really simple actually. We just love to combine our passion for code with our love for teaching. 
                Coding is so much fun when doing it together.
              </div>
            </div>
            <div className="component-usp-row">
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/technology.svg" />
                <ComponentTitleTitle content = "Technology"/>
                <div className="description">
                  We love to experiment and create awesome stuff from the comfort of our couch.
                </div>
              </div>
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/community.svg" />
                <ComponentTitleTitle content = "People"/>
                <div className="description">
                  It’s always fun to do things together, the excitement and the collaborations.
                </div>
              </div>
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/personal-speed.svg" />
                <ComponentTitleTitle content = "Teaching"/>
                <div className="description">
                  We like to learn and to teach others the stuff we know.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-line">
          <div className="line "></div>
        </div>
        <div className="section-footer">
          <img className="logo" src="https://learntocodetogether.nl/assets/logo.svg" />
          <div className="title">Created by</div>
          <div className="subtitle">Rein Op &#x27;t land &amp; Danny van der Jagt</div>
          <div className="team-container">
            <img className="team" src="https://learntocodetogether.nl/assets/danny&rein.svg" />
          </div>
        </div>
      </div>
    );
  }
}
