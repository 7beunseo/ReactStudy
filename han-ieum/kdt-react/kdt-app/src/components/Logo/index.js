import logo from './logo.svg';
import PropTypes from 'prop-types'

// props = 100 디폴트 지정할 수도 있음 
function Logo(props) {
    return <img src={logo} 
    className="App-logo" 
    alt="logo" 
    style={{ width: props.size, height: props.size }}
    />
}

// 기본값 할당 
Logo.defaultProps = {
    size: 200, 
}

// size는 number -> type 제한 
Logo.propTypes = {
    size: PropTypes.number
}

export default Logo;