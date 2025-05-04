import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentFormResult from "./components/AppointmentFormResult";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<AppointmentForm></AppointmentForm>}></Route>
      <Route path="/appointment_form_result" element={<AppointmentFormResult></AppointmentFormResult>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;
