import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, form, label, span, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function PaymentForm() {
    return (
        <Form>
            <h1>Billing Address</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mailing address</Form.Label>
                <Form.Control type="address" placeholder="123 main street" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                    <li class="nav-item"> <a data-toggle="pill" href="#credit-card" class="nav-link active "> <i class="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                    <li class="nav-item"> <a data-toggle="pill" href="#paypal" class="nav-link "> <i class="fab fa-paypal mr-2"></i> Paypal </a> </li>
                    <li class="nav-item"> <a data-toggle="pill" href="#net-banking" class="nav-link "> <i class="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li>
                </ul>
            </div>
            <div class="form-group"> <label for="username">
                <h6>Card Owner</h6>
            </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " /> </div>
            <div class="form-group"> <label for="cardNumber">
                <h6>Card number</h6>
            </label>
                <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required />
                    <div class="input-group-append"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <div class="form-group">
                    <label><span class="hidden-xs">
                        <h6>Expiration Date</h6>
                    </span></label>
                        <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required></input> <input type="number" placeholder="YY" name="" class="form-control" required></input> </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                            <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                        </label> <input type="text" required class="form-control"></input>
                        </div>
                    </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    );
}
export default PaymentForm