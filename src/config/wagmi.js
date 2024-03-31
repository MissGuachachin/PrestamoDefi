import { createConfig } from "wagmi"
import { getDefaultConfig } from "connectkit"
import { sepolia } from "wagmi/chains"

export const config = createConfig(
  getDefaultConfig({
    
    alchemyId: import.meta.env.ALCHEMY_ID,
    walletConnectProjectId: import.meta.env.WALLETCONNECT_PROJECT_ID,
    appName: "Prestamo Defi",

    chains: [sepolia]
  })
)

export default config