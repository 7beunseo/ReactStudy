import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from "../hooks/useDiary";
import getStringedDate from '../util/get-stringed-date';

const Diary = () => {
    // 객체 형태로 params 로 전달됨 
    const params = useParams();
    const nav = useNavigate();

    const curDiaryItem = useDiary(params.id); // 일기를 받음 
    if(!curDiaryItem) {{
        return <div>데이터 로딩 중</div>
    }}

    const { createdDate, emotionId, content } = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header 
                title={`${title} 기록`}
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
                rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />}
                />

                <Viewer emotionId={emotionId} content={content} />
        </div>
    )
}

export default Diary;