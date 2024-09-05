import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
} from "react-icons/di";

function Day1() {
  return (
    <div className="grid-container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

function LeftContainer() {
  return (
    <div className="grid-container__left">
      <div className="grid-container__left--text-box">
        <h1>
          <span style={{ color: "#fff" }} className="hover">
            H
          </span>
          ello!{" "}
          <span style={{ color: "#fff" }} className="hover">
            I
          </span>{" "}
          am{" "}
          <span style={{ color: "#fff" }} className="hover">
            S
          </span>
          urya{" "}
          <span style={{ color: "#fff" }} className="hover">
            K
          </span>
          umar{" "}
          <span style={{ color: "#fff" }} className="hover">
            A
          </span>
          n{" "}
          <span style={{ color: "#fff" }} className="hover">
            A
          </span>
          spiring {"  "}
          <span className="translateY-1">
            <DiReact
              color="#ffff"
              size={60}
              className="grid-container__left--text-box-img  animation-rotate"
            />
          </span>{" "}
          <span style={{ color: "#fff" }} className="hover">
            R
          </span>
          eact{" "}
          <span style={{ color: "#fff" }} className="hover">
            D
          </span>
          ev
        </h1>
      </div>
      <div className="grid-container__left--learn-box">
        <div className="grid-container__left--learn-box-skills">
          <h2>Skills that I am Currently working on!</h2>
          <br />
          <div className="grid-container__left--learn-box-skills-list">
            <DiHtml5 size={60} color="#E34F26" className="hover" />
            <DiCss3 size={60} color="#1572B6" className="hover" />

            <DiSass size={60} color="#CC6699" className="hover" />
            <DiJavascript1 size={60} color="#F7DF1E" className="hover" />
            <DiReact
              className="animation-rotate hover"
              size={60}
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightContainer() {
  return (
    <div className="grid-container__right">
      <div className="grid-container__right--img-box">
        <img className="animation-rotate" src="/logo512.png" alt="React Logo" />
      </div>
    </div>
  );
}
export default Day1;
