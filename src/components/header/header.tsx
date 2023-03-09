import { Link, useLocation } from "react-router-dom";
import { HeaderLink, HeaderWrapper } from "./header.style";

const Header = () => {
    const location = useLocation();
    return (
        <HeaderWrapper>
            <HeaderLink isCurrent={location.pathname === "/"}>
                <Link to={"/"}>Index</Link>
            </HeaderLink>
            <HeaderLink isCurrent={location.pathname === "/deliver"}>
                <Link to={"/deliver"}>Deliver</Link>
            </HeaderLink>
            <HeaderLink isCurrent={location.pathname === "/manage"}>
                <Link to={"/manage"}>Manage</Link>
            </HeaderLink>
        </HeaderWrapper>
    );
};

export default Header;
