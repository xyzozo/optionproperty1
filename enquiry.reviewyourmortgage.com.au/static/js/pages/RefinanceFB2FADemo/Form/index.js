import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { ProgressBar } from "react-bootstrap";
import { beginPage } from "../../../utils/beginPage";
import checkLock from "../assets/images/check-lock.png";
import "./style.scss";

import StepBegin from "./StepBegin";
import StepOne from "./StepOne";
import SecondStep from "./SecondStep";
import StepThree from "./ThirdStep";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import Detail from "./Detail";
import StepEight from "./StepEight";
import StepNine from "./StepNine";
import StepLoading from "./StepLoading";
import StepVerify from "./StepVerify";
import UpdatePhone from "./StepUpdatePhone";

const progressPer = {
  BEGIN: 10,
  ONE: 23,
  TWO: 30,
  THREE: 35,
  FOUR: 40,
  FIVE: 50,
  SIX: 60,
  SEVEN: 80,
  EIGHT: 100,
  DETAIL: 100,
  NINE: 100,
  LOADING: 100,
  UPDATE: 100,
  VERIFY: 100,
};

const Main = () => {
  const history = useHistory();
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isProgress, setIsProgress] = useState(true);
  const [textTitle, setTextTitle] = useState(
    `Find out if you qualify in less than 60 seconds`
  );
  const [isShowImage, setIsShowImage] = useState(false);
  const paramOuters = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  });
  //Redirect all page not begin
  useEffect(() => {
    beginPage(history, "/demo");
  }, [history]);

  // Scroll to archor
  useEffect(() => {
    setTimeout(() => {
      const { hash } = location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }
      }
    }, 300);
  }, [location]);

  useEffect(() => {
    let stepPos = location.pathname.indexOf("step");
    setIsProgress(true);
    setIsShowImage(false)
    if (stepPos === -1) {
      setProgress(23);
    }
    if (stepPos > -1) {
      let strStep = location.pathname
        .slice(stepPos + 5)
        .toUpperCase()
        .replaceAll("-", "_");
      setProgress(progressPer[strStep]);
      if (strStep === "DETAIL") {
        setTextTitle(
          `To get your free and no obligation comparison report.`
        );
        setIsProgress(true);
      } else if (strStep === "NINE") {
        setTextTitle(
          "To get your free and no obligation comparison report."
        );
      } else if (strStep === "LOADING") {
        setTextTitle("");
        setIsProgress(false);
      } else if (strStep === "VERIFY" || strStep === "UPDATE") {
        setTextTitle("");
        setIsShowImage(true)
        setIsProgress(false);
      } else {
        setTextTitle(`Find out if you qualify in less than 60 seconds`);
        setIsProgress(true);
      }
    }
  }, [location]);

  useEffect(() => {
    const pro = progress * 3.6 + "deg";
    document.getElementById("left-side").style.transform = `rotate(${pro})`;
    if (progress <= 50) {
      document.getElementById("right-side").style.display = "none";
      document.getElementById(
        "pie"
      ).style.clip = `rect(0, 1.2em, 1.2em, 0.6em)`;
    } else {
      document.getElementById(
        "pie"
      ).style.clip = `rect(auto, auto, auto, auto)`;
      document.getElementById("right-side").style.transform = "rotate(180deg)";
      document.getElementById("right-side").style.display = "block";
    }
  }, [progress, location]);
  const headline = paramOuters?.headline || "";
  return (
    <section className="form mb-md-4" id="archor">
      <div className="header-bar">
      {isShowImage? (
          <img src={ checkLock } alt="" width={30}/>
        ): (
          <> {textTitle} </>
        )}
      </div>
      <div className="wrap-form">
        <div className={`box-left  ${!isProgress ? "d-none" : ""}`}>
          <h2>Your Progress</h2>
          <div className="set-size charts-container">
            <div className="pie-wrapper progress-45 style-2">
              <span className="label">
                {progress}
                <span className="smaller">%</span>
              </span>
              <div className="pie" id="pie">
                <div className="left-side half-circle" id="left-side"></div>
                <div className="right-side half-circle" id="right-side"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
        <div className={`progressBar-mb  ${!isProgress ? "d-none" : ""}`}>
          <h2>
            Your Progress{" "}
            <span className="progress-label">
              {progress}
              <small>%</small>
            </span>
          </h2>
          <ProgressBar animated now={progress} />
        </div>

        <div className={`box-right ${!isProgress ? "w-100" : ""}`}>
          <Switch>
            <Route path="/demo/step-begin" component={StepBegin} />
            <Route path="/demo/step-one" component={StepOne} />
            <Route path="/demo/step-two" component={SecondStep} />
            <Route path="/demo/step-three" component={StepThree} />
            <Route path="/demo/step-four" component={StepFour} />
            <Route path="/demo/step-five" component={StepFive} />
            <Route path="/demo/step-six" component={StepSix} />
            <Route path="/demo/step-seven" component={StepSeven} />
            <Route path="/demo/step-eight" component={StepEight} />
            <Route path="/demo/step-nine" component={StepNine} />
            <Route path="/demo/step-detail" component={Detail} />
            <Route
              path="/demo/step-loading"
              component={StepLoading}
            />
            <Route
              path="/demo/step-update"
              component={UpdatePhone}
            />
            <Route
              path="/demo/step-verify"
              component={StepVerify}
            />
            { headline === 'v7'? (
              <Route path="/demo" component={StepBegin} />
            ): (
              <Route path="/demo" component={StepOne} />
            )}
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default Main;
