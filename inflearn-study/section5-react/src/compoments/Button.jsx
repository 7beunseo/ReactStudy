const Button = ({ text, color, children }) => {
    // console.log(props);

    // 이벤트 핸들러를 함수로 만듦
    // 이벤트 객체를 전달함 
    const onClickButton = (e) => {
        console.log(e)
        console.log(text);
    }
    return (
        <button 
            // 이벤트 핸들러 
            onClick={onClickButton}
            style={{color: color}}
        >
                {text} - {color.toUpperCase()}
                {children}
        </button>
    );
};

// props가 없을 경우 처리
Button.defaultProps = {
    color: "black"
}

export default Button;