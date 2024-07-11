const Button = ({ text, color, children }) => {
    // console.log(props);
    return <button style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>;
};

// props가 없을 경우 처리
Button.defaultProps = {
    color: "black"
}

export default Button;