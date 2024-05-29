import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Row, Col } from "react-bootstrap";
import imgStar from "../../../images/star.png";
import imgAuthor from "../../../images/life/user2.png";
import './style.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="solar-rating">
                <div className="bg-quotes">
                <div className="container px-md-0">
                    <Row className="flex-column-reverse-mobile">
                    <Col lg={8} className="text-center">
                        <div className="content-quotes">
                        <div className="desc">
                            I didn't realise that it was so simple to refinance and
                            I cant believe how much I am now saving each month and
                            overall on our loan. Very happy!
                        </div>
                        <div className="group-img-star">
                            <LazyLoadImage
                            src={imgStar}
                            alt="star"
                            width="16"
                            height="16"
                            />
                            <LazyLoadImage
                            src={imgStar}
                            alt="star"
                            width="16"
                            height="16"
                            />
                            <LazyLoadImage
                            src={imgStar}
                            alt="star"
                            width="16"
                            height="16"
                            />
                            <LazyLoadImage
                            src={imgStar}
                            alt="star"
                            width="16"
                            height="16"
                            />
                            <LazyLoadImage
                            src={imgStar}
                            alt="star"
                            width="16"
                            height="16"
                            />
                        </div>
                        <div className="text-author">
                            Jacob - Camberwell, 3124 VIC
                        </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="image-author">
                        <LazyLoadImage
                            src={imgAuthor}
                            alt=""
                            width="325"
                            height="325"
                        />
                        </div>
                    </Col>
                    </Row>
                </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
