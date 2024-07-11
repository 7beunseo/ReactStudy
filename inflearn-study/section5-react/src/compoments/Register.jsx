// 회원가입 폼
import { useState, useRef } from "react";

const Register = () => {
    // 객체 형태로 한번에 저장 
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    // useRef
    const countRef = useRef(0);
    const inputRef = useRef();
    // console.log("Register 렌더링 : ", countRef.current); // 한번만 출력됨 

    const onChange = (e) => {
        countRef.current ++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value // 포로퍼티의 키가 됨 
        });
    };

    const onSubmit = (e) => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스 
            console.log(inputRef.current)
            inputRef.current.focus();
        }
    }

    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    /*
    // 이름
    const onChangeName = (e) => {
        // setName(e.target.value);
        setInput({
            ...input, // 기존의 input 내용 그대로 
            name: e.target.value
        })
    }

    // 생일
    const onChangeBirth = (e) => {
        // setBirth(e.target.value);
        setInput({
            ...input, 
            birth: e.target.value
        })
    }

    // 국적
    const onChangeCountry = (e) => {
        // setCountry(e.target.value);
        setInput({
            ...input,  
            country: e.target.value
        })
    }

    // 자기소개
    const onChangeBio = (e) => {
        setInput({
            ...input, 
            bio: e.target.value
        })
    }
    */

    console.log(input);

    return (
        <div>
            {/* 
            <button
                onClick={() => {
                    refObj.current++;
                    console.log(refObj.current);
                }}
            >
                ref + 1
            </button> 
            */}

            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"}/>
            </div>

            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;