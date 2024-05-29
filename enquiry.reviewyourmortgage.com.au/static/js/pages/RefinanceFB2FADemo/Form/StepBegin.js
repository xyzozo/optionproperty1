import React, { useState, useMemo, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import { parseZipCodeToObject } from "../../../utils/zipCodes";

export const types = {
  1: "YES",
  2: "NO",
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
  const [saveThousands, setSaveThousands] = useState(
    localStorage.getItem("saveThousands") || ""
  );
  const [stateValid, setStateValid] = useState(valid.NON_VALID);
  const IPClient = localStorage.getItem("user_id");
  const innerWidth = window.innerWidth;
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

  const checkStatusValid = (value) => {
    const test = Object.values(types).includes(value);
    setStateValid(Number(test));
    return test;
  };

  const nextStep = () => {
    history.push({
      pathname: `/demo/step-one`,
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
        funnel_step_name: "begin_step",
        funnel_step_id: "step_000",
        funnel_step_question: "Do you want to save thousands on your home loan?",
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
    setSaveThousands(value);
    if (checkStatusValid(value)) {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  useMemo(() => {
    localStorage.setItem("saveThousands", saveThousands);
  }, [saveThousands]);

  return (
    <>
      <Row className="mb-3">
        <Col>
          <h2 className="form-title text-center mb-2">
            Do you want to decrease your home loan repayments?
          </h2>
        </Col>
      </Row>
      <div className="max-400">
        <Row className="m-0">
          <Items
            invalid={stateValid === valid.INVALID}
            currentValue={saveThousands}
            onChange={onChangeValue}
          />
          <p className="small-text">This won’t affect your credit score</p>
        </Row>
      </div>
    </>
  );
};

export default StepFour;
