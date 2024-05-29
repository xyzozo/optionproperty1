import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import Feedback from "../../../Components/Feedback";
import dollar from "../assets/images/dollar.png";
import InputNumber from "../Components/InputNumber";
import { valid } from "../../../utils/constant";
import { parseZipCodeToObject } from "../../../utils/zipCodes";

const StepSix = () => {
  const [price, setPrice] = useState(
    localStorage.getItem("currentIncome") || ""
  );
  const [priceValid, setPriceValid] = useState(valid.NON_VALID);
  const priceRef = useRef(null);
  const history = useHistory();
  const innerWidth = window.innerWidth;
  const IPClient = localStorage.getItem("user_id");
  const {city, state, postcode } = parseZipCodeToObject(
    localStorage.getItem("postcodeOptions") || ""
  );
  useEffect(() => {
    setTimeout(() => {
      priceRef?.current?.element?.focus();
    }, 400);
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

  const checkPriceStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 400000;
    setPriceValid(Number(test));
    return test;
  };

  const nextStep = () => {
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "seven_step",
        funnel_step_id: "step_007",
        funnel_step_question: "What is your combined household income annually?",
        funnel_step_answer: price ? parseInt(price.replace(/,/g, ""), 10) : ""
      },
      user_data: {
        user_id: IPClient,
        phone_number: "",
        email_address: "",
        address: {
          postal_code: postcode,
          first_name: '',
          last_name: '',
          street: state,
          country: city,
          city: city
      }
      }
    });
    window.localStorage.setItem(
      "currentIncome",
      price && parseInt(price.replace(/,/g, ""), 10)
    );
    history.push({
      pathname: `/demo/step-eight`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };

  const onKeyUpHandle = (value) => {
    setPrice(value);
  };

  const onClickNext = () => {
    checkPriceStatus(price);
    if (checkPriceStatus(price)) {
      setTimeout(function () {
        nextStep();
      }, 500);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  return (
    <>
      <Row className="mb-3">
        <Col>
          <h2 className="form-title text-center">
          What is your combined household income annually?
          </h2>
        </Col>
      </Row>
      <div className="max-500">
        <Row>
          <Col xs={12} className="wForm-input">
            <InputNumber
              inputMode="numeric"
              options={{
                numericOnly: true,
                numeral: true,
                numeralDecimalMark: "",
                delimiter: ",",
                numeralThousandsGroupStyle: "thousand",
              }}
              onFocus={() => setPriceValid(valid.NON_VALID)}
              onKeyPress={onKeyDown}
              onChange={(e) => onKeyUpHandle(e.target.value)}
              placeholder="Your current income"
              value={price}
              id="price-input"
              maxLength="12"
              innerRef={priceRef}
              prefix={
                <img src={dollar} alt="Price" style={{ width: "25px" }} />
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Feedback
              show={priceValid === valid.INVALID}
              className="text-center"
            >
              Value should be in between 0 ~ $400,000
            </Feedback>
          </Col>
        </Row>
        <Row className="justify-content-center mt-0">
          <Col className="text-center">
            <Button type="next" onClick={onClickNext}>
              Next
            </Button>
            <p className="small-text">This won’t affect your credit score</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StepSix;
