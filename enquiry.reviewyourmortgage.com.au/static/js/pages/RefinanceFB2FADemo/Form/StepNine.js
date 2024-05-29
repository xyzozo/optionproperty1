/** @format */

import React, { useState, useMemo, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input2";
import Feedback from "../../../Components/Feedback";
import { valid } from "../../../utils/constant";
import imgUser from "../assets/images/firstname.png";
import logoPrivacy from "../assets/images/logo-privacy.svg";
import { parseZipCodeToObject } from "../../../utils/zipCodes";

const Detail = () => {
  const innerWidth = window.innerWidth;
  const history = useHistory();
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const IPClient = localStorage.getItem("user_id");
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

  const checkFirstNameValid = (value) => {
    const test = value && value.length > 2;
    setFirstNameValid(Number(test));
    return test;
  };
  const checkLastNameValid = (value) => {
    const test = value && value.length > 2;
    setLastNameValid(Number(test));
    return test;
  };

  const nextStep = () => {
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "eight_step",
        funnel_step_id: "step_008",
        funnel_step_question: "Good News! You match with multiple lenders. To be contacted, please confirm your details.",
        funnel_step_answer: firstName + ' ' + lastName
      },
      user_data: {
        user_id: IPClient,
        phone_number: "",
        email_address: "",
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
      pathname: `/demo/step-detail`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };
  const onClickNext = async () => {
    if (checkFirstNameValid(firstName) && checkLastNameValid(lastName))
      nextStep();
  };

  useMemo(() => localStorage.setItem("firstName", firstName), [firstName]);
  useMemo(() => localStorage.setItem("lastName", lastName), [lastName]);

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
            Please confirm your details.
          </h2>
        </Col>
      </Row>
      <div className="max-650 from-detail">
        <Row>
          <Col xs={12} md={6} className="pr-2 mb-3">
            <Input
              prefix={<img src={imgUser} alt="first" />}
              value={
                firstName && firstName[0].toUpperCase() + firstName.slice(1)
              }
              onFocus={() => setFirstNameValid(valid.NON_VALID)}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={(e) => checkFirstNameValid(e.target.value)}
              invalid={firstNameValid === valid.INVALID}
              onKeyPress={onKeyDown}
              id="firstName"
            >
              First name
            </Input>
            {firstNameValid === valid.INVALID ? (
              <Feedback
                show={firstNameValid === valid.INVALID}
                className="text-left pb-0"
              >
                First name is invalid
              </Feedback>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} md={6} className="pr-2 mb-3">
            <Input
              prefix={<img src={imgUser} alt="last" />}
              value={lastName && lastName[0].toUpperCase() + lastName.slice(1)}
              onFocus={() => setLastNameValid(valid.NON_VALID)}
              onBlur={(e) => checkLastNameValid(e.target.value)}
              onChange={(e) => setLastName(e.target.value)}
              invalid={lastNameValid === valid.INVALID}
              onKeyPress={onKeyDown}
              id="lastName"
            >
              Last name
            </Input>
            {lastNameValid === valid.INVALID ? (
              <Feedback
                show={lastNameValid === valid.INVALID}
                className="text-left pb-0"
              >
                Last name is invalid
              </Feedback>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-md-5 pt-2 mt-md-5">
          <Col className="text-center position-relative">
            <Button className="submit" type="next" onClick={onClickNext}>
              Next
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
