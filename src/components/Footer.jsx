export default function Footer() {
    return (
        <footer className="border-t py-4 flex justify-center text-sm sm:text-base bg-gray-300">
            <p>Derecho de autor <span className="text-red-700">&copy;</span> {new Date().getFullYear()} BlockMaker Academy</p>
        </footer>
    )
}