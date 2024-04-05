import PropTypes from 'prop-types';
import { Title } from './ui/index';

const ReembolsarPrestamo = ({ id, reembolsarPrestamo }) => {
  const handleReembolsarPrestamo = () => {
    reembolsarPrestamo(id);
  };

  return (
    <div className='flex flex-col bg-blue-200 border rounded-lg shadow p-4 py-6 px-12 gap-3'>
      <Title>Reembolsar Préstamo</Title>
      <button onClick={handleReembolsarPrestamo} className='flex bg-indigo-500 hover:bg-indigo-700
       text-white text-l font-bold py-2 px-5 min-w-20 rounded-lg'>
        Reembolsar
      </button>
    </div>
  );
};

ReembolsarPrestamo.propTypes = {
  id: PropTypes.number.isRequired,
  reembolsarPrestamo: PropTypes.func.isRequired
};

export default ReembolsarPrestamo;

