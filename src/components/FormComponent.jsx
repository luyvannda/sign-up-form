import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
    <div id="form-container" className="container col-11 mb-3 d-grid rounded-3">
      <Form className="rounded-3 mx-2 mx-md-3 mx-xl-4" noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group as={Col} md="12" controlId="firstName">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
          />
          <Form.Control.Feedback className='text-end' type='invalid'>First Name cannot be empty</Form.Control.Feedback>

          <Form.Control.Feedback className='text-end' type='valid'>Look good</Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} md="12" controlId="lastName">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback className='text-end' type='invalid'>Last Name cannot be empty</Form.Control.Feedback>

          <Form.Control.Feedback className='text-end' type='valid'>Look good</Form.Control.Feedback>

        </Form.Group>

        <Form.Group as={Col} md="12" controlId="email">
          <Form.Label></Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              required
            />
            <Form.Control.Feedback className='text-end' type="invalid">
              Looks like this is not an email
            </Form.Control.Feedback>

          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="password">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback className='text-end' type='invalid'>Password cannot be empty</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid mt-4 mb-3">
          <Button id='form-btn' type="submit">Claim your free trial</Button>
        </div>

        <div className="text-center">
          <p id="term-text">By clicking the button, you are agreeing to our <a className="text-danger fw-bold" href="https://www.linkedin.com/in/luyvannda/" target="_blank" rel="noreferrer">Terms and Services</a>
          </p>
        </div>
      </Form>

    </div>
  );
}

export default FormComponent;
