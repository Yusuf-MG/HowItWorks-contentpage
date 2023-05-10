/* eslint-disable max-len */
import React from 'react';
import {
  Col, Button,
  Container, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import order from '../../images/order.jpg';
import deliv from '../../images/howdeliv.jpg';
import cherry from '../../images/cherrysamp.jpeg';
import basket from '../../images/basketicon.png';
import signup from '../../images/signup.png';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className="content-block">
      <Container>
        <Row>
          <h2 className="row-title">How It Works</h2>
        </Row>
        <Row className="row-content">
          <Col className="left-col">
            <img className="how-img" src={order} alt="how-img" />
          </Col>
          <Col className="right-col">
            <h3 className="col-title">You place an order</h3>
            <p className="para">
              Either sign in or browse our inventory as a guest,
              select the products you wish to purchase and add them to your cart.
              Then enter your payment information and address, and let us do the rest.
            </p>
          </Col>
        </Row>

        <Row className="row-content">
          <Col className="left-col">
            <h3 className="col-title">
              We deliver your order
            </h3>
            <p className="para">
              Our staff will confirm the order information and start putting your order together,
              while at the same time ensuring you get the best quality products available.
              <br />
              {' '}
              Once the order is ready, our staff will drop off the order at the desired address.
            </p>
          </Col>
          <Col className="right-col">
            <img className="how-img" src={deliv} alt="how-img" />
          </Col>
        </Row>

        <Row className="row-content">
          <Col className="left-col">
            <img className="how-img" src={cherry} alt="how-img" />
          </Col>
          <Col className="right-col">
            <h3 className="col-title">You enjoy fresh produce</h3>
            <p className="para">
              We order new shipments daily to ensure our customers have the freshest fruit possible.
            </p>
          </Col>
        </Row>

        <Row className="last-row">
          <Col className="col-left">
            <img className="bskt-img" src={basket} alt="about-img" />
            <Link
              className=""
              role="button"
              to="/productList"
              variant="outline-light"
            >
              <Button className="link-button">Start Shopping Now</Button>
            </Link>
          </Col>

          <Col>
            <img className="signup-img" src={signup} alt="" />
            <Link
              className=""
              role="button"
              to="/signup"
              variant="outline-light"
            >
              <Button className="link-button">Sign Up Now</Button>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
export default HowItWorks;
