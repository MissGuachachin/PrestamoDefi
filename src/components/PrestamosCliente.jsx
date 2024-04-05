import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi'; // Importa useAccount desde la biblioteca de Wagmi
import { ethers } from 'ethers';
import PropTypes from 'prop-types';
import { Title } from './ui/index';

const PrestamosCliente = () => {
  const account = useAccount();

  const [web3, setWeb3] = useState(null);
  const [prestamos, setPrestamos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function conectarWeb3() {
      // Verifica si la cuenta del usuario está disponible
      if (account) {
        // Crea una instancia de Web3Provider utilizando la cuenta del usuario
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setWeb3(provider);
      }
    }

    conectarWeb3();
  }, [account]);

  useEffect(() => {
    async function obtenerPrestamos() {
      if (web3) {
        try {
          setLoading(true);
          const contractAddress = 'dirección_del_contrato_en_Wagmi'; // Dirección del contrato en Wagmi
          const contractABI = []; // ABI del contrato

          const contract = new ethers.Contract(contractAddress, contractABI, web3);
          const prestamosIds = await contract.obtenerPrestamosPorPrestatario(account);
          setPrestamos(prestamosIds);
        } catch (error) {
          console.error('Error al obtener los préstamos', error);
        } finally {
          setLoading(false);
        }
      }
    }

    if (web3 && account) {
      obtenerPrestamos();
    }
  }, [web3, account]);

  return (
    <div className='flex flex-col bg-blue-200 border rounded-lg shadow p-4 py-6 px-12 gap-3'>
      <Title>Prestamos del Cliente</Title>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {prestamos.map((prestamo, index) => (
            <li key={index}>ID del préstamo: {prestamo.id}, Monto: {prestamo.monto}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

PrestamosCliente.propTypes = {
    prestatario: PropTypes.string.isRequired
  };

export default PrestamosCliente;
