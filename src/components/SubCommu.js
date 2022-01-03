import { useParams } from "react-router-dom";
export default function SubCommu(){
    const param = useParams();
    const { subCommu } = param;
    return(
        <div>
            {subCommu} 내용입니다.
        </div>
    );
}