import React, { useState } from "react";
import AppointmentList from "../component/AppointmentList";
import Doctors from "../component/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";
const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);

  //! Mock yerine api den data çekilse idi=>
  // const getAppointments=async()=>{
  //   try {
  //     const{data}=await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   getAppointments()

  // }, [])

  //   console.log(doctors);
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-4 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
