/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import Button from "../../../Components/Button";
import { getZipCodeWithAddress } from "../../../utils/googleApi";
import InputGoogleAddress from "../../../Components/InputGoogleAddress2";
import imgLoacltion from "../assets/images/address.png";

const YourPostCode = () => {
  const fullAddressRef = useRef(null);
  const IPClient = localStorage.getItem("user_id");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [zipCodeState, setZipCodeState] = useState({
    street: localStorage.getItem("street") || "",
    city: localStorage.getItem("city") || "",
    state: localStorage.getItem("state") || "",
    postcode: localStorage.getItem("postcode") || "",
  });
  const [fullAddress, setFullAddress] = useState(
    localStorage.getItem("fullAddress") || ""
  );
  const [fullAddressValid, setFullAddressValid] = useState(valid.NON_VALID);
  const [validMessage, setValidMessage] = useState("This field is required");
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
  useEffect(() => {
    setTimeout(() => {
      fullAddressRef?.current?.focus();
      setFullAddress(localStorage.getItem("fullAddress"));
    }, 400);
  }, []);
  const checkStatusValid = (zipCode) => {
    if (!zipCode) {
      setValidMessage("This field is required");
      setFullAddressValid(valid.INVALID);
      setFullAddress("");
      localStorage.setItem("fullAddress", "");
      localStorage.setItem("street", "");
      localStorage.setItem("city", "");
      localStorage.setItem("state", "");
      localStorage.setItem("postcode", "");
      return valid.INVALID;
    }

    if (zipCode.street === undefined) {
      setValidMessage("Please select your full street address");
      setFullAddressValid(valid.INVALID);
      localStorage.setItem("fullAddress", "");
      localStorage.setItem("street", "");
      localStorage.setItem("city", "");
      localStorage.setItem("state", "");
      localStorage.setItem("postcode", "");
      setFullAddress("");
      return valid.INVALID;
    }
    if (zipCode.street && zipCode.city && zipCode.state && zipCode.postcode) {
      setFullAddressValid(valid.VALID);
      return valid.VALID;
    }
    setFullAddressValid(valid.INVALID);
    return valid.INVALID;
  };
  const nextStep = () => {
    localStorage.setItem("fullAddress", fullAddress);
    localStorage.setItem("street", zipCodeState?.street);
    localStorage.setItem("city", zipCodeState?.city);
    localStorage.setItem("state", zipCodeState?.state);
    localStorage.setItem("postcode", zipCodeState?.postcode);
    window.dataLayer.push({
      event: "funnel_step",
      funnel_details: {
        funnel_name: "RefinanceFb2fa",
        funnel_id: "2",
        funnel_step_name: "four_step",
        funnel_step_id: "step_004",
        funnel_step_question: "What is the address of the property you are looking to refinance?",
        funnel_step_answer: ''
      },
      user_data: {
        user_id: IPClient,
        phone_number: "",
        email_address: "",
        address: {
          first_name: '',
          last_name: '',
          postal_code: zipCodeState?.postcode,
          street: zipCodeState?.street,
          country: zipCodeState?.state,
          city: zipCodeState?.city
        }
      }
    });
    history.push({
      pathname: `/refinance-fb-2fa/step-five`,
      hash: history.location.hash,
      search: history.location.search,
    });
  };
  const onUpdateState = (zipCode) => {
    setZipCodeState(zipCode);
    checkStatusValid(zipCode);
  };

  const handleOnFocus = () => {
    setFullAddress("");
    if (fullAddressRef?.current?.value) {
      setValidMessage("Please select your full street address");
      setFullAddressValid(valid.INVALID);
    }
    setFullAddressValid(valid.NON_VALID);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (fullAddress && fullAddressRef?.current?.value) {
      getZipCodeWithAddress(fullAddressRef?.current?.value, onUpdateState);
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    } else {
      if (!fullAddress && fullAddressRef?.current?.value) {
        setValidMessage("Please select your full street address");
      } else {
        setValidMessage("This field is required");
      }
      setFullAddressValid(valid.INVALID);
      return;
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
                     What is the address of the property your home loan is related to?
                    </h2>
                </Col>
            </Row>
            <div className="max-550">
              <Row className="mx-0">
                <Col xs={12} className="wForm-input p-0">
                  <InputGoogleAddress
                    country="au"
                    placeholder="Enter Property Address Here"
                    defaultValue={fullAddress || ""}
                    updateState={onUpdateState}
                    updateAddress={setFullAddress}
                    invalid={fullAddressValid === valid.INVALID}
                    onKeyDown={onKeyDown}
                    onFocus={() => handleOnFocus()}
                    innerRef={fullAddressRef}
                    iconLocation={imgLoacltion}
                  />
              </Col>
              </Row>
              {fullAddressValid === valid.INVALID && (
                <div className="text-error mt-3">
                  <p> {validMessage}</p>
                </div>
              )}
              <Row className="justify-content-center mt-4 pt-3">
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

export default YourPostCode;
