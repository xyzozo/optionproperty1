/** @format */

import React, { lazy, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./Home";
const RefinanceFormFB = lazy(() => import('./RefinanceFB'));
const RefinanceFormFBSuccess = lazy(() => import('./RefinanceFB/Form/Success'));
const RefinanceFormFB2FA = lazy(() => import('./RefinanceFB2FA'));
const RefinanceFormFB2FASuccess = lazy(() => import('./RefinanceFB2FA/Form/Success'));
const RefinanceFormFB2FaNEW = lazy(() => import('./RefinanceFB2New'));
const RefinanceFormFB2FaNEWSuccess = lazy(() => import('./RefinanceFB2New/Form/Success'));
const ThankPageLB = lazy(() => import('./ThanksFB'));
const ThankPageFB2FA = lazy(() => import('./ThanksFB2FA'));
const ContactUs = lazy(() => import('./ContactUs'));
const ContactUsFB = lazy(() => import('./ContactUsFb'));
const RefinanceFormFB2FADemo = lazy(() => import('./RefinanceFB2FADemo'));
const RefinanceFormFB2FADemoSuccess = lazy(() => import('./RefinanceFB2FADemo/Form/Success'));

const Router = () => {
  const { listen } = useHistory();
  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return;
      window.gtag("config", "GTM-TC9KTLT", {
        page_path: location.pathname,
      });
    });
    return unlisten;
  }, [listen]);

  return (
    <Switch>
       <Route exact path="/refinance-fb/contact-us">
        <ContactUsFB />
      </Route>
      <Route exact path="/refinance-fb-2fa/contact-us">
        <ContactUs />
      </Route>
      <Route exact path="/demo/contact-us">
        <ContactUs />
      </Route>
      <Route exact path="/thank-you-fb">
        <ThankPageLB />
      </Route>
      <Route exact path="/thank-you-fb-2fa">
        <ThankPageFB2FA />
      </Route>
      <Route exact path="/thank-you-demo">
        <ThankPageFB2FA />
      </Route>
      <Route path="/refinance-fb/step-success">
        <RefinanceFormFBSuccess/>
      </Route>
      <Route path="/refinance-fb">
        <RefinanceFormFB />
      </Route>
      <Route path="/refinance-fb-2fa/step-success">
        <RefinanceFormFB2FASuccess/>
      </Route>
      <Route path="/refinance-fb-2fa">
        <RefinanceFormFB2FA />
      </Route>
      <Route path="/demo/step-success">
        <RefinanceFormFB2FADemoSuccess/>
      </Route>
      <Route path="/demo">
        <RefinanceFormFB2FADemo />
      </Route>
      <Route path="/refinance-fb-2fa-new/step-success">
        <RefinanceFormFB2FaNEWSuccess/>
      </Route>
      <Route path="/refinance-fb-2fa-new">
        <RefinanceFormFB2FaNEW />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Router;
