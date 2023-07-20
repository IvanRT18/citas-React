// import { useState } from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const items = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(items);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminaPaciente = (pacienteId) => {
    const pacientesNew = pacientes.filter(
      (pacienteOld) => pacienteOld.id !== pacienteId
    );
    setPacientes(pacientesNew);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminaPaciente={eliminaPaciente}
        />
      </div>
    </div>
  );
}

export default App;
