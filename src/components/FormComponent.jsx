import { useState, useRef } from "react"
import { Form } from "react-bootstrap";

export default function FormComponent() {
  const [submitted, setSubmitted] = useState(false);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div id="form-container" className="container mb-3 d-grid rounded-3">

      <Form className="rounded-3 mx-3" onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }} validated={submitted} noValidate>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            required
            ref={firstName}
            onChange={() => setSubmitted(false)}
            isInvalid={submitted && !firstName.current.checkValidity()}
            custom
          />

          <div className="float-end">
            <Form.Control.Feedback className="invalid-feedback" type="invalid">First Name cannot be empty</Form.Control.Feedback>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required
              ref={lastName}
              onChange={() => setSubmitted(false)}
              isInvalid={submitted && !lastName.current.checkValidity()}
              custom
            />
            <div className="float-end">
              <Form.Control.Feedback type="invalid">Last Name cannot be empty</Form.Control.Feedback>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
              required
              ref={email}
              onChange={() => setSubmitted(false)}
              isInvalid={submitted && !email.current.checkValidity()}
              custom
            />

            <div className="float-end">
              <Form.Control.Feedback type="invalid">Looks like this is not an email</Form.Control.Feedback>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
              ref={password}
              onChange={() => setSubmitted(false)}
              isInvalid={submitted && !email.current.checkValidity()}
              custom
            />
            <div className="float-end">
              <Form.Control.Feedback type="invalid">Password cannot be empty</Form.Control.Feedback>
            </div>

          </div>
        </div>
        <div className="d-grid mt-5 mb-3">
          <button id="form-btn" type="submit"
            className="btn text-white">Claim your free trial</button>
        </div>

        <div className="text-center">
          <p id="term-text">By clicking the button, you are agreeing to our <span className="text-danger fw-bold">Terms and Services</span>
          </p>
        </div>
      </Form>

    </div>
  )
}