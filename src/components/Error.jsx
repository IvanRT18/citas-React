const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-600 text-white text-center font-bold p-3 rounded-lg mb-5">
      <p>{mensaje}</p>
    </div>
  );
};
export default Error;
