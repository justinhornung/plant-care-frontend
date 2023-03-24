import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-floating sm-4 mb-3">
          <input type="text" className="form-control" name="firstName" id="floatingInput" placeholder="firstName" />
          <label for="floatingInput">First Name</label>
        </div>
        <div className="form-floating sm-4 mb-3">
          <input type="email" className="form-control" name="email" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email Address</label>
        </div>
        <div className="form-floating sm-4 mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating sm-4 mb-3">
          <input
            type="password"
            className="form-control"
            name="passwordConfirmation"
            id="floatingPasswordConfirmation"
            placeholder="PasswordConfirmation"
          />
          <label for="floatingPasswordConfirmation">Password Confirmation</label>
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
