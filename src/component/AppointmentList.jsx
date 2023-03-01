import { Col, Container, Row } from "react-bootstrap";

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };
  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id == id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">Appointment List</h3>
      {!appointments.length && <img src="./img/appointment.jpg" width="50%" />}
      {appointments.map((item) => {
        const { patient, id, day, consulted, doctor } = item;
        return (
          <div
            key={id}
            className={consulted ? "appointments consulted" : "appointments"}
            onDoubleClick={() => handleDoubleClick(id)}
          >
            <Row>
              <Col>
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col>
                <h6>{new Date(day).toLocaleDateString()}</h6>
                <h6>{new Date(day).toLocaleTimeString()}</h6>
              </Col>
              <Col
                onClick={handleDelete}
                className="d-flex justify-content-center align-items-center "
              >
                ❌
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default AppointmentList;
