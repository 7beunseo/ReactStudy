import { useSearchParams } from 'react-router-dom'

const ParamTest = () => {
    const [params, setParams] = useSearchParams(); // set 메서도르 param을 수정할 수도 있음 
    console.log(params.get("value")); // ?value=hello

    return <div>ParamTest</div>
}

export default ParamTest;