import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
    // 달의 시작 시간 > timestamp 형식으로 
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();

    // 달의 마지막 시간 
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0, 23, 59, 59 // 이전 달의 마지막 날짜로 설정할 수 있음 
    ).getTime();

    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
}

const Home = () => {
    // createContext로 부터 전달한 data 가져옴
    // context가 공급하는 내용을 data라는 변수로 가져옴
    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    // 날짜를 한 달 앞으로 이동 
    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };
    // 날짜를 한 달 뒤로 이동 
    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header 
            title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
            leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
            rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
            />
            <DiaryList data={monthlyData}/>
        </div>
    ) 
}

export default Home;