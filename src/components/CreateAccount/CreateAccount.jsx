import "./createaccount.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [];
const years = [];
(() => {
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
})();

(() => {
  for (let i = 1900; i <= 2024; i++) {
    years.push(i);
  }
})();

const CreateAccount = () => {
  return (
    <div className="modal-main">
      <img src="twitter-logo.png" alt="" />
      <div className="create-account">Create an account</div>
      <input
        type="text"
        className="create-input"
        placeholder="Name"
        name="name"
      />
      <input
        type="text"
        className="create-input"
        placeholder="Phone Number"
        name="phone"
      />
      <div className="use-email">Use email</div>
      <div className="DOB">
        <div className="DOB-tex1">Date of birth</div>
        <div className="OB-tex2">
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </div>
        <div className="dropdowns">
          <Form.Select size="lg" className="month" defaultValue="" placeholder="month">
          <option value="" disabled hidden>Month</option>
            {months.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Form.Select>
          <Form.Select size="lg" className="day" defaultValue="">
          <option value="" disabled hidden>Day</option>
            {days.length > 0 &&
              days.map((day) => <option key={day}>{day}</option>)}
          </Form.Select>
          <Form.Select size="lg" className="day" defaultValue="">
          <option value="" disabled hidden>Year</option>
            {years.length > 0 &&
              years.map((year) => <option key={year}>{year}</option>)}
          </Form.Select>
        </div>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default CreateAccount;
