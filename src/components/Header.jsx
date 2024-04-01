import { ConnectKitButton } from "connectkit"

export default function Header() {
    return (
        <header className="bg-black px-20 flex justify-between items-center">
            <img src="/EthDefiLogo.jpeg" alt="defi-logo" width={400} />
            <ConnectKitButton showBalance />
        </header>
    );
}
