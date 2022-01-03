import { useParams,Link } from "react-router-dom";
export default function Product(){
    const param = useParams();
    // console.log(param);
    const { pro } = param;
    // productObj라는 객체 만들기
    const productObj = {
        product1: {
            name:"맥북",
            description: "최신 15인치"
        },
        product2: {
            name: "아이폰",
            description: "핸드폰은 갤럭시지만 아이폰 도전"
        }
    }
    const product = productObj[pro];
    if(!product){
        return(
            <div>존재하지 않는 제품입니다.</div>
        );
    }
    return(
        <div>
            <div>
                <ul>
                    <li><Link to="/product/product1">제품1</Link></li>
                    <li><Link to="/product/product2">제품2</Link></li>
                    <li><Link to="/product/product3">제품3</Link></li>
                </ul>
            </div>
            <h2>{pro}제품소개 입니다.</h2>
            <p>{productObj[pro].description}</p>
        </div>
    );
}