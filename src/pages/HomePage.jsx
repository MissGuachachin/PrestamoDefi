import { useAccount } from "wagmi"
import { Button, LoadingSpinner } from "../components/ui"


export default function HomePage() {
  const { isConnected } = useAccount()

  return (
      <div className="flex flex-col self-center sm:grid place-items-center px-40 py-16 md-:px-5 gap-y-20">
        {isConnected ? (
        <>
          <section className='flex flex-col self-center py-20 px-20 gap-12'>
            <div className='p-10 border shadow rounded-lg text-lg w-[690px] sm:w-[720px]'>
              <Button>Gestión de Usuarios</Button>
            </div>
            <div className='p-10 border shadow rounded-lg text-lg w-[690px] sm:w-[720px]'>
              <Button>OperacionesPrestamosPage</Button>
            </div>
          </section>
        </>
        ) : (
          <>
            <h1 className='text-6xl font-bold text-blue-700 py-10 flex justify-center'>
            Préstamos de Finanzas Descentralizadas (Defi)
            </h1>
            <p className="text-3xl sm:text-3xl py-3">🔒 Conecta tu Wallet para comenzar...</p>
            <LoadingSpinner />
          </>
       )}
      </div>
  )
}