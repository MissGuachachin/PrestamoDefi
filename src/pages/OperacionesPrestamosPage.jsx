import { useState } from 'react';
import { DepositarGarantia, SolicitarPrestamo, AprobarPrestamo, ReembolsarPrestamo, LiquidarGarantia, PrestamosCliente } from '../components'

const OperacionesPrestamosPage = () => {
  const [prestatario, setPrestatario] = useState(''); 
  
  const handleSelectPrestatario = (selectedPrestatario) => {
    setPrestatario(selectedPrestatario);
  };

  return (
    <div>
      
      <div>
        <h3>Seleccionar Prestatario:</h3>
        <select onChange={(e) => handleSelectPrestatario(e.target.value)}>
          <option value="">Seleccionar</option>
          {/* Aquí puedes generar dinámicamente opciones para todos los prestatarios */}
          {/* Ejemplo: <option value="direccion_prestatario">Nombre del Prestatario</option> */}
        </select>
      </div>
      {prestatario && (
        <div>
          <h3>Operaciones para Préstamo{prestatario}:</h3>
          <DepositarGarantia prestatario={prestatario} />
          <SolicitarPrestamo prestatario={prestatario} />
          <AprobarPrestamo prestatario={prestatario} />
          <ReembolsarPrestamo prestatario={prestatario} />
          <LiquidarGarantia prestatario={prestatario} />
          <PrestamosCliente prestatario={prestatario} />
        </div>
      )}
    </div>
  );
};

export default OperacionesPrestamosPage;
