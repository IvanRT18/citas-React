import Error from "./Error";
import { useState, useEffect } from "react";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  //Editar usuario
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      //El objeto existe y tiene contenido
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generaID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Revisa si hay algún elemento vacío metiendolos en un arreglo
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      return;
    }

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    //Verifica si agrega a un nuevo paciente o lo edita
    if (paciente.id) {
      //Edita paciente
      objetoPaciente.id = paciente.id; //Igualamos el id del nuevo objeto al ya existente
      const pacientesActualizados = pacientes.map((pacientesDOM) =>
        paciente.id === pacientesDOM.id ? objetoPaciente : pacientesDOM
      );

      setPacientes(pacientesActualizados);

      setPaciente({});
    } else {
      //Agrega nuevo paciente
      objetoPaciente.id = generaID();

      setPacientes([...pacientes, objetoPaciente]);
    }

    setError(false);

    //Agrega el nuevo paciente

    //Reinicia el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className=" mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-green-500 text-lg font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md  rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="mascota-name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>

          <input
            id="mascota-name"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario-name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario-name"
            type="text"
            placeholder="Nombre propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="emailHtml"
            className="block text-gray-700 uppercase font-bold"
          >
            Email de contacto
          </label>
          <input
            id="emailHtml"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            cols="30"
            rows="2"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-500 cursor-pointer transition-colors rounded-md"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};
export default Formulario;
