import { IndexWrapper } from "./index.style";
import Items from "./items/item";
import Users from "./users/usersList";

const IndexPage = () => {
    return (
        <IndexWrapper>
            <Users />
            <Items />
        </IndexWrapper>
    );
};

export default IndexPage;
