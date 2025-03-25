/* eslint-disable react/prop-types */
import '../styles/catalog.css'

export default function PagesList({pagesNum, onClick, curPage}) {



    return(
        <ul className="page-number-list">
            <ul className="page-number-list">
            {Array.from({ length: pagesNum }, (_, i) => (
                <li key={i}>
                    <button className={i + 1 == curPage ? "page-number cur-page-number" : "page-number"} onClick={() => onClick(i+1)}>
                        {i+1}
                    </button>
                </li>
            ))}
        </ul>
        </ul>
    )
}