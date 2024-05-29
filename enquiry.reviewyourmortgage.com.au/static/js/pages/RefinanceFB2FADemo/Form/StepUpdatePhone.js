/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import Feedback from "../../../Components/Feedback";
import { valid } from "../../../utils/constant";
import imgPhone from "../assets/images/phone.png";
import InputNumber from "../Components/InputNumber";
import { apiSendNumberCode } from "../../../utils/api";

const Detail = () => {
  const phoneRef = useRef();
  const history = useHistory();
  const phone = localStorage.getItem("phone");
  const [phoneValid, setPhoneValid] = useState(valid.NON_VALID);
  const [mobilePhone, setMobilePhone] = useState(phone);
  const elementScroll = document.getElementById("header-scroll");

  useEffect(() => {
    if (elementScroll) {
      elementScroll.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      phoneRef?.current?.element?.focus();
    }, 400);
    // eslint-disable-next-line
  }, []);

  const checkPhoneValid = async (value) => {
    setMobilePhone(value);
    localStorage.setItem("phone", value);
    if (/(04)+([0-9]{8})\b/g.test(value)) {
      setPhoneValid(valid.VALID);
      return valid.VALID;
    }
    let test = true || /(01|02|03|05|06|07|08|09)+([0-9]{8})\b/g.test(value);
    if (test && value) {
      setPhoneValid(valid.VALID);
      setPhoneValid(Number(!test));
      return !test;
    } else {
      setPhoneValid(Number(!test));
      return test;
    }
  };

  const onKeyUpHandle = (value) => {
    setMobilePhone(value);
  };

  const onClickResend = () => {
    apiSendNumberCode(mobilePhone.replace(/ /gi, ""), null, null);
  };
  
  const nextStep = () => {
    onClickResend();
    history.push({
      pathname: `/demo/step-verify`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };
  const onClickNext = async () => {
    if (checkPhoneValid(mobilePhone.replace(/ /gi, ""))) {
      nextStep();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext()
    }
  };

  return (
    <>
      <Row className="mb-3">
        <Col>
          <h2 className="form-title text-center">
            Please enter your new mobile phone
          </h2>
        </Col>
      </Row>
      <div className="max-500 from-detail">
      <Row>
          <Col xs={12} className="wForm-input">
            <InputNumber
              inputMode="numeric"
              options={{
                blocks: [4, 3, 3]
              }}
              onFocus={() => setPhoneValid(valid.NON_VALID)}
              onKeyPress={onKeyDown}
              onChange={(e) => onKeyUpHandle(e.target.value)}
              placeholder="Your phone"
              value={mobilePhone}
              id="mobilePhone"
              maxLength="12"
              innerRef={phoneRef}
              prefix={<img src={imgPhone} alt="phone" />}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Feedback
              show={phoneValid === valid.INVALID}
              className="text-center"
            >
              Phone is invalid
            </Feedback>
          </Col>
        </Row>
        <Col xs={12} className="text-center position-relative">
          <Button className="submit" type="next" onClick={onClickNext}>
            SAVE
          </Button>
          <p className="small-text">This won’t affect your credit score</p>
        </Col>
      </div>
    </>
  );
};

export default Detail;
