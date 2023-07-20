// import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminaPaciente }) => {
  // useEffect(() => {
  //   if (pacientes.length > 0) {
  //     console.log("Nuevo paciente agregado");
  //   }
  // }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">
            Administra tus {""}
            <span className="text-green-500 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminaPaciente={eliminaPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">
            Comienza agregando pacientes {""}
            <span className="text-green-500 font-bold">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  );
};
export default ListadoPacientes;
