import React, { useState, useEffect } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import ProfilePic from "./profilePic.png";
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import {
  allCity,
  allCountry,
  allDepartment,
  allDesignation,
  allGender,
  allNationality,
  allTitle,
} from "./sampleData";
function EmployeeCreateAndUpdate() {
  const [validated, setValidated] = useState(false);
  const location = useLocation();
  const [pageType, setPageType] = useState("");
  //
  // const {
  //   activeTitles,
  //   activeCity,
  //   activeCountry,
  //   activeDepartment,
  //   activeDesignation,
  //   activeGender,
  //   activeNationality,
  // } = useFetch();
  const current = new Date();
  const [form, setForm] = useState({
    clientId: 1,
    orgId: 1,
    userId: 1,
    bpartnerId: 0,
    isActive: true,
    firstName: "Kamal",
    lastName: "Silva",
    titleId: 5,
    genderId: 1,
    nicNo: "801234567V",
    dateOfBirth: "1980-05-10",
    contactNumber: "0777456512",
    email: "kamal@gmail.com",
    designationId: 4,
    nationalityId: 1,
    countryId: 3,
    address: "18, Galle Road, Colombo 5",
    cityId: 6,
    profilePicture: "", //Base64 file
    isProfilePictureChange: true,
    profilePictureNameExtension: ".png",
    description: "Test employee",
    remark: "Any Comment",
  });
  // const [error, setError] = useState({})
  useEffect(() => {
    // setPageType(location.pathname.toString().split("/")[-1]);
  }, []);

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    const inForm = e.currentTarget;
    if (inForm.checkValidity() === false) {
      setValidated(true);
    } else {
      axios
        .post("http://localhost:3001/api/makePayment", form)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Request successfully sent!",
            showConfirmButton: false,
            timer: 2000,
          });
          setForm({});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      setValidated(false);
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "amount") {
      value = Number(value);
    }
    setForm({
      ...form,
      ["paymentId"]: `PAYID${Math.floor(Math.random() * 10000 + 1)}`,
      [name]: value,
    });
  };

  const fileUpload = () => {
    document.getElementById("id_input_fm_13_profile-pic").click();
  };

  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/api/pickupRequest")
    //   .then(function (response) {
    //     const actualData = response.data.data.filter(
    //       (oneRequest) => oneRequest["payment"] == null
    //     );
    //     setForm({ ...form, requestNo: actualData[0].requestNo });
    //     console.log(response.data.data, actualData);
    //     //setBinRequests(actualData);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
    // setForm({});
    // setValidated(false);
  }, []);
  return (
    <div className="row  mb-5 ms-5 rounded-3 m-3 w-100">
      <div className="card p-4 form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Col>
              <h1>Create Employee</h1>
            </Col>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>First Name </Form.Label>{" "}
                <Form.Control
                  required
                  id="id_input_fm_1_first_name"
                  type="text"
                  placeholder="Enter First Name"
                  value={form.amount}
                  name="fm_1_first_name"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Last Name </Form.Label>{" "}
                <Form.Control
                  required
                  id="id_input_fm_2_last_name"
                  name="fm_2_last_name"
                  type="text"
                  placeholder="Enter Last Name"
                  value={form.amount}
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Title </Form.Label>{" "}
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  {allTitle.map((oneTitle) => {
                    return (
                      <option value={oneTitle.titleId}>{oneTitle.name}</option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Gender </Form.Label>{" "}
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>

                  {allGender.map((oneGender) => {
                    return (
                      <option value={oneGender.titleId}>
                        {oneGender.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>
                  NIC <red>*</red>
                </Form.Label>{" "}
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter NIC Number"
                  value={form.amount}
                  id="id_input_fm_3_nic"
                  name="fm_3_nic"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Date of Birth </Form.Label>{" "}
                <Form.Control
                  required
                  type="text"
                  placeholder="1990/09/12"
                  value={form.amount}
                  id="id_input_fm_4_dob"
                  name="fm_4_dob"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Contact Number </Form.Label>{" "}
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Contact Number"
                  value={form.amount}
                  id="id_input_fm_5_contact_number"
                  name="fm_5_contact_number"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Email</Form.Label>{" "}
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter an Email"
                  value={form.amount}
                  id="id_input_fm_6_email"
                  name="fm_6_email"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Department </Form.Label>{" "}
                <Form.Select
                  id="id_input_fm_7_department"
                  name="fm_7_department"
                  aria-label="Default select example"
                >
                  <option>--Select--</option>

                  {allDepartment.map((oneDepartment) => {
                    return (
                      <option value={oneDepartment.departmentId}>
                        {oneDepartment.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Designation</Form.Label>{" "}
                <Form.Select
                  id="id_input_fm_8_designation"
                  name="fm_8_designation"
                  aria-label="Default select example"
                >
                  <option>--Select--</option>
                  {allDesignation.map((oneDesignation) => {
                    return (
                      <option value={oneDesignation.designationId}>
                        {oneDesignation.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Nationality</Form.Label>{" "}
                <Form.Select
                  id="id_input_fm_9_nationality"
                  name="fm_9_designationt"
                  aria-label="Default select example"
                >
                  <option>--Select--</option>
                  {allNationality.map((oneNationality) => {
                    return (
                      <option value={oneNationality.nationalityId}>
                        {oneNationality.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Address </Form.Label>{" "}
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Address"
                  value={form.amount}
                  id="id_input_fm_10_address"
                  name="fm_10_address"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Country</Form.Label>{" "}
                <Form.Select
                  id="id_input_fm_11_country"
                  name="fm_11_country"
                  aria-label="Default select example"
                >
                  <option>--Select--</option>
                  {allCountry.map((oneCountry) => {
                    return (
                      <option value={oneCountry.countryId}>
                        {oneCountry.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>City</Form.Label>{" "}
                <Form.Select
                  id="id_input_fm_12_city"
                  name="fm_12_city"
                  aria-label="Default select example"
                >
                  <option>--Select--</option>
                  {allCity.map((oneCity) => {
                    return (
                      <option value={oneCity.countryId}>{oneCity.name}</option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12" className="d-block">
                <Form.Label>Profile Picture</Form.Label>{" "}
                <Button
                  type="button"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    minHeight: "10px",
                  }}
                  onClick={fileUpload}
                >
                  <img src={ProfilePic} alt="profile" />
                </Button>
                <Form.Control
                  required
                  id="id_input_fm_13_profile-pic"
                  name="fm_13_profile-pic"
                  type="file"
                  style={{ display: "none" }}
                  placeholder="Enter Address"
                  value={form.amount}
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              md="8"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Description</Form.Label>{" "}
                <Form.Control
                  as="textarea"
                  id="id_input_fm_14_description"
                  name="fm_14_description"
                  rows={5}
                  value={form.note}
                  style={{ resize: "none" }}
                  placeholder="Enter Description"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Label>Remarks</Form.Label>{" "}
                <Form.Control
                  as="textarea"
                  id="id_input_fm_15_Remarks"
                  name="fm_15_Remarks"
                  rows={5}
                  value={form.note}
                  style={{ resize: "none" }}
                  placeholder="Enter Remarks"
                  onChange={handleInput}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12">
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox`}
                  label={`Active`}
                />
              </Col>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom01"
              className="d-flex"
            >
              <Col md="12" className="d-flex justify-content-end">
                {/* <Button>Reset</Button> */}
                <Button
                  type="submit"
                  style={{
                    color: "#ffffff",
                    marginRight: "1.25%",
                    width: "100px",
                  }}
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  className="btn-warning"
                  style={{
                    color: "#ffffff",
                    marginRight: "0%",
                    width: "100px",
                  }}
                >
                  Reset
                </Button>
              </Col>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default EmployeeCreateAndUpdate;
