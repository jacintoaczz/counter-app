import PropTypes from "prop-types";

// Componente funcional
const PrimeraApp = ({
  saludo,
  subtitulo = "Mi primera aplicacion con React",
}) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

// Nos aseguramos que se le pase la propiedad del tipo esperado al componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
