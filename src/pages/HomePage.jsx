import { useAccount } from "wagmi"
import { LoadingSpinner} from "../components/ui"
import { GestionDeUsuarios } from "../pages"


export default function HomePage() {
  const { isConnected} = useAccount()
  

  return (
      <div className="flex flex-col self-center sm:grid place-items-center px-40 py-16 md-:px-5 gap-y-20">
        {isConnected ? (
        <>
          <GestionDeUsuarios />
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
