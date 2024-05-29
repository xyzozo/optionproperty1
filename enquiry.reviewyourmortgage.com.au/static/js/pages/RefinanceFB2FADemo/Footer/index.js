/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs md="12" className="p-0">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reviewyourmortgage.com.au/privacy-policy/"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reviewyourmortgage.com.au/terms-and-conditions/"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reviewyourmortgage.com.au/cookie-policy/"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs md="12">
            <p className="text-justify info mb-2">
            **  A $2,000 cash back offer is available on refinances of an existing home loan from another financial institution with a minimum new lending of $400,000 and a loan to value ratio (LVR) up to 80%. A $3,000 cash back offer is available on refinances of an existing home loan from another financial institution with a minimum new lending of $700,000 and an LVR of up to 80%. To be eligible for this offer, applications must be received from 8 September 2023 and settle within 120 days of the loan application date. Not available where any of the loan proceeds are for the refinance, restructure, switches or top ups of home loans from ME or from other lenders within the Bank of Queensland (BOQ) Group which includes BOQ, BOQ Specialist and Virgin Money (Australia).
            </p>
            <p className="text-justify info mb-2">
              Terms and conditions apply, cashback offers are provided directly
              by some lenders and may only be available for particular loan
              products. Cashback offers are not always available with advertised
              loan products. Ask us to learn more.
            </p>
            <p className="text-justify info">
              Review My Mortgage is owned by EMBR Group Pty Ltd (ABN 27 147 278
              153) Australian Credit License 519274 and operates{" "}
              <a href="https://reviewyourmortgage.com.au/" rel="noreferrer">
                www.reviewyourmortgage.com.au
              </a>{" "}
              as a free service that allows users to compare quotes and save
              money in a few simple steps. This is based on the details provided
              through this site and our partners product or service criteria at
              the time of the enquiry. When we provide comparisons, or pass your
              details onto product issuers or credit providers, Or other
              comparison services, this is not a recommendation from EMBR Group
              Pty Ltd and in no way should be treated as personal or general
              advice about the suitability of a product or service. You should
              consult the individual product issuer or credit provider for their
              terms and conditions and read any specific product disclosures.{" "}
              <a href="https://reviewyourmortgage.com.au/" rel="noreferrer">
                www.reviewyourmortgage.com.au
              </a>{" "}
              owned by and EMBR Group Pty Ltd do receive fees and commissions
              for providing this service and sharing your information with a
              relevant product or service supplier. Unlike other comparison
              sites, we are completely independently run, funded and not owned
              by any Bank or Insurer and we are not a product issuer or a credit
              provider. We endeavor to provide you with a comparison of a wide
              range of products, providers and services, however we don’t cover
              every available product, provider or service available in the
              market. Therefore there may be other options available to you that
              could indeed be better than our options. In some cases, we may
              only have one provider who can service your specific request, as
              opposed to multiple quotes. This may be because your circumstances
              are unique and only serviceable by one specific provider, or
              because EMBR Group Pty Ltd only has been able to come to an
              agreement with one product supplier. If you decide to proceed with
              a specific product or service offering through a referral from{" "}
              <a href="https://reviewyourmortgage.com.au/" rel="noreferrer">
                www.reviewyourmortgage.com.au
              </a>{" "}
              , you will be dealing directly with the 3rd party company and(or)
              its representatives of that product or service and no longer with{" "}
              <a href="https://reviewyourmortgage.com.au/" rel="noreferrer">
                www.reviewyourmortgage.com.au
              </a>{" "}
              / Review My Mortgage owned by. We endeavor to always provide
              accurate and up to date information, however at times may need to
              update these details and they could be, at times, out of date.{" "}
              <a
                href="https://preview.reviewyourmortgage.com.au/"
                rel="noreferrer"
              >
                Are you a mortgage broker
              </a>{" "}
              -{" "}
              <a href="/demo/contact-us" rel="noreferrer">
                Are you an affiliate
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
