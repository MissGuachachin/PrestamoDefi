import { useState } from 'react';
import PropTypes from 'prop-types';

const DepositarGarantia = ({ depositarGarantia }) => {
  const [cantidad, setCantidad] = useState('');

  const handleDepositarGarantia = () => {
    depositarGarantia(cantidad);
    setCantidad('');
  };

  return (
    <div>
      <h2>Depositar Garantía</h2>
      <input
        type="text"
        placeholder="Cantidad a depositar"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button onClick={handleDepositarGarantia}>Depositar</button>
    </div>
  );
};

DepositarGarantia.propTypes = {
  depositarGarantia: PropTypes.func.isRequired
};

export default DepositarGarantia;
