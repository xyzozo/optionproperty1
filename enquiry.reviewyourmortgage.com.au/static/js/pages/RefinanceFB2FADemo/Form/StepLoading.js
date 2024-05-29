/** @format */

import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoadingIcon from "../../../Components/Loading";

const StepLoading = () => {
  const history = useHistory();
  const innerWidth = window.innerWidth;
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
  const nextStep = () => {
    history.push({
      pathname: `/demo/step-verify`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 2500);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-550">
      <Row>
        <Col xs={12}>
          <Row className="info-customer mt-2 mb-4">
            <Col xs={12} className="wForm-input text-center py-5 mt-md-5">
              <LoadingIcon />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default StepLoading;
