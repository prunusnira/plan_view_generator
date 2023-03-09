import OrderSection from "../components/order/order";
import Users from "../components/users/usersList";
import { PageWrapper } from "./page.style";

const DeliverPage = () => {
    return (
        <PageWrapper>
            <Users />
            <OrderSection />
        </PageWrapper>
    );
};

export default DeliverPage;
