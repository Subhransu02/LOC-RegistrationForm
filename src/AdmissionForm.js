import React, { Component } from "react";
import "./AdmissionForm.css";
const { REACT_APP_API_ENDPOINT } = process.env;
class AdmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      regdNo: "",
      year: "select",
      phone: "",
      branch: "select",
      codingProfile: "",
      formErrors: {},
      message: "",
      msgcolor: "",
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const { fullname, email, regdNo, year, phone, branch, codingProfile } =
      this.state;
    let formErrors = {};
    let formIsValid = true;

    //Student fullname
    if (!fullname) {
      formIsValid = false;
      formErrors["fullnameErr"] = "fullname is required.";
    }

    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
    }

    //regdNo
    if (!regdNo) {
      formIsValid = false;
      formErrors["regdNoErr"] = "regdNo is required.";
    } else {
      var pattern = /^[0-9]$/;
    }

    //year
    if (year === "" || year === "select") {
      formIsValid = false;
      formErrors["yearErr"] = "Select year.";
    }

    //Phone number
    if (!phone) {
      formIsValid = false;
      formErrors["phoneErr"] = "Phone number is required.";
    } else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(phone)) {
        formIsValid = false;
        formErrors["phoneErr"] = "Invalid phone number.";
      }
    }

    //branch
    if (branch === "" || branch === "select") {
      formIsValid = false;
      formErrors["branchErr"] = "Select branch.";
    }

    //Student codingProfile
    if (!codingProfile) {
      formIsValid = false;
      formErrors["codingProfileErr"] = "codingProfile is required.";
      // return <Link to="ThankYou.js" />;
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let target = e.target;
    let formData = {};
    for (let i = 0; i < target.length; i++) {
      formData[target.elements[i].getAttribute("name")] =
        target.elements[i].value;
    }
    const response = await fetch(
      "https://loc-2023-api.onrender.com/api/loc/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    if (response.ok) {
      this.setState({ message: "Thanks For Registering" });
      this.setState({ msgcolor: "#1bec1b" });
    } else {
      let msg = data.error.message;
      this.setState({ message: msg });
      this.setState({ msgcolor: "red" });
    }

    setTimeout(() => {
      this.setState(this.initialState);
    }, 5000);
  };

  render() {
    const {
      fullnameErr,
      emailErr,
      regdNoErr,
      yearErr,
      phoneErr,
      branchErr,
      codingProfileErr,
    } = this.state.formErrors;

    return (
      <div className="formDiv">
        <div className="form_wrap">
          <div className="heading">LOC Registration Form </div>
          <div className="form_comp">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={this.state.fullname}
                  onChange={this.handleChange}
                  placeholder="Your fullname.."
                  className={fullnameErr ? " showError" : ""}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Full Name is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                {fullnameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {fullnameErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="text">Registration No</label>
                <input
                  max="10"
                  type="text"
                  name="regdNo"
                  value={this.state.regdNo}
                  onChange={this.handleChange}
                  placeholder="regdNo.."
                  className={regdNoErr ? " showError" : ""}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Registration No is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                {regdNoErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {regdNoErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <select
                  name="year"
                  onChange={this.handleChange}
                  className={yearErr ? " showError" : ""}
                  value={this.state.year}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Year is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                >
                  <option value="select">--Select--</option>
                  <option value={1}>1st</option>
                  <option value={2}>2nd</option>
                </select>
                {yearErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {yearErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="branch">Branch</label>
                <select
                  name="branch"
                  value={this.state.branch}
                  onChange={this.handleChange}
                  className={branchErr ? " showError" : ""}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Branch is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                >
                  <option value="select">--Select--</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Civil">Civil</option>
                  <option value="CSE">CSE</option>
                  <option value="EE">EE</option>
                  <option value="EEE">EEE</option>
                  <option value="ETC">ETC</option>
                  <option value="IT">IT</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="MME">MME</option>
                  <option value="Production">Production</option>
                </select>
                {branchErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {branchErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your email id.."
                  className={emailErr ? " showError" : ""}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Email Id is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                {emailErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {emailErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                  value={this.state.phone}
                  placeholder="Your phone number.."
                  className={phoneErr ? " showError" : ""}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Phone Number is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                {phoneErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {phoneErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="codingProfile">Coding Profile</label>
                <input
                  type="text"
                  name="codingProfile"
                  value={this.state.codingProfile}
                  onChange={this.handleChange}
                  placeholder="Your codingProfile.."
                  className={codingProfileErr ? " showError" : ""}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Coding Profile is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
                {codingProfileErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {codingProfileErr}
                  </div>
                )}
              </div>
              <p
                className="message"
                style={{ color: `${this.state.msgcolor}`, textAlign: "center" }}
              >
                {this.state.message}
              </p>
              <button className="submit">Submit</button>
              <p className="copy">&copy; 2023 ENIGMA</p>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

export default AdmissionForm;

