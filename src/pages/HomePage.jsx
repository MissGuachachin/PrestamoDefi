import { useAccount } from "wagmi"
import { Button, TextInput, Title, LoadingSpinner} from "../components/ui"

export default function HomePage() {
  const { isConnected } = useAccount()
  
  return (
      <div className="flex flex-col  self-center sm:grid place-items-center px-3 py-16 md:px-5 gap-12">
        {isConnected ? (
        <>
          <div>
            <Title>Gestión de Usuarios</Title>
          </div>
          <div>
            <Button>Alta Prestamista</Button>
            <TextInput />
            <Button>Alta Cliente</Button>
            <TextInput />
          </div>
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