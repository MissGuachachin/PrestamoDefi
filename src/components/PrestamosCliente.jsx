import { useEffect, useState } from 'react';
//import { obtenerPrestamosPorPrestatario } from '../utils/PrestamoDefi';
import PropTypes from 'prop-types';

const PrestamosCliente = ({ prestatario }) => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    async function fetchPrestamos() {
      const prestamos = await obtenerPrestamosPorPrestatario(prestatario);
      setPrestamos(prestamos);
    }

    fetchPrestamos();
  }, [prestatario]);

  return (
    <div>
      <h2>Prestamos del Cliente</h2>
      <ul>
        {prestamos.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

PrestamosCliente.propTypes = {
  prestatario: PropTypes.string.isRequired
};

export default PrestamosCliente;

