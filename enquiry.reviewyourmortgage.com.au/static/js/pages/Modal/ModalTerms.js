/** @format */

import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalTerms = ({ handleClose, isShow }: Props) => {
  return (
    <Modal
      show={isShow}
      onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h4>Terms &amp; Conditions</h4>
        <div className="content-policy">
          <h1>USER</h1>
          <p>
            Reviewyourmortgage.com.au is owned and operated by EMBR Group Pty
            Ltd (ABN 27 147 278 153) and has the right to operate the
            reviewyourmortgage.com.au website (the Website) and these Terms
            &amp; Conditions apply to your use of the Website. Your use of the
            Website including accessing or browsing the Website or uploading any
            material to the Website is deemed to be your acceptance of these
            Terms and Conditions. Please read these carefully and if you do not
            accept the Terms and Conditions set out below please exit the
            Website and refrain from using the Website.
          </p>
          <p>
            A User can contact reviewyourmortgage.com.au at any time on (hello
            (at) reviewyourmortgage.com.au) to opt out of direct marketing with
            the subject line as Unsubscribe, or by clicking the ‘unsubscribe’
            link found at the bottom of our digital communication, or in writing
            to: Review Your Mortgage, Po Box 4194 Fitzroy VIC 3065 Australia.
          </p>
          <p>
            If you breach any provision of these Terms and Conditions your right
            to access the Website will be immediately revoked. The Website is
            for Australia residents only aged 18 years or over.
          </p>
          <ol>
            <li>
              <strong>Intellectual Property</strong>
            </li>
          </ol>
          <p>
            Reviewyourmortgage.com.au use the words ‘Review Your Mortgage’ as a
            trade mark in Australia (‘Trade Mark’). You are not permitted to use
            the Trade Mark or any other trademarks which belong or are licensed
            to reviewyourmortgage.com.au or any of reviewyourmortgage.com.au
            Intellectual Property which includes but is not limited to copyright
            material, confidential information, designs and other content
            located on the Website without reviewyourmortgage.com.au prior
            written authorisation.
          </p>
          <p>
            The information, images and text on the website may be subject to
            copyright and are the property of or otherwise property that is
            licensed to reviewyourmortgage.com.au. Trademarks used on the
            Website to describe other companies and their products or services
            are trademarks which belong to or are licensed to those companies
            (Other Trade Marks). The Other Trade Marks are displayed on the
            Website to provide information to you about other products or
            services via the Website. You agree not to download, copy, reproduce
            or in any way use the Other Trade Marks without authorisation from
            the owner/s of the Other Trade Marks.
          </p>
          <p>
            You acknowledge that you are expressly prohibited from using the
            phrase ‘Review Your Mortgage’ or any part of the Website domain name
            without the written consent of reviewyourmortgage.com.au. You agree
            that you are prohibited from reverse engineering the Website or
            otherwise attempting to copy the Website functionality or obtain
            from the Website information or data including but not limited to
            User’s personal information.
          </p>
          <ol start={2}>
            <li>
              <strong>Information and Liability</strong>
            </li>
          </ol>
          <p>
            You acknowledge that reviewyourmortgage.com.au is not liable or
            responsible for any errors or omissions in the content of the
            Website. The information contained on the Website is provided for
            general information purposes only. Reviewyourmortgage.com.au make no
            warranties as to the accuracy, completeness or health risks in
            relation to the recommendations, information or material contained
            on the Website.
          </p>
          <p>
            You acknowledge that there are risks associated with using the
            internet and World Wide Web and to the fullest extent permitted by
            law, reviewyourmortgage.com.au or its affiliates or subsidiaries are
            not liable for any direct or indirect damages or losses arising by
            way of your use or access to the Website.
          </p>
          <p>
            You acknowledge that reviewyourmortgage.com.au makes no warranty
            that the Website will meet your User requirements or that the
            information contained on the Website or your use of the Website will
            be uninterrupted, timely, secure, error free, accurate, virus-free
            or compliant with legislation or regulations.
          </p>
          <p>
            You acknowledge and agree that reviewyourmortgage.com.au have no
            liability of any kind either express or implied with respect to any
            claims arising in any way from your use of the Website, by virtue of
            the information provided or contained on the Website. The Website
            contains general statements regarding goods and/or services offered
            by other businesses however it is your responsibility to ensure the
            goods and/or services are the product you wish to purchase and must
            review the relevant product or service documents supplied by the
            relevant businesses.
          </p>
          <p>
            You acknowledge that reviewyourmortgage.com.au may from time to time
            improve or make changes to the Website to upgrade security on the
            Website, update information on the Website or for any other reason
            in reviewyourmortgage.com.au sole discretion.
          </p>
          <p>
            You acknowledge that you are responsible for ensuring the protection
            of your electronic equipment when accessing or browsing the Website
            and unreservedly hold reviewyourmortgage.com.au harmless in respect
            to damage sustained to your electronic equipment or losses incurred
            by you as a result of the Website.
          </p>
          <ol start={3}>
            <li>
              <strong>Invitation to Contact</strong>
            </li>
            <li>
              <strong>a)</strong>By submitting an application to us you
              explicitly opt-in and authorise us, a relevant retailer or service
              provider and our other third party partners (who we choose to
              appoint and can change at any time) to contact you via phone, SMS,
              MMS, emails or any other electronic or direct methods in order to
              provide you with services, news, information, marketing material
              or advice (according to their relevant licensing abilities or
              restrictions) about our, or their, existing and new products and
              services for an infinite time period or until you unsubscribe.
            </li>
            <li>
              <strong>b)</strong>If your phone number is on the Do Not Call
              Register, you confirm and consent that the communication from
              reviewyourmortgage.com.au or any of its appointed partners is
              legal and solicited.
            </li>
            <li>
              <strong>c)</strong>You authorise and consent to us and our
              third-party partners contacting you for marketing promotions,
              which include telephone, SMS, MMS, emails or direct mails or any
              other format of marketing. This consent extends beyond the initial
              industry vertical you initially subscribed or opted-in to, to
              receive marketing material from other related offers from us or
              our partners. For example, if you originally consented to receive
              a quote for Life Insurance, you consent to us sending you offers
              for Home Loans.
            </li>
            <li>
              <strong>d)</strong>This consent is valid perpetually and
              unrestricted or until you choose to opt out. You can opt out of
              these communications by contacting us as detailed in our&nbsp;
              <a href="https://reviewyourmortgage.com.au/privacy-policy/">
                Privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Privacy</strong>
            </li>
          </ol>
          <p>
            Reviewyourmortgage.com.au is committed to preserving the privacy of
            its Users and will ensure that all personal information collected
            will be kept secure and in accordance with any applicable privacy
            laws. By using the Website, you agree to provide certain personal
            information necessary to utilise the Website to its full capability.
          </p>
          <p>
            Whilst reviewyourmortgage.com.au agrees to ensure that all personal
            information is kept secure, you agree that reviewyourmortgage.com.au
            may provide your Personal Information to other companies for the
            purpose of providing you with a quote or information about a product
            of service. You acknowledge that reviewyourmortgage.com.au will
            receive remuneration for providing your Personal Information to
            relevant third-party businesses.
          </p>
          <p>
            When you supply your personal information to the
            reviewyourmortgage.com.au website reviewyourmortgage.com.au receive
            payment from the sale of your personal information or upon the
            successful outcome (ie: a “sale”) resulting from the passing of your
            personal information to third party goods and services providers.
            You expressly permit reviewyourmortgage.com.au to sell your personal
            information in order for reviewyourmortgage.com.au to supply you
            with a quote for goods and/or services.
          </p>
          <p>
            Reviewyourmortgage.com.au reserves the right to cooperate fully with
            any law enforcement authorities relating to any lawful request for
            the disclosure of personal information of its Users. You acknowledge
            that you have read and agree to the terms of
            reviewyourmortgage.com.au Privacy Policy.
          </p>
          <ol start={5}>
            <li>
              <strong> Use of Website</strong>
            </li>
          </ol>
          <p>
            You acknowledge that your use of the Website is undertaken at your
            own risk and you unreservedly indemnify reviewyourmortgage.com.au
            from any responsibility in respect of information or content listed
            on the Website or any linked websites not controlled by
            reviewyourmortgage.com.au.
          </p>
          <p>
            You agree not to engage in any activity that is disruptive or is
            detrimental to the operation or function of the Website. You are
            prohibited from positing or transmitting unlawful, threatening,
            defamatory, obscene, or profane material on the Website.
            Reviewyourmortgage.com.au may prevent you from accessing the Website
            if in reviewyourmortgage.com.au sole opinion you have violated or
            acted inconsistently with these Terms and Conditions.
          </p>
          <p>
            Reviewyourmortgage.com.au will attempt to find a range of quotes for
            you, or a provider who can compare multiple providers and quotes for
            you. However, sometimes this is subject to reviewyourmortgage.com.au
            ability to find or secure a commercial arrangement with a third
            party provider. In every case, you agree that the responsibility to
            ensure that the product or service being offered to you, is suitable
            for your needs, circumstances and budget. You indemnify
            reviewyourmortgage.com.au from the ramifications of your engagement
            with the supplier of the product or service being offered to you as
            a result of reviewyourmortgage.com.au passing your details onto that
            provider.
          </p>
          <p>
            Nothing on the website constitutes or should be mistaken as an offer
            to sell or supply any goods or services to you.
          </p>
          <p>
            Further, reviewyourmortgage.com.au make no warranty the quote
            provided to you is the best, the cheapest or that the goods or
            services are fit for purpose or meet consumer warranties in
            Australia.
          </p>
          <ol start={6}>
            <li>
              <strong>Links and Advertisements</strong>
            </li>
          </ol>
          <p>
            You acknowledge that any links or advertisements containing links to
            external websites that are provided or located on the Website are
            for convenience only. Reviewyourmortgage.com.au does not endorse or
            make any warranty with respect to any external websites or to the
            accuracy or reliability of the links or advertisements contained on
            the Website.
          </p>
          <p>
            You acknowledge that items, resources or learning material which are
            advertised or displayed on the Website may not be available to
            purchase or download at the time you access the Website.
          </p>
          <ol start={7}>
            <li>
              <strong> Security</strong>
            </li>
          </ol>
          <p>
            Reviewyourmortgage.com.au, from time to time, may use technology to
            improve security on the Website and you agree to cooperate with
            reviewyourmortgage.com.au and you are responsible to check and read
            the amended Terms and Conditions.
          </p>
          <ol start={8}>
            <li>
              <strong>Cookies and Viruses</strong>
            </li>
          </ol>
          <p>
            Reviewyourmortgage.com.au uses its best endeavours to ensure the use
            of the best technology to protect its Users, but accepts no
            responsibility in relation to any damage to any electronic equipment
            used by you, including mobile devices, as a result of your use of
            the Website. You acknowledge that you are responsible for ensuring
            the protection of your electronic equipment and unreservedly
            indemnify reviewyourmortgage.com.au from any responsibility in
            respect of damage to any electronic equipment as a result of your
            use of the Website.
          </p>
          <p>
            We use a variety of different types of Cookies on our Sites.
            Different Cookies have different specific purposes but in general
            they are all used so that we can improve your experience in using
            our Sites and interacting with us. Some of the purposes of different
            Cookies we use are described below.
          </p>
          <p>
            (A) Some Cookies are essential to the Site in order to facilitate
            our log-in process and enable you to move around it and to use its
            features. Without these Cookies, we may not be able to provide
            certain services or features, and the Site will not perform as
            smoothly for you as we would like.
          </p>
          <p>
            (B) We may use Cookies to allow us to remember the choices you make
            while browsing the Site, and to provide enhanced and more
            personalized content and features, such as customizing a certain
            webpage, providing relevant advertising or editorial content,
            remembering if we have asked you to participate in a promotion and
            for other services you request, like watching a video, completing a
            form or commenting on a blog.
          </p>
          <p>
            (C) We may use Cookies to receive and record information about your
            computer, device, and browser, potentially including your IP
            address, browser type, and other software or hardware information.
            If you access the Site from a mobile or other device, we may collect
            a unique device identifier assigned to that device (“UDID”),
            geolocation data, or other transactional information for that
            device.
          </p>
          <p>
            (D) We and our service providers and advertisers may use analytics
            Cookies, which are sometimes called performance cookies, to collect
            information about your use of the Site and enable us to improve the
            way it works. Analytics Cookies collect information about how you
            use the Site, for instance, which pages you go to most. The
            information allows us to see the overall patterns of usage on the
            Site, help us record any difficulties you have with the Site and
            show us whether our advertising is effective or not.
          </p>
          <p>
            (E) We and our service providers and advertisers may use advertising
            Cookies to deliver ads that we believe are more relevant to you and
            your interests. For example, we may use targeting or advertising
            Cookies to limit the number of times you see the same ad on our
            Site, to help measure the effectiveness of our advertising campaigns
            as well as to customize the advertising and content you receive on
            our Site.
          </p>
          <p>
            (F) Social plug-in tracking Cookies can be used to track both
            members and non-members of social networks for additional purposes
            such as behavioural advertising, analytics, and market research.
          </p>
          <p>
            We aggregate information received from the various Cookies placed on
            your browser by our connected network of sites. We may also link our
            anonymous Cookie ID’s with the anonymous Cookie ID’s used by third
            parties, including some of our service providers. This improves our
            ability to provide you with more relevant editorial and advertising
            content based on your activity across our connected network. We may
            also associate your browser and/or device with other browsers or
            devices you use.
          </p>
          <p>
            All information derived from these Cookies may be combined with
            other information acquired from third parties, and we may share this
            information with other organizations, such as advertisers, provided
            it is anonymised.
          </p>
          <ol start={9}>
            <li>
              <strong>General</strong>
            </li>
          </ol>
          <p>
            If any part of these Terms &amp; Conditions is held to be illegal or
            unenforceable, you authorise reviewyourmortgage.com.au to amend or
            sever that part of the Terms &amp; Conditions to make that part
            legal and enforceable or to ensure that the remaining parts of the
            Terms &amp; Conditions remain in full force and effect.
          </p>
          <p>
            You acknowledge that reviewyourmortgage.com.au may vary these Terms
            &amp; Conditions and you agree to be bound by that variation from
            that time when that variation is advised. You understand that it is
            your responsibility to regularly check these Terms and Conditions so
            that you are aware of any variations which apply. Your continued use
            of the Website constitutes your agreement to these Terms and
            Conditions and any variations to these Terms and Conditions.
          </p>
          <ol start={10}>
            <li>
              <strong>Applicable Law</strong>
            </li>
          </ol>
          <p>
            You agree that the content of this Website is intended for
            Australian residents only and may not be available in your Country.
            The laws of the State of Queensland will apply with respect to these
            Terms and Conditions and your use of the Website. You submit to the
            exclusive jurisdiction of the applicable Courts located in the State
            of Queensland, Australia with respect to the Website and these Terms
            and Conditions.
          </p>
          <p>
            <em>Updated 09/06/2022</em>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className="btnPrimary life wow fadeInUp">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTerms;
