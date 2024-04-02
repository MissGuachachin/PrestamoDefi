import { useState } from 'react';
import PropTypes from 'prop-types';

export const AltaCliente = ({ altaCliente }) => {
  const [nuevoCliente, setNuevoCliente] = useState('');

  const handleAltaCliente = () => {
    altaCliente(nuevoCliente);
    setNuevoCliente('');
  };

  return (
    <div className='flex flex-col p-6 py-2 px-12'>
      <h2 className='font-sans text-2xl items-stretch font-bold text-indigo-600 flex flex-col'>
        Alta de Cliente
      </h2>
      <input
        type="text"
        placeholder="Address"
        value={nuevoCliente}
        onChange={(e) => setNuevoCliente(e.target.value)}
        className='border border-gray-300 rounded-md w-full px-3 py-2 outline-none focus:ring-2
        focus:ring-indigo-500 focus:border-transparent transition duration-360 ease-in-out'
      />
      <button onClick={handleAltaCliente} className='flex items-center bg-indigo-500 hover:bg-indigo-700 text-white text-l font-bold py-2 px-5 min-w-20 rounded-lg disabled:cursor-not-allowed'>
        Dar de Alta
      </button>
    </div>
  );
};

AltaCliente.propTypes = {
  altaCliente: PropTypes.func.isRequired
}

export default AltaCliente