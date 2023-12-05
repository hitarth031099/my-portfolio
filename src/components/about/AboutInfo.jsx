import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div className="about" style={{fontWeight:"bold"}}>
      <h1
        style={{
          marginTop: "10px",
          fontFamily: "Fira Code",
          fontSize: "3.5rem",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#32CD30",marginBottom:"20px" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text" style={{marginBottom:"10px"}}>
          <p style={{ marginLeft:"15%",fontWeight:"bold" }}>
            Hi people, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Hitarth Patel
            </span>{" "}
            from Ahmedabad,India. I did my B.Tech in Information Technology
            from{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Nirma University
            </span>{" "}
            and currently I'm a graduate student at{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Stevens Institute of Technology, New Jersey
            </span>
            .
          </p>
          <br></br>
          <p style={{ marginLeft:"20%",textAlign:"justify"}}>
            Apart from developement, some things I like are<br></br>
            <br></br>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline"}} />{" "}
                Watching Cricket
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Cooking
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Travelling
              </li>
            </ul>
          </p>
        </div>
        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      <TechStack />
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "50px" }}
          username="hitarth031099"
          blockMargin={6}
          blockSize={12}
          fontSize={16}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
