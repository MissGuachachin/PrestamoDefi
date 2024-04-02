import { useAccount } from "wagmi"
import { useState } from "react";
import { Title, LoadingSpinner} from "../components/ui"
import { AltaPrestamista, AltaCliente } from "../components"


export default function HomePage() {
  const { isConnected} = useAccount()
  const [nuevoPrestamista, setNuevoPrestamista] = useState(''); // Agrega useState para el nuevo prestamista
  const [nuevoCliente, setNuevoCliente] = useState('');

  const handleAltaPrestamista = (nuevoPrestamista) => { // Define handleAltaPrestamista para pasar al componente AltaPrestamista
    // Aquí debes implementar la lógica para dar de alta al prestamista
    console.log("Prestamista dado de alta:", nuevoPrestamista);
    setNuevoPrestamista('');
  };
  
  const handleAltaCliente = (nuevoCliente) => {
    console.log("Cliente dado de alta:", nuevoCliente);
    setNuevoCliente('');
  };

  return (
      <div className="flex flex-col self-center sm:grid place-items-center px-40 py-16 md-:px-5 gap-y-20">
        {isConnected ? (
        <>
          <section className='bg-white border-4 border-indigo-300 shadow p-4 px-20 rounded-3xl w-[780px]'>
            <Title>Gestión de Usuarios</Title>
          </section>
          <section className='flex justify justify-between gap-x-10'>
            <div className='flex justify-between bg-white border-2 border-gray-300 shadow p-2 py-5 px-5 rounded-3xl'>
              <AltaPrestamista altaPrestamista={handleAltaPrestamista} nuevoPrestamista={nuevoPrestamista} setNuevoPrestamista={setNuevoPrestamista}/>
            </div>
            <div className='flex justify-between bg-white border-2 border-gray-300 shadow p-2 py-5 px-5 rounded-3xl'>
            <AltaCliente altaCliente={handleAltaCliente} nuevoCliente={nuevoCliente}/>
            </div>
          </section>
        </>
        ) : (
          <>
            <h1 className='text-6xl font-bold text-blue-700 py-10 flex justify-center'>
            Préstamos de Finanzas Descentralizadas (Defi)
            </h1>
            <p className="text-3xl sm:text-3xl py-3">🔒 Conecta a tu Wallet...</p>
            <LoadingSpinner />
          
          </>
       )}
      </div>
       
  )
}
