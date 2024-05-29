/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from '../../../Components/Button';
import Feedback from '../../../Components/Feedback';
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputSelect from "../Components/InputSelect";
import imgIconBank from "../assets/images/bank.svg";
import useOnClickOutside from "../../../hooks/useClickOutSide";

const listHomeLoan = [
  "Adelaide Bank",
  "AMP",
  "ANZ",
  "Auswide Bank",
  "Bank of Melbourne",
  "Bank of Queensland",
  "Bank of Sydney",
  "Bankwest",
  "Better Choice Home Loans",
  "Bluestone",
  "CBA",
  "Citibank",
  "Firefighters Mutual Bank",
  "FirstMac",
  "Great Southern Bank",
  "Health Professionals Bank",
  "Heritage",
  "ING",
  "La Trobe Financial",
  "Liberty",
  "Macquarie",
  "ME Bank",
  "MyLoan",
  "MyState",
  "NAB",
  "Pepper",
  "Qudos Bank",
  "Resimac",
  "Suncorp",
  "Teachers Mutual Bank",
  "UBank",
  "UniBank",
  "Virgin Money",
  "Westpac",
  "Other"
];

const RefinanceBank = () => {
  const refinanceBankRef = useRef(null);
  const wrapperInfoRef = useRef();
  const innerWidth = window.innerWidth;
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [refinanceBank, setRefinanceBank] = useState(
    localStorage.getItem("refinanceBank") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [refinanceBankValid, setRefinanceBankValid] = useState(valid.NON_VALID);
  const IPClient = localStorage.getItem("user_id");

  useEffect(() => {
    if (innerWidth < 900) {
        window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line
  }, []);
  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkRefinanceBankStatus = (value) => {
    const test = listHomeLoan.includes(value);
    setRefinanceBankValid(Number(test));
    setIsShowModal(false);
    return test;
  };

  const nextStep = (value) => {
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "second_step",
        funnel_step_id: "step_002",
        funnel_step_question: "Who is your current home loan with?",
        funnel_step_answer: value
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
    window.localStorage.setItem("refinanceBank", value);
    history.push({
      pathname: `/demo/step-three`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };

  const onClickSelect = (value) => {
    setRefinanceBank(value);
    setRefinanceBankValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("refinanceBank", value);
    setTimeout(() => {
      nextStep(value);
    }, 500);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkRefinanceBankStatus(refinanceBank);
    if (checkRefinanceBankStatus(refinanceBank)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(refinanceBank);
        }, 500);
      }
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
                Who is your current home loan with?
              </h2>
          </Col>
      </Row>
      <div className="max-550">
        <Row className={`mx-0 ${isShowModal ? "mb-10" : "mb-2"}`}>
          <Col
            xs={12}
            className="wForm-input px-0 bankProviders"
            ref={wrapperInfoRef}
          >
            <InputSelect
                onFocus={() => {
                setIsShowModal(true);
                setRefinanceBankValid(valid.NON_VALID);
              }}
              onKeyPress={onKeyDown}
              onChange={() => () => {}}
                placeholder="Select from the dropdown your current lender"
                value={refinanceBank}
                id="current_lender"
                innerRef={refinanceBankRef}
                iconArrow
                iconBank
                readOnly
                prefix={<img src={imgIconBank} alt="Bank" style={{width: '25px'}} />}
              />
            <ul
              className={`list-occupation ${
                isShowModal ? "d-block" : "d-none"
              }`}
            >
              {listHomeLoan &&
                listHomeLoan.map((name, index) => (
                  <li
                    key={index + 1}
                    onClick={() => onClickSelect(name)}
                    className={refinanceBank === name ? "active" : ""}
                  >
                    {name}
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
        <Row>
            <Col>
                <Feedback show={refinanceBankValid === valid.INVALID} className="text-center">
                <p>This field is required</p>
                </Feedback>
            </Col>
        </Row>
        <Row className="justify-content-center mt-0">
            <Col className='text-center'>
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

export default RefinanceBank;
