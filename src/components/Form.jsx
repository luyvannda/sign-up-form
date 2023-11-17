export default function Form() {
  return (
    <div id="form-container" className="container mb-3 d-grid rounded-3">

      <form className="rounded-3 mx-3">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            required
          />
          <div className="float-end">
            <span className="invalid-feedback ">First Name cannot be empty</span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            required
          />
          <div className="float-end">
            <span className="invalid-feedback ">Last Name cannot be empty</span>
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
          />
          <div className="float-end">
            <span className="invalid-feedback ">Looks like this is not an email</span>
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
          />
          <div className="float-end">
            <span className="invalid-feedback ">Password cannot be empty</span>
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
      </form>



    </div>
  )
}