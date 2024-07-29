import './Editor.css'
import EmotionItem from './EmotionItem'
import Button from './Button'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// 날짜를 문자열로 변경
const getStringedDate = (targetDate) => {
    // 날짜 YYYY-MM-DD 형태로 반환 

    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10) month = `0${month}`;
    if(date < 10) date = `0${date}`

    return `${year}-${month}-${date}`
}

const emotionList = [
    {
        emotionId: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭 저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    },
]
const Editor = ({ initData, onSubmit }) => {
    const nav = useNavigate();


    const [input, setInput] = useState( // 객체 형태로 state 생성 
        {
            createdDate: new Date(),
            emotionId: 3,
            content: ""
        }
    );

    useEffect(() => {
        if(initData) {
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate))
            })
        }
    }, [initData])

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    const onChangeInput = (e) => {
    
        let name = e.target.name;
        let value = e.target.value;
    
        if(name === "createdDate") { 
            value = new Date(value); // date형태로 맞춤 
        }
    
        setInput({
            ...input,
            [name]: value, // key를 다르게 설정하면 값이 수정되는게 아니라 새로운 key가 생김! 주의 
        });
    }

    return (
        <div className='Editor'>
        
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input 
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)} 
                    type="date" 
                    />
            </section>

            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item) => 
                        <EmotionItem 
                        onClick={() => {
                            onChangeInput({
                                target : {
                                    name: "emotionId",
                                    value: item.emotionId
                                }
                            })
                        }}
                            key={item.emotionId} 
                            {...item} 
                            isSelected={item.emotionId === input.emotionId}    
                        />)}
                </div>
            </section>

            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder='오늘은 어땠나요?'/>
            </section>

            <section className='button_section'>
                <Button onClick={() => nav(-1)} text={"취소하기"}/>
                <Button onClick={onClickSubmitButton} text={"작성완료"} type={"POSITIVE"}/>
            </section>
        </div>
    )
}

export default Editor;