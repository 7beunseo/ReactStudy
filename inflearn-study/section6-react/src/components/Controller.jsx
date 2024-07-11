const Controller = ({ onClickButton }) => {
    return (
        <div>
            {/* onClick={onClickButton}가 아닌 화살표 함수에서 onClickButton을 호출해야 인수를 전달할 수 있다 */}
            <button onClick={(() => {
                onClickButton (-1);
            })}>-1</button>

            <button onClick={(() => {
                onClickButton (-10);
            })}>-10</button>

            <button onClick={(() => {
                onClickButton (-100);
            })}>-100</button>

            <button onClick={(() => {
                onClickButton (+100);
            })}>+100</button>

            <button onClick={(() => {
                onClickButton (+10);
            })}>+10</button>

            <button onClick={(() => {
                onClickButton (+1);
            })}>+1</button>
        </div>
    )
}

export default Controller;