import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest"); // 초기값을 최신순으로 설정

    const onChnageSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedDate = () => {
        return data.toSorted((a, b) => {
            if(sortType === "oldest") 
                return Number(a.createdDate) - Number(b.createdDate);
            else 
                return Number(b.createdDate) - Number(a.createdDate);
        });
    }

    const sortedData = getSortedDate();

    return (
        <div className="DiaryList">
            {/* 메뉴바 */}
            <div className="menu_bar">
                <select onChange={onChnageSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button 
                    onClick={() => nav("/new")} type={"POSITIVE"} text={"새 일기 쓰기"}/>
            </div>
            {/* 메뉴 아이템 */}
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>

    )
}

export default DiaryList;