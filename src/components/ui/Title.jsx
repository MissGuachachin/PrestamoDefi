import PropTypes from 'prop-types'

export default function Title({ children }) {
    return <h3 className='text-5xl font-bold text-blue-700 py-10 flex justify-center'>{children}</h3>
    
}

Title.propTypes = {
    children: PropTypes.node
}