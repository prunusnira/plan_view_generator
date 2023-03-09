import { Link } from "react-router-dom";
import { IndexButton, PageWrapper } from "./page.style";

const IndexPage = () => {
    return (
        <PageWrapper>
            <Link to="/deliver">
                <IndexButton>주문 목록 관리</IndexButton>
            </Link>
            <Link to="/manage">
                <IndexButton>등록 아이템 관리</IndexButton>
            </Link>
        </PageWrapper>
    );
};

export default IndexPage;
