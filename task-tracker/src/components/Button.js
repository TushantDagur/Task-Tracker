import PropTypes from 'prop-types'

const Button = ({color,text, onClick}) => {
  return (
      <button 
        onClick={onClick} 
        style={{backgroundColor : color}} 
        className='btn'
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color : 'teal',
}

Button.prototype = {
    color : PropTypes.color,
    text : PropTypes.string,
    onClick : PropTypes.func.isRequired,
}

export default Button
