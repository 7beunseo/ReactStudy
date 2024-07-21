import { useParams } from 'react-router-dom';

const Diary = () => {
    // 객체 형태로 params 로 전달됨 
    const params = useParams();
    console.log(params);

    return <div>{params.id}번 일기입니다!~~</div>
}

export default Diary;