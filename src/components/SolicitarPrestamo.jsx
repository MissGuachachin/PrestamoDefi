import { useState } from 'react';
import PropTypes from 'prop-types';
import { Title } from './ui/index';

const SolicitarPrestamo = ({ solicitarPrestamo }) => {
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');

  const handleSolicitarPrestamo = () => {
    solicitarPrestamo(monto, plazo);
    setMonto('');
    setPlazo('');
  };

  return (
    <div className='flex flex-col bg-blue-200 border rounded-lg shadow p-6 py-16 px-12 gap-6'>
      <Title>Solicitar Préstamo</Title>
      <input
        type="text"
        placeholder="Monto del préstamo"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        className='border border-gray-300 rounded-md w-full px-3 py-2 outline-none focus:ring-2
        focus:ring-indigo-500 focus:border-transparent transition duration-360 ease-in-out'
      />
      <input
        type="text"
        placeholder="Plazo en días"
        value={plazo}
        onChange={(e) => setPlazo(e.target.value)}
        className='border border-gray-300 rounded-md w-full px-3 py-2 outline-none focus:ring-2
        focus:ring-indigo-500 focus:border-transparent transition duration-360 ease-in-out'
      />
      <button onClick={handleSolicitarPrestamo} className='flex bg-indigo-500 hover:bg-indigo-700
       text-white text-l font-bold py-2 px-5 min-w-20 rounded-lg'>
        Solicitar
      </button>
    </div>
  );
};

SolicitarPrestamo.propTypes = {
  solicitarPrestamo: PropTypes.func.isRequired
};

export default SolicitarPrestamo;