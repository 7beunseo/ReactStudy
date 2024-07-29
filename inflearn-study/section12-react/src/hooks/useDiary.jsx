import { useContext, useState, useEffect } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom"

// 커스텀 훅을 만듦 - use로 시작하는 커스텀 훅 
// id를 받아서 id에 해당하는 데이터를 가져와 curDairyItem에 저장함 
const useDiary = (id) => {
    // 전체 일기 데이터를 불러옴 
    const data = useContext(DiaryStateContext)
    // nav -> useEffect 사용
    const [curDiaryItem, setCurDairyItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));
        console.log(currentDiaryItem)
        if(!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            // eidt 컴포넌트 호출 후 즉시 호출됨
            // return 전임 (마운트 전) => navigate가 동작할 수 없음 
            // useEffect 사용 -> 컴포넌트가 렌더링된 후 navigate를 실행하라는 뜻 
            // main.jsx의 BroserRouter가 제공해주는 기능이지만 렌더링 전에 동작할 수는 없다 
            nav("/", {replace: true})
        }

        setCurDairyItem(currentDiaryItem);

    }, [id, data]);

    return curDiaryItem;
}

export default useDiary;