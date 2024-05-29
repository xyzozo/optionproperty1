/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import { handelOneTimeCode } from "../../../utils/validateForm";
import Feedback from "../../../Components/Feedback";
import { valid } from "../../../utils/constant";
import logoPrivacy from "../assets/images/logo-privacy.svg";
import { apiSendNumberCode, apiCheckNumberCode } from "../../../utils/api";
import { parseZipCodeToObject } from "../../../utils/zipCodes";

const Detail = () => {
  const innerWidth = window.innerWidth;
  const number1Ref = useRef();
  const number2Ref = useRef();
  const number3Ref = useRef();
  const number4Ref = useRef();
  const history = useHistory();
  const phone = localStorage.getItem("phone");
  const [messCode, setMessCode] = useState("This field is required");
  const [messCodeValid, setMessCodeValid] = useState(valid.NON_VALID);
  const IPClient = localStorage.getItem("user_id");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const { city, state, postcode } = parseZipCodeToObject(
    localStorage.getItem("postcodeOptions") || ""
  );
  useEffect(() => {
    handelOneTimeCode();
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
    setTimeout(() => {
      number1Ref?.current?.focus();
    }, 400);
    // eslint-disable-next-line
  }, []);

  const checkCodeStatus = (value) => {
    let test = value.length >= 4;
    setMessCodeValid(Number(test));
    if (!test) {
      setMessCode("This field is required");
    } else {
      setMessCode("");
    }
    return test;
  };
  const nextStep = () => {
    const number1 = number1Ref.current?.value.slice(0,1);
    const number2 = number2Ref.current?.value.slice(0,1);
    const number3 = number3Ref.current?.value.slice(0,1);
    const number4 = number4Ref.current?.value.slice(0,1);
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "ten_step",
        funnel_step_id: "step_010",
        funnel_step_question:
          "Verify your phone number and get priority status",
        funnel_step_answer: number1 + number2 + number3 + number4,
      },
      user_data: {
        user_id: IPClient,
        phone_number: phone,
        email_address: email,
        address: {
          postal_code: postcode,
          first_name: firstName,
          last_name: lastName,
          street: state,
          country: city,
          city: city,
        },
      },
    });
    history.push({
      pathname: `/demo/step-success`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };

  const onKeyUpHandle = () => {
    setMessCodeValid(valid.NON_VALID);
  };

  const success = (data) => {
    if (data?.status !== 200) {
      setMessCode(data?.error_text || "");
      setMessCodeValid(valid.INVALID);
    } else {
      setMessCode("");
      setMessCodeValid(valid.NON_VALID);
    }
  };
  const onClickUpdatePhone = () => {
    history.push({
      pathname: `/demo/step-update`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };
  const successCheck = (data) => {
    if (data?.status === 200) {
      nextStep();
    } else {
      setMessCode(data?.error_text || "");
      setMessCodeValid(valid.INVALID);
    }
  };

  const onClickResend = () => {
    apiSendNumberCode(phone, success, success);
  };

  const onClickNext = () => {
    const number1 = number1Ref.current?.value.slice(0,1);
    const number2 = number2Ref.current?.value.slice(0,1);
    const number3 = number3Ref.current?.value.slice(0,1);
    const number4 = number4Ref.current?.value.slice(0,1);
    if (checkCodeStatus(`${number1 + number2 + number3 + number4}`)) {
      apiCheckNumberCode(
        phone,
        `${number1 + number2 + number3 + number4}`,
        successCheck,
        successCheck
      );
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
          Security and data protection is important to us
            <br/> Verify your phone number
          </h2>
          <h4 className="form-title text-center">
            Please enter the 4 digit code sent to your phone
          </h4>
        </Col>
      </Row>
      <div className="max-500 from-detail">
        <form className="otc" name="one-time-code" action="#">
          <input
            type="number"
            pattern="[0-9]*"
            defaultValue
            onFocus={onKeyUpHandle}
            autoComplete="one-time-code"
            id="otc-1"
            inputMode="numeric"
            required
            ref={number1Ref}
            className={`numberCode ${
              messCodeValid === valid.INVALID && !number1Ref.current?.value ? "valid" : ""
            }`}
            onKeyPress={onKeyDown}
          />
          <input
            type="number"
            pattern="[0-9]*"
            defaultValue
            onFocus={onKeyUpHandle}
            autoComplete="one-time-code"
            id="otc-2"
            inputMode="numeric"
            required
            maxLength="1"
            className={`numberCode ${
              messCodeValid === valid.INVALID && !!number2Ref.current?.value ? "valid" : ""
            }`}
            ref={number2Ref}
            onKeyPress={onKeyDown}
          />
         
          <input
            type="number"
            pattern="[0-9]*"
            defaultValue
            autoComplete="one-time-code"
            id="otc-3"
            inputMode="numeric"
            required
            maxLength="1"
            onFocus={onKeyUpHandle}
            ref={number3Ref}
            className={`numberCode ${
              messCodeValid === valid.INVALID && !!number3Ref.current?.value ? "valid" : ""
            }`}
            onKeyPress={onKeyDown}
          />
           <input
            type="number"
            pattern="[0-9]*"
            defaultValue
            inputMode="numeric"
            autoComplete="one-time-code"
            id="otc-4"
            required
            onFocus={onKeyUpHandle}
            maxLength="1"
            ref={number4Ref}
            className={`numberCode ${
              messCodeValid === valid.INVALID && !number4Ref.current?.value ? "valid" : ""
            }`}
            onKeyPress={onKeyDown}
          />
        </form>
        <Row>
          <Col>
            <Feedback
              show={messCodeValid === valid.INVALID}
              className="text-center mt-2 p-0"
            >
              {messCode}
            </Feedback>
          </Col>
        </Row>
      </div>
      <div className="max-650 from-detail">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="send-code">
              Haven’t received it.{" "}
              <span role="button" onClick={onClickResend}>
                Resend a new code.
              </span>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <div className="update-phone" onClick={onClickUpdatePhone}>
              Update mobile phone
            </div>
          </Col>
          <Col xs={12} className="text-center position-relative verify-btn">
            <Button className="submit" type="next" onClick={onClickNext}>
              VERIFY
            </Button>
            <img className="logoPrivacy" src={logoPrivacy} alt="Logo Privacy" />
          </Col>
          <p className="small-text">This won’t affect your credit score</p>
        </Row>
      </div>
    </>
  );
};

export default Detail;
