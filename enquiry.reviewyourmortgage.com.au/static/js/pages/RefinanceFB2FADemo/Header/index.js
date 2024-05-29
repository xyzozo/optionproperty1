import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import qs from "qs";
import imgLogo from "../../../images/logo2.png";
import ModalPolicy from "../../Modal/ModalPolicy";
import ModalTerms from "../../Modal/ModalTerms";
import Form from "../Form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgReset from "../assets/images/reset.svg";
import Modal from "../../Modal/Modal";
import "./style.scss";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const paramOuters = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  });
  const [isShowModal, setIsShowModal] = useState(false);
  const headline = paramOuters?.headline || "";
  const [isShowTerms, setIsShowTerms] = useState(false);
  const [isShowModalPolicy, setIsShowModalPolicy] = useState(false);
  const renderHtmlText = () => {
    switch (headline) {
      case "v1":
        return (
          <>
            Stop overpaying on your home loan <br />
            Switch to a lower interest rate and you could get paid a cash back reward** <br /> when you refinance.
          </>
        );
      case "v2":
        return (
          <>
            Could you be eligible to save thousands off your home loan? <br />
            Rates from Variable 3.99% | 3.99%* Comparison and you could get up to $5,000 cash back**
          </>
        );
      case "v3":
        return (
          <div className="title-wrap">
            <div
              className="title text-center text-text-uppercase"
              style={{ fontSize: "150%" }}
            >
              Stop Overpaying On Your Home Loan
            </div>
            <h3 className="title-sub">
              This Low Rate Refinance Tool Is Helping Homeowners Combat Rate Rises
              <br />
              Lower Your Interest Rate & You Get Paid Up To $4,000**
            </h3>
        </div>
        );
      case "v4":
        return (
          <>
            Stop overpaying on your home loan <br />
            Switch to a lower interest rate and you could qualify for up to $5,000 cash back** <br /> when you refinance.
          </>
        );
      case "v5":
        return (
          <>
            Stop overpaying on your home loan <br />
            Switch to a lower interest rate and you could qualify for up to $5,000 cash back** <br /> when you refinance.
          </>
        );
      case "v6":
        return (
          <div className="title-wrap">
            <div className="title text-center" style={{ fontSize: "150%" }}>
              STOP OVERPAYING ON YOUR MORTGAGE TODAY!
            </div>
            <h3 className="title-sub">
              The RBA are putting rates up!
              <br />
              Compare, Save and get up to $5,000 Cash Back**
            </h3>
          </div>
        );
      case "v7":
        return (
          <div className="title-wrap">
            <div
              className="title text-center text-text-uppercase"
              style={{ fontSize: "150%" }}
            >
              Stop overpaying on your home loan
            </div>
            <h3 className="title-sub">
              Switch to a lower interest rate and you could qualify for up to $5,000 cash back** <br /> when you refinance.
            </h3>
          </div>
        );
        case "v8":
          return (
            <div className="title-wrap">
              <div
                className="title text-center text-text-uppercase"
                style={{ fontSize: "150%" }}
              >
                Worried About Rising Interest Rates?
              </div>
              <h3 className="title-sub">
                New Homeowner Program Is helping Aussie's decrease their home loan repayments
                <br />
                & You could Get Up to $5,000 Cash Back**
              </h3>
            </div>
          );
      default:
        return (
          <>
            Stop overpaying on your home loan <br />
            Switch to a lower interest rate and you could get paid a cash back reward** <br /> when you refinance.
          </>
        );
    }
  };
  const removeAllItem = () => {
    const except = ["firstname", "lastname", "email", "user_id"];
    const allItems = Object.keys(localStorage);
    for (const item of allItems) {
      if (except.includes(item)) continue;
      localStorage.removeItem(item);
    }
  };
  const handleReset = () => {
    removeAllItem();
    window.dataLayer.push({
      funnel_details: null,
    });
    if (headline) {
      window.location.assign(`/demo?headline=${headline}`);
    } else {
      history.push({
        pathname: `/demo/`,
      });
    }
    setIsShowModal(false);
  };

  return (
    <header className="page-refinance-fb header">
      <div className="header-wrap" id="header">
        <div className="logo">
          <a className="logo__img" href="#/">
            <LazyLoadImage
              src={imgLogo}
              alt="logo"
              width="100%"
              height="auto"
            />
          </a>
        </div>
        <div className="btn-reset" onClick={() => setIsShowModal(true)}>
          <LazyLoadImage src={imgReset} alt="imgReset" />
        </div>
      </div>

      <div className="header-bottom">
        <div className="p-3">
          <Row className="mb-2">
            <Col className="title text-center">{renderHtmlText()}</Col>
          </Row>
        </div>
      </div>
      <Container className="pb-5 p-0 position-relative">
        <Row className="m-0">
          <Col className="d-flex justify-content-center px-2 p-md-3">
            <Form />
          </Col>
        </Row>
        {location.pathname === "/demo/step-detail" ||
        location.pathname === "/demo/step-nine" ? (
          <Row className="mb-3 mx-0">
            <Col>
              <p className="text-footer-form">
                By clicking “Submit” I consent to Reviewyourmortgage.com.au{" "}
                <span
                  onClick={() => setIsShowTerms(true)}
                  style={{ color: "#b0b0b0" }}
                >
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span
                  onClick={() => setIsShowModalPolicy(true)}
                  style={{ color: "#b0b0b0" }}
                >
                  Privacy Policy
                </span>
                .
              </p>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
      <Modal
        isShow={isShowModal}
        handleClose={() => setIsShowModal(false)}
        handleSubmit={() => handleReset()}
      />
      <ModalPolicy
        isShow={isShowModalPolicy}
        handleClose={() => setIsShowModalPolicy(false)}
      />
      <ModalTerms
        isShow={isShowTerms}
        handleClose={() => setIsShowTerms(false)}
      />
    </header>
  );
};

export default Header;
