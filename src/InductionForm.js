import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AdmissionForm.css";
import IconRocketLaunch from "./IconRocketLaunch";
import Loader from "./Loader";

const AdmissionForm2 = () => {

  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [regdNo, setRegdNo] = useState("");
  // const [year, setYear] = useState("");
  // const [phone, setPhone] = useState("");
  // const [confirmphone, setConfirmphone] = useState("");
  // const [branch, setBranch] = useState("");
  // const [codingProfile, setCodingProfile] = useState("");
  const [message, setMessage] = useState("");
  const [msgcolor, setMsgcolor] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setResponse(true)

    let target = e.target;
    let formData = {};
    for (let i = 0; i < target.length - 1; i++) {
      formData[target.elements[i].getAttribute("name")] =
        target.elements[i].value;
    }
    console.log(formData)

    try {
      const getResponse = await fetch(
        "https://enigma-induction-2023.onrender.com/api/induction/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await getResponse.json();
      if (getResponse.ok) {
        setResponse(false);
        setMsgcolor("#1bec1b")
        // useNavigate('/thanks');
        window.location.replace('/thanks');

      } else {
        let msg = data.error.message;
        setResponse(false);
        setMessage(msg);
        setMsgcolor("red");
      }

      //   setTimeout(() => {
      //     this.setState(this.initialState);
      //   }, 5000);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <div className="formDiv">
        <div className="logo"><img src="enigma_contained.png" alt="" /></div>
        {/* <div className="heading">Enigma Induction 2023</div> */}
        <h1 className='' style={{color: "#45ed4e",
    fontSize: "30px", fontWeight: "500", textAlign: "center", marginBottom: "20px", fontFamily: "Source Code Pro"}}>Enigma Inductino 2023</h1>
        <div className="form_wrap">
          <div className="form_comp">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  // value={fullname}
                  // onChange={handleChange}
                  placeholder="Your full name.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Full Name is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div>
                <label htmlFor="regdno">Registration No</label>
                <input
                  type="number"
                  name="regdNo"
                  // value={regdNo}
                  // onChange={this.handleChange}
                  placeholder="Your registration number.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Registration No is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <select
                  name="year"
                  // onChange={this.handleChange}
                  className=""
                  // value={year}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Select your current year")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                >
                  <option value="" disable="true" hidden>--Select--</option>
                  <option value={1}>1st</option>
                  <option value={2}>2nd</option>
                </select>
              </div>
              <div>
                <label htmlFor="branch">Branch</label>
                <select
                  name="branch"
                  // value={branch}
                  // onChange={this.handleChange}
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Select your branch")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                >
                  <option value="" disable="true" hidden>--Select--</option>
                  <option value="CHE">Chemical Engineering</option>
                  <option value="CE">Civil Engineering</option>
                  <option value="CSE">Computer Science & Engineering</option>
                  <option value="EE">Electrical Engineering</option>
                  <option value="EEE">Electrical & Electronics Engineering</option>
                  <option value="ETC">Electronics & Telecomm. Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="MME">Metallurgical & Materials Engineering</option>
                  <option value="PE">Production Engineering</option>
                  <option value="B.Arch">B.Arch</option>
                  <option value="MCA">MCA</option>
                  <option value="MSC">MSC</option>
                </select>
              </div>
              <div>
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  name="email"
                  // value={email}
                  // onChange={this.handleChange}
                  placeholder="Your email id.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Email Id is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  // onChange={this.handleChange}
                  // value={phone}
                  placeholder="Your phone number.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Phone Number is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmphone">Confirm Phone Number</label>
                <input
                  type="number"
                  name="confirmphone"
                  // onChange={this.handleChange}
                  // value={confirmphone}
                  placeholder="Confirm your phone number.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Confirm phone Number is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div>
                <label htmlFor="domain">Domain</label>
                <select
                  name="domain"
                  // onChange={this.handleChange}
                  className=""
                  // value={domain}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Select a domain")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                >
                  <option value="" disable="true" hidden>--Select--</option>
                  <option value="Web">Web Development</option>
                  <option value="App">App Development</option>
                  <option value="Game">Game Development</option>
                  <option value="AI/ML">Artificial Intelligence/Machine Learning</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="AR/VR">AR/VR</option>
                  <option value="CP">Competitive Programming</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Graphics Designing">Graphics Designing</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Content Writing">Content Writing</option>

                </select>
              </div>
              <div>
                <label htmlFor="githubProfile">Github Profile</label>
                <input
                  type="text"
                  name="githubProfile"
                  // value={codingProfile}
                  // onChange={this.handleChange}
                  placeholder="Your Github Profile link.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Github Profile Link is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>
              <div>
                <label htmlFor="codingProfile">Coding Profile</label>
                <input
                  type="text"
                  name="codingProfile"
                  // value={codingProfile}
                  // onChange={this.handleChange}
                  placeholder="HackerRank/HackerEarth profile link.."
                  className=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Coding Profile Link is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                />
              </div>

              <p
                className="message"
                style={{ color: `${msgcolor}`, textAlign: "center" }}
              >
                {message}
              </p>

              {!response && <button className="submit">Submit</button>}
              {response && <button className="submit" disabled>{(response) && <div className="loader"><Loader /></div>}</button>}
            </form>

          </div>
        </div>
        <p className="copy">Enigma VSSUT &copy; 2023 </p>
      </div>
    </>
  )
}

export default AdmissionForm2