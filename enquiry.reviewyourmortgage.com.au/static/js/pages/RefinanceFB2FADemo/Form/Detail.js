/** @format */

import React, { useState, useMemo, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import { checkingStatus } from "../../../Components/Input";
import Input from "../../../Components/Input2";
import Feedback from "../../../Components/Feedback";
import { valid } from "../../../utils/constant";
import imgEmail from "../assets/images/email.png";
import { checkEmail } from "../../../utils/validateForm";
import { onKeyDownPhone } from "../../../utils/phone";
import imgPhone from "../assets/images/phone.png";
import logoPrivacy from "../assets/images/logo-privacy.svg";
import { apiSendNumberCode } from "../../../utils/api";
import { parseZipCodeToObject } from "../../../utils/zipCodes";

const Detail = () => {
  const innerWidth = window.innerWidth;
  const history = useHistory();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [phoneValid, setPhoneValid] = useState(valid.NON_VALID);
  const [phoneChecking, setPhoneChecking] = useState(checkingStatus.NONE);
  const IPClient = localStorage.getItem("user_id");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const {city, state, postcode } = parseZipCodeToObject(
    localStorage.getItem("postcodeOptions") || ""
  );
  
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

  const checkEmailValid = (value) => {
    const test = checkEmail(value);
    setEmailValid(Number(test));
    return test;
  };
  const checkPhoneValid = async (value) => {
    setPhoneChecking(checkingStatus.PENDDING);
    setPhone(value);
    localStorage.setItem("phone", value);
    if (/(04)+([0-9]{8})\b/g.test(value)) {
      localStorage.setItem("phone", value);
      setPhoneValid(valid.VALID);
      setPhoneChecking(checkingStatus.DONE);
      return valid.VALID;
    }
    let test = true || /(01|02|03|05|06|07|08|09)+([0-9]{8})\b/g.test(value);
    if (test && value) {
      localStorage.setItem("phone", value);
      setPhoneValid(valid.VALID);
      setPhoneValid(Number(!test));
      setPhoneChecking(checkingStatus.DONE);
      return !test;
    } else {
      setPhoneChecking(checkingStatus.NONE);
      setPhoneValid(Number(!test));
      return test;
    }
  };
  const success = (data) => {
    window.localStorage.setItem("idToken", data?.id || "");
  };
  const nextStep = () => {
    apiSendNumberCode(phone, success, success);
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "nine_step",
        funnel_step_id: "step_009",
        funnel_step_question: "Good News! You match with multiple lenders. To be contacted, please confirm your details.",
        funnel_step_answer: `Email: ${email}, Phone: ${phone}`
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
          city: city
      }
      }
    });
    history.push({
      pathname: `/demo/step-loading`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };
  const onClickNext = async () => {
    checkPhoneValid(phone)
    if (checkEmailValid(email) && (phone && phoneValid === valid.VALID)) {
      nextStep();
    }
  };

  useMemo(() => localStorage.setItem("email", email), [email]);
  useMemo(() => localStorage.setItem("phone", phone), [phone]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };
  return (
    <>
      <Row className="mb-3">
        <Col className="px-0">
          <h2 className="form-title text-center font-custom">
            Good News! <br className="d-md-none"/>You match with multiple lenders.
            <br />
            To be contacted, <br className="d-md-none"/>please confirm your details.
          </h2>
        </Col>
      </Row>
      <div className="max-500 from-detail">
        <Row>
          <Col xs={12} className="pr-2 mb-3">
            <Input
              inputMode="email"
              prefix={<img src={imgEmail} alt="email" />}
              value={email}
              onFocus={() => setEmailValid(valid.NON_VALID)}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => checkEmailValid(e.target.value)}
              invalid={emailValid === valid.INVALID}
              onKeyPress={onKeyDown}
              id="email"
            >
              Your email
            </Input>
            {emailValid === valid.INVALID ? (
              <Feedback
                show={emailValid === valid.INVALID}
                className="text-left pb-0"
              >
                Email is invalid
              </Feedback>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} className="pr-2 mb-3">
            <Input
              inputMode="numeric"
              prefix={<img src={imgPhone} alt="phone" />}
              value={phone}
              onFocus={() => setPhoneValid(valid.NON_VALID)}
              onBlur={(e) => checkPhoneValid(e.target.value)}
              checking={phoneChecking}
              onChange={(e) => setPhone(e.target.value)}
              invalid={phoneValid === valid.INVALID}
              onKeyDown={(e) => {
                onKeyDownPhone(e);
                onKeyDown(e);
              }}
              id="phone"
            >
              Your phone
            </Input>
            {phoneValid === valid.INVALID ? (
              <Feedback
                show={phoneValid === valid.INVALID}
                className="text-left pb-0"
              >
                Phone is invalid
              </Feedback>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 md-mt-3">
          <Col className="text-center position-relative">
            <Button className="submit" type="next" onClick={onClickNext}>
              Submit
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
