import './Editor.css'
import { useState, useRef } from 'react'

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return; // 빈 문자열일 경우 onCreate를 호출하지 않음
        }
        onCreate(content);
        setContent("");
    }

    // 엔터 치면 추가되도록
    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    return <div className="Editor">
        <input ref={contentRef} onKeyDown={onKeyDown} value={content} onChange={onChangeContent} placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
    </div>
}

export default Editor;