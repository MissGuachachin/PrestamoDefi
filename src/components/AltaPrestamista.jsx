import { useState } from 'react';
import PropTypes from 'prop-types';

const AltaPrestamista = ({ altaPrestamista }) => {
  const [nuevoPrestamista, setNuevoPrestamista] = useState('');

  const handleAltaPrestamista = () => {
    altaPrestamista(nuevoPrestamista);
    setNuevoPrestamista('');
  };

  return (
    <div className='flex flex-col p-4 py-2 px-12 gap-3'>
      <h2 className='font-sans text-2xl items-stretch font-bold text-indigo-600 flex flex-col'>
        Alta de Prestamista
      </h2>
      <input
        type="text"
        placeholder="Address"
        value={nuevoPrestamista}
        onChange={(e) => setNuevoPrestamista(e.target.value)}
        className='border border-gray-200 rounded-lg p-2 py-2 outline-none focus:ring-2
            focus:ring-indigo-500 focus:border-transparent transition duration-360 ease-in-out'
      />

      <button onClick={handleAltaPrestamista} className='flex items-center bg-indigo-500 hover:bg-indigo-700 text-white text-l font-bold py-2 px-5  min-w-20 rounded-lg disabled:cursor-not-allowed'>
        Dar de Alta
      </button>
    </div>
  );
};

AltaPrestamista.propTypes = {
  altaPrestamista: PropTypes.func.isRequired
};

export default AltaPrestamista




