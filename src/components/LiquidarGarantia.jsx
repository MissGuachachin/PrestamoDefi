import PropTypes from 'prop-types';
import { Title } from './ui/index';

const LiquidarGarantia = ({ prestatario, id }) => {
  const handleLiquidarGarantia = () => {
    
    console.log(`Liquidando garantía para ${prestatario} con ID ${id}`);
  };

  return (
    <div className='flex flex-col bg-blue-200 border rounded-lg shadow p-4 py-6 px-12 gap-6'>
      <Title>Liquidar Garantía</Title>
      <button onClick={handleLiquidarGarantia} className='flex bg-indigo-500 hover:bg-indigo-700
       text-white text-l font-bold py-2 px-5 min-w-20 rounded-lg'>
        Liquidar
      </button>
    </div>
  );
};

LiquidarGarantia.propTypes = {
  prestatario: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default LiquidarGarantia;
