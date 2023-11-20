import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="11" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="11" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="11" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="11" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            defaultValue="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormComponent;




// import { useState, useRef } from "react"
// import { Form } from "react-bootstrap";

// export default function FormComponent() {
//   const [submitted, setSubmitted] = useState(false);
//   const firstName = useRef(null);
//   const lastName = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   return (
//     <div id="form-container" className="container col-11 mb-3 d-grid rounded-3">

//       <Form className="rounded-3 mx-3" onSubmit={(e) => {
//         e.preventDefault();
//         setSubmitted(true);
//       }} validated={submitted} noValidate>

//         <div className="mb-3">
//           <label htmlFor="firstName" className="form-label"></label>
//           <input
//             type="text"
//             className="form-control"
//             id="firstName"
//             placeholder="First Name"
//             required
//             ref={firstName}
//             onChange={() => setSubmitted(false)}
//           // isInvalid={submitted && !firstName.current.checkValidity()}
//           // custom
//           />

//           <div className="float-end">
//             <Form.Control.Feedback className="invalid-feedback" type="invalid">First Name cannot be empty</Form.Control.Feedback>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="lastName" className="form-label"></label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               placeholder="Last Name"
//               required
//               ref={lastName}
//               onChange={() => setSubmitted(false)}
//             // isInvalid={submitted && !lastName.current.checkValidity()}
//             // custom
//             />
//             <div className="float-end">
//               <Form.Control.Feedback type="invalid">Last Name cannot be empty</Form.Control.Feedback>
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label"></label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Email Address"
//               required
//               ref={email}
//               onChange={() => setSubmitted(false)}
//             // isInvalid={submitted && !email.current.checkValidity()}
//             // custom
//             />

//             <div className="float-end">
//               <Form.Control.Feedback type="invalid">Looks like this is not an email</Form.Control.Feedback>
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label"></label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Password"
//               required
//               ref={password}
//               onChange={() => setSubmitted(false)}
//             // isInvalid={submitted && !email.current.checkValidity()}
//             // custom
//             />
//             <div className="float-end">
//               <Form.Control.Feedback type="invalid">Password cannot be empty</Form.Control.Feedback>
//             </div>

//           </div>
//         </div>
//         <div className="d-grid mt-5 mb-3">
//           <button id="form-btn" type="submit"
//             className="btn text-white">Claim your free trial</button>
//         </div>

//         <div className="text-center">
//           <p id="term-text">By clicking the button, you are agreeing to our <a className="text-danger fw-bold" href="https://www.linkedin.com/in/luyvannda/" target="_blank" rel="noreferrer">Terms and Services</a>
//           </p>
//         </div>
//       </Form>

//     </div>
//   )
// }