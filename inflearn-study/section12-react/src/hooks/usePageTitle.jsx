import { useEffect } from "react";

const usePageTtile = (title) => {
    // 컴포넌트가 처음 마운트되면 실행되는 것 
    useEffect(() => {
        // 관례상 변수 명에 dome 요소가 저장됨 
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title])
}

export default usePageTtile;