import { useLocation } from "react-router-dom";
export default function Company(){
    //location 객체를 리턴
    const query = useLocation();
        // console.log(query);
    //query를 구조분해할당
    const { search } = query;
        // console.log(search);
    //객체로 변환
    let params = new URLSearchParams(search);
        // console.log(params); //get 메서드를 사용해서 name을 받아옴.
        // 추가로 App.js에서 ?name뒤에 &를 쓰고 id=com을 쓰면 com값을 부를 수 있음.
    let name_keyword = params.get('name');
        // console.log(name_keyword); //green이 찍힘
    return(
        <div>
            <h2>회사소개 입니다.</h2>
            <p>회사소개 내용입니다.</p>
        </div>
    );
}