import PropTypes from 'prop-types';

const ReembolsarPrestamo = ({ id, reembolsarPrestamo }) => {
  const handleReembolsarPrestamo = () => {
    reembolsarPrestamo(id);
  };

  return (
    <div>
      <h2>Reembolsar Préstamo</h2>
      <button onClick={handleReembolsarPrestamo}>Reembolsar</button>
    </div>
  );
};

ReembolsarPrestamo.propTypes = {
  id: PropTypes.number.isRequired,
  reembolsarPrestamo: PropTypes.func.isRequired
};

export default ReembolsarPrestamo;

