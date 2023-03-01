import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AddModal } from "./AddModal";
import { useState } from "react";

const Doctors = ({ doctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDoctorName, setSelectedDoctorName] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleClick = (drName) => {
    setShow(true);
    setSelectedDoctorName(drName);
  };
  console.log(selectedDoctorName);
  return (
    <Container className="p-2">
      <h3 className="display-3 " style={{ color: "purple" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
            <img
              src={dr.img}
              alt={dr.name}
              className="img-thumbnail doctor-img"
              onClick={() => handleClick(dr.name)}
            />
            <h5>{dr.name}</h5>
            <h6>{dr.dep}</h6>
          </Col>
        ))}
      </Row>
      {/* <AddModal show={show} handleClose={handleClose}  /> */}
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        drName={selectedDoctorName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
