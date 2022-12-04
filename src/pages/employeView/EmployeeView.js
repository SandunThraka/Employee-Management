import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


import { organization } from "../employeeCreateAndUpdate/sampleData";
import "./employeeView.css";
function EmployeeView() {
  const [oragnizationDetails, setOrganizationDetails] = useState([]);
  const deactivateEmployee = () => {};
  const editEmployee = () => {};
  return (
    <Container className="mt-5">
      <Form noValidate>
        <Row className="mb-3">
          <Col>
            <h1>Employee List</h1>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <h6>First Name</h6>
          </Col>
          <Col>
            <h6>Last Name</h6>
          </Col>
          <Col>
            <h6>Designation</h6>
          </Col>
          <Col>
            <h6>Active</h6>
          </Col>
          <Col></Col>
        </Row>
        <hr></hr>

        {organization.allEmployeeList.map((orgDetails) => {
          const { firstName, lastName, designationName } = orgDetails;
          return (
            <Row className="mb-2">
              <Col>
                <p>{firstName}</p>
              </Col>
              <Col>
                <p>{lastName}</p>
              </Col>
              <Col>
                <p>{designationName}</p>
              </Col>
              <Col className="d-flex justify-content-center">
                <Col md="12">
                  <Form.Check type="checkbox" id={`default-checkbox`} />
                </Col>
              </Col>
              <Col>
                <Button
                  type="button"
                  className="me-2 edit-btn"
                  onClick={editEmployee}
                >
                  Edit{" "}
                </Button>
                <Button
                  type="button"
                  className="deactivate-btn"
                  onClick={deactivateEmployee}
                >
                  Deactivate
                </Button>
              </Col>
            </Row>
          );
        })}
      </Form>
    </Container>
  );
}

export default EmployeeView;
