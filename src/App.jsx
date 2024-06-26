import { ConnectKitProvider } from "connectkit"
import { WagmiConfig } from "wagmi"
import { AppLayout } from './components/ui/layouts'
import { config } from './config/wagmi'
import { HomePage } from "./pages"

function App() {
  
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <AppLayout>
          <HomePage />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App