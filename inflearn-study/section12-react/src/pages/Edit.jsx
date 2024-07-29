import { useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate } = useContext(DiaryDispatchContext)

    // 전체 일기 데이터를 불러옴 
    const data = useContext(DiaryStateContext)

    // nav -> useEffect 사용
    const [curDiaryItem, setCurDairyItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
        console.log(currentDiaryItem)
        if(!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            // eidt 컴포넌트 호출 후 즉시 호출됨
            // return 전임 (마운트 전) => navigate가 동작할 수 없음 
            // useEffect 사용 -> 컴포넌트가 렌더링된 후 navigate를 실행하라는 뜻 
            // main.jsx의 BroserRouter가 제공해주는 기능이지만 렌더링 전에 동작할 수는 없다 
            nav("/", {replace: true})
        }

        return setCurDairyItem(currentDiaryItem);

    }, [params.id, data]) // 컴포넌트가 마운트 된 이후, data state가 바뀐 경우 수정하려고 하는 데이터의 id를 꺼내서 curDiaryItem에 보관함 

    const onClickDelete = () => {
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            // 일기 삭제 로직 
            onDelete(params.id);
            nav("/", {replace: true})       
        }
    }

    const onSubmit = (input) => { 
        if(window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        }
        nav("/", {replace: true})
        
    }

    return <div>
        <Header 
            title={"일기 수정하기"}
            leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
            rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
        />

        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
}

export default Edit;