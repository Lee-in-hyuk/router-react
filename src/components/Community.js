import { Link,Routes,Route } from "react-router-dom";
import SubCommu from "./SubCommu";
export default function Community(){
    return(
        <div>
            <h2>커뮤니티 입니다.</h2>
            <p>커뮤니티 내용입니다.</p>
            <h3>커뮤니티 목록</h3>
            <ul>
                <li><Link to="/community/subcommu1">커뮤니티01</Link></li>
                <li><Link to="/community/subcommu2">커뮤니티02</Link></li>
                <li><Link to="/community/subcommu3">커뮤니티03</Link></li>
            </ul>
            <Routes>
                <Route path="/*" element={<div>커뮤니티를 선택해주세요</div>}/>
                <Route path=":subCommu" element={<SubCommu/>}/>
            </Routes>
        </div>
    );
}