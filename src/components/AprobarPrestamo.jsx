import PropTypes from 'prop-types';

const AprobarPrestamo = ({ prestatario, id, aprobarPrestamo }) => {
  const handleAprobarPrestamo = () => {
    aprobarPrestamo(prestatario, id);
  };

  return (
    <div>
      <h2>Aprobar Préstamo</h2>
      <button onClick={handleAprobarPrestamo}>Aprobar</button>
    </div>
  );
};

AprobarPrestamo.propTypes = {
  prestatario: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  aprobarPrestamo: PropTypes.func.isRequired
};

export default AprobarPrestamo;


