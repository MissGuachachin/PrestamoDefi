import { useState } from 'react';
import { Title } from "../components/ui"
import { 
  DepositarGarantia,
  SolicitarPrestamo,
  AprobarPrestamo,
  ReembolsarPrestamo,
  LiquidarGarantia,
  PrestamosCliente
 } from '../components'


const OperacionesPrestamosPage = () => {
  const [prestatario, setPrestatario] = useState(''); 
  
  const handleSelectPrestatario = (selectedPrestatario) => {
    setPrestatario(selectedPrestatario);
  };

  return (
    <section>
      <Title>Operaciones para Préstamo{prestatario}:</Title>
        <div>
          <div className='px-3'>
            <h3 className='font-sans text-2xl items-stretch font-bold text-indigo-600 py-3 flex flex-col'>
              Seleccionar Prestatario:
            </h3>
              <select className='py-2 px-40 rounded-lg text-gray-400' onChange={(e) => handleSelectPrestatario(e.target.value)}>
              <option>Seleccionar</option>
              {/* Aquí puedes generar dinámicamente opciones para todos los prestatarios */}
              {/* Ejemplo: <option value="direccion_prestatario">Nombre del Prestatario</option> */}
              </select>
          </div>
              {prestatario && (
          <div>
            <DepositarGarantia prestatario={prestatario} />
            <SolicitarPrestamo prestatario={prestatario} />
            <AprobarPrestamo prestatario={prestatario} />
            <ReembolsarPrestamo prestatario={prestatario} />
            <LiquidarGarantia prestatario={prestatario} />
            <PrestamosCliente prestatario={prestatario} />
          </div>
              )}
        </div>
    </section>
  );
};

export default OperacionesPrestamosPage