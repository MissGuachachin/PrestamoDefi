import PropTypes from 'prop-types';

const LiquidarGarantia = ({ prestatario, id }) => {
  const handleLiquidarGarantia = () => {
    
    console.log(`Liquidando garantía para ${prestatario} con ID ${id}`);
  };

  return (
    <div>
      <h2>Liquidar Garantía</h2>
      <button onClick={handleLiquidarGarantia}>Liquidar</button>
    </div>
  );
};

LiquidarGarantia.propTypes = {
  prestatario: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default LiquidarGarantia;
