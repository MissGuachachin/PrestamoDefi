import { useState } from 'react';
import PropTypes from 'prop-types';

const SolicitarPrestamo = ({ solicitarPrestamo }) => {
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');

  const handleSolicitarPrestamo = () => {
    solicitarPrestamo(monto, plazo);
    setMonto('');
    setPlazo('');
  };

  return (
    <div>
      <h2>Solicitar Préstamo</h2>
      <input
        type="text"
        placeholder="Monto del préstamo"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Plazo en días"
        value={plazo}
        onChange={(e) => setPlazo(e.target.value)}
      />
      <button onClick={handleSolicitarPrestamo}>Solicitar</button>
    </div>
  );
};

SolicitarPrestamo.propTypes = {
  solicitarPrestamo: PropTypes.func.isRequired
};

export default SolicitarPrestamo;