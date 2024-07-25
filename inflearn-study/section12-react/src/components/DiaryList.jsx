import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'


const DiaryList = ({ data }) => {


    return (
        <div className="DiaryList">
            {/* 메뉴바 */}
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button type={"POSITIVE"} text={"새 일기 쓰기"}/>
            </div>
            {/* 메뉴 아이템 */}
            <div className="list_wrapper">
                {data.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>

    )
}

export default DiaryList;