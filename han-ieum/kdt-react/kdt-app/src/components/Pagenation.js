import { useState } from "react"

const PageNation = ({ defaultPage, limit, total, onChange }) => {
    const [page, setPage] = useState(defaultPage);
    const totalPage = Math.ceil(total / limit);

    const handleChangePage = (newPage) => {
        onChange(newPage);
        setPage(newPage);
    }

    return (
        <div>
            <button onClick={() => page !== 0 && handleChangePage(page - 1)}>이전</button>
            {Array.from(new Array(totalPage), (_, i)  => (
                <button key = {i} 
                onClick={() => handleChangePage(i)}
                style={{ backgroundColor: page === i ? 'red' : undefined}}
                >
                    {i+1}
                </button>
            ))}
            <button onClick={() => page + 1 !== totalPage && handleChangePage(page + 1)}>다음</button>
        </div>
    )
}

export default PageNation;