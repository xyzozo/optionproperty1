/** @format */

import React, { useEffect, useState } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import imgReset from "../assets/images/reset.svg";
import imgCheck from "../assets/images/iconCheck.svg";

const StepSeven = () => {
  const history = useHistory();
  const innerWidth = window.innerWidth;
  const [progress1, setProgress1] = useState(0);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  useEffect(() => {
    if (innerWidth < 900) {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setProgress1(100);
    }, 1500);
    setTimeout(() => {
      setIsShow1(true);
    }, 2000);
    setTimeout(() => {
      setProgress2(100);
    }, 2500);
    setTimeout(() => {
      setIsShow2(true);
    }, 3500);

    setTimeout(() => {
      setProgress3(100);
    }, 4500);
    setTimeout(() => {
      setIsShow3(true);
    }, 5000);
  }, []);

  const nextStep = () => {
    history.push({
      pathname: `/demo/step-nine`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };

  useEffect(() => {
    if (isShow3) {
      setTimeout(() => {
        nextStep();
      }, 500);
    }
    // eslint-disable-next-line
  }, [progress1, progress2, progress3, isShow3]);

  return (
    <div className="max-550">
      <Row>
        <Col xs={12}>
          <h2 className="form-title text-center">Generating Results</h2>
        </Col>
        <Col xs={12}>
          <Row className="info-customer mt-2 mb-4">
            <Col xs={12} className="wForm-input">
              <div className="progressBar-group">
                <div className="label">Collecting answers</div>
                <ProgressBar min={0} max={100} now={progress1} />
                {isShow1 ? (
                  <img src={imgCheck} alt="" />
                ) : (
                  <img src={imgReset} alt="" className="reset" />
                )}
              </div>
            </Col>
            <Col xs={12} className="wForm-input">
              <div className="progressBar-group">
                <div className="label">Searching 35+ lenders and banks</div>
                <ProgressBar min={0} max={100} now={progress2} />
                {isShow2 ? (
                  <img src={imgCheck} alt="" />
                ) : (
                  <img src={imgReset} alt="" className="reset" />
                )}
              </div>
            </Col>
            <Col xs={12} className="wForm-input">
              <div className="progressBar-group">
                <div className="label">Specific lenders found</div>
                <ProgressBar min={0} max={100} now={progress3} />
                {isShow3 ? (
                  <img src={imgCheck} alt="" />
                ) : (
                  <img src={imgReset} alt="" className="reset" />
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Button type="next" className="processing" onClick={() => {}}>
            Processing...
          </Button>
          <p className="small-text">This won’t affect your credit score</p>
        </Col>
      </Row>
    </div>
  );
};

export default StepSeven;
