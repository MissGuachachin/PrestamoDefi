import { useState } from "react";
import { AltaPrestamista, AltaCliente } from "../components"
import { Title } from "../components/ui"

export default function GestionDeUsuarios() {
  const [nuevoPrestamista, setNuevoPrestamista] = useState('');
  const [nuevoCliente, setNuevoCliente] = useState('');

  const handleAltaPrestamista = (nuevoPrestamista) => { 
    console.log("Prestamista dado de alta:", nuevoPrestamista);
    setNuevoPrestamista('');
  };
  
  const handleAltaCliente = (nuevoCliente) => {
    console.log("Cliente dado de alta:", nuevoCliente);
    setNuevoCliente('');
  };
    
    return (
        <>
          <section>
            <Title>Gestión de Usuarios</Title>
          </section>
          <section>
            <div>
              <AltaPrestamista altaPrestamista={handleAltaPrestamista} nuevoPrestamista={nuevoPrestamista} setNuevoPrestamista={setNuevoPrestamista}/>
            </div>
            <div>
            <AltaCliente altaCliente={handleAltaCliente} nuevoCliente={nuevoCliente}/>
            </div>
           </section>
         </>
    )
}