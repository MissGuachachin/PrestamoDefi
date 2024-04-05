import { useState } from 'react';
import PropTypes from 'prop-types';
import { Title } from './ui/index';

const DepositarGarantia = ({ depositarGarantia }) => {
  const [cantidad, setCantidad] = useState('');

  const handleDepositarGarantia = () => {
    depositarGarantia(cantidad);
    setCantidad('');
  };

  return (
    <div className='flex flex-col bg-blue-200 border rounded-lg shadow p-6 py-16 px-12 gap-6'>
      <Title>Depositar Garantía</Title>
      <input
        type="text"
        placeholder="Cantidad a depositar"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        className='border border-gray-300 rounded-md w-full px-3 py-2 outline-none focus:ring-2
        focus:ring-indigo-500 focus:border-transparent transition duration-360 ease-in-out'
      />
      <button onClick={handleDepositarGarantia} className='flex bg-indigo-500 hover:bg-indigo-700
       text-white text-l font-bold py-2 px-5 min-w-20 rounded-lg'>
        Depositar
      </button>
    </div>
  );
};

DepositarGarantia.propTypes = {
  depositarGarantia: PropTypes.func.isRequired
};

export default DepositarGarantia;
