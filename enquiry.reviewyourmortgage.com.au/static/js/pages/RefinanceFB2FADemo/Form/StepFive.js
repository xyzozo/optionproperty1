import React, { useState, useMemo, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { parseZipCodeToObject } from "../../../utils/zipCodes";

export const types = {
  0: "Lower My Interest Rate",
  1: "Decrease Repayment",
  2: "Pay Off Loan Faster",
  3: "Consolidate Debt/Get Cash Out",
  4: "Build On My Land Or Property",
};

const Items = ({ currentValue, onChange }) => {
  return Object.values(types).map((item, key) => {
    return (
      <Col xs={12} key={key} className="average-bill refinancing p-0">
        <button
          type="button"
          className={`btn-action ${currentValue === item ? "active" : ""}`}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      </Col>
    );
  });
};

const StepFour = () => {
  const history = useHistory();
  const [stateValue, setStateValue] = useState(
    localStorage.getItem("refinancing") || ""
  );
  const [stateValid, setStateValid] = useState(valid.NON_VALID);
  const {city, state, postcode } = parseZipCodeToObject(
    localStorage.getItem("postcodeOptions") || ""
  );
  const innerWidth = window.innerWidth;
  const IPClient = localStorage.getItem("user_id");
  
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

  const checkStatusValid = (value) => {
    const test = Object.values(types).includes(value);
    setStateValid(Number(test));
    return test;
  };

  const nextStep = () => {
    history.push({
      pathname: `/demo/step-six`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };

  const onChangeValue = (value) => {
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "five_step",
        funnel_step_id: "step_005",
        funnel_step_question: "Why are you refinancing?",
        funnel_step_answer: value
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
    setStateValue(value);
    if (checkStatusValid(value)) {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  useMemo(() => {
    localStorage.setItem("refinancing", stateValue);
  }, [stateValue]);

  return (
    <>
      <Row className="mb-3">
        <Col>
          <h2 className="form-title text-center mb-2">
            Why are you refinancing?
          </h2>
        </Col>
      </Row>
      <div className="max-500">
        <Row className="m-0">
          <Items
            invalid={stateValid === valid.INVALID}
            currentValue={stateValue}
            onChange={onChangeValue}
          />
          <p className="small-text">This won’t affect your credit score</p>
        </Row>
      </div>
    </>
  );
};

export default StepFour;
