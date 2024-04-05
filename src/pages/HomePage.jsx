import { useAccount, } from "wagmi"
import { LoadingSpinner } from "../components/ui"
import { GestionDeUsuarios, OperacionesPrestamosPage } from "./index"


export default function HomePage() {
  const { isConnected } = useAccount()
  
  return (
      <div className="flex flex-col self-center sm:grid place-items-center px-40 py-16 md-:px-5 gap-20">
        {isConnected ? (
        <>       
          <section className='flex flex-col xl:flex-row py-6 px-10 gap-20'>
            <div className='p-6 bg-blue-200 border shadow rounded-lg w-[500px] sm:w-[700px]'>
              {/* Renderizar el componente GestionDeUsuarios */}
              <GestionDeUsuarios>Gestión de Usuarios</GestionDeUsuarios>
            </div>
            <div className='p-6 bg-blue-200 border shadow rounded-lg w-[500px] sm:w-[700px]'>
              {/* Renderizar el componente OperacionesPrestamosPage */}
              <OperacionesPrestamosPage />
            </div>
          </section>
        </>
        ) : (
          <>
            <h1 className='text-6xl font-bold sm:text-5xl md:text-6xl text-blue-700 py-10
              flex justify-center text-transparente bg-clip-text'>
              Préstamos de Finanzas Descentralizadas (Defi)
            </h1>
            <p className="text-3xl sm:text-3xl py-3">🔒 Conecta tu Wallet para comenzar...</p>
            <LoadingSpinner />
          </>
       )}
      </div>
  )
}