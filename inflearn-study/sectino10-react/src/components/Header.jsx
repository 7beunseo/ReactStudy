import './Header.css'
import { memo } from "react"

// eslint-disable-next-line react-refresh/only-export-components
const Header = () => {
    return <div className="Header">
        <h3>오늘은 😊</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
}

// 최적화하고 싶은 인수를 memo에 넣어주면 됨
// memo를 사용하여 최적화 
// const memoizedHeader = memo(Header); // Header의 props 가 변경되지 않았을 때는 리렌더링하지 않도록 최적화해서 반환해주지 않음 
// export default memoizedHeader;

export default memo(Header);