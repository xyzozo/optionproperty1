import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import Feedback from "../../../Components/Feedback";
import dollar from "../assets/images/dollar.png";
import InputNumber from "../Components/InputNumber";
import { valid } from "../../../utils/constant";

const Step1 = () => {
  const [price, setPrice] = useState(localStorage.getItem("loanAmount") || "");
  const [priceValid, setPriceValid] = useState(valid.NON_VALID);
  const priceRef = useRef(null);
  const [validMessage, setValidMessage] = useState("This field is required");
  const history = useHistory();
  const innerWidth = window.innerWidth;
  const [IPClient] = useState(localStorage.getItem("user_id") || 1);

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

  const checkPriceStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (originAmount < 1) {
      setValidMessage("This field is required");
      setPriceValid(valid.INVALID);
      return false;
    }
    if (originAmount < 150000) {
      setValidMessage("Minimum serviceability needs to be $150,000 or above");
      setPriceValid(valid.INVALID);
      return false;
    }
    if (originAmount > 10000000) {
      setValidMessage("Value should be less that $10,000,000");
      setPriceValid(valid.INVALID);
      return false;
    }
    // if (originAmount > (parseInt(propertyValue, 10) * 95) / 100) {
    //   setValidMessage("Enter less than 95% of the property value.");
    //   setPriceValid(valid.INVALID);
    //   return false;
    // }
    setPriceValid(valid.VALID);
    return true;
  };

  const nextStep = () => {
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa", // name of the funnel
        funnel_id: "2", //Funnel ID to differentiate the funnels
        funnel_step_name: "first_step", //first_step if user is on step-one route
        funnel_step_id: "step_001", //step_001 if user is on step-one route
        funnel_step_question: "How much do you still have owing on your mortgage?", //The Question Asked to the User
        funnel_step_answer: price ? parseInt(price.replace(/,/g, ""), 10) : '' //The Answer Provided by the User
      },
      user_data: {
        user_id: IPClient,
        phone_number: "",
        email_address: "",
        address: {
            postal_code: '',
            first_name: '',
            last_name: '',
            street: '',
            country: '',
            city: ''
        }
      }
    });
    window.localStorage.setItem(
      "loanAmount",
      price && parseInt(price.replace(/,/g, ""), 10)
    );
    history.push({
      pathname: `/demo/step-two`,
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
            How much do you still have owing on your mortgage?
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
              placeholder="Mortgage amount E.G. $350,000"
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
              {validMessage}
            </Feedback>
          </Col>
        </Row>
        <Row className="justify-content-center mt-0 mt-md-3">
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

export default Step1;
