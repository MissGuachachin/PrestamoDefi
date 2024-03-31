import { Header, Footer }from "../../index"
import PropTypes from "prop-types"

export default function AppLayout({children}) {
    return (
        <>
            <Header />
            <main className='min-h-[40vh]'>{children}</main>
            <Footer />
        </>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}