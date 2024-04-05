import PropTypes from 'prop-types';
import { Title } from './ui/index';

const AprobarPrestamo = ({ prestatario, id, aprobarPrestamo }) => {
  const handleAprobarPrestamo = () => {
    aprobarPrestamo(prestatario, id);
  };

  return (
    <div className='flex flex-col bg-blue-200 border rounded-lg shadow p-4 py-6 px-12 gap-3'>
      <Title>Aprobar Préstamo</Title>
      <button onClick={handleAprobarPrestamo} className='flex bg-indigo-500 hover:bg-indigo-700
       text-white text-l font-bold py-2 px-5 min-w-20 rounded-lg'>
        Aprobar
      </button>
    </div>
  );
};

AprobarPrestamo.propTypes = {
  prestatario: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  aprobarPrestamo: PropTypes.func.isRequired
};

export default AprobarPrestamo;


