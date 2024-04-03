import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner'

export default function Button({ type = 'button', onClick, disabled, children, isLoading }) {
    return (
        <button
            type={type}
            className="bg-indigo-500 hover:bg-indigo-700
            text-white text-2xl font-bold py-3 px-10  min-w-40 rounded-lg
            disabled:opacity-75"
            disabled={disabled}
            onClick={onClick}
        >
            <span className='flex items-center gap-2 justify-center'>
                {isLoading && <LoadingSpinner className="h-5 w-5" />}
                {children}
            </span>
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}