import React from "react";

function Register() {
  return (
    <>
      <main className="form-signin w-100 m-auto mylogin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Full Name"
            />
            <label for="floatingPassword">Full Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Confirm Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Register
          </button>
        </form>
      </main>
    </>
  );
}

export default Register;
