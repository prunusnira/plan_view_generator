import { useState } from "react";
import { Order } from "./types/typeOrder";
import { User } from "./types/typeUser";
import { OrderList, OrderListWrapper, UserItemWrapper } from "./userItem.style";

type Props = {
    user: User;
};

const UserItem = ({ user }: Props) => {
    const { id, name, age, email, orderList } = user;
    const [isOrderVisible, setOrderVisible] = useState(true);
    return (
        <UserItemWrapper key={id}>
            <h3>{name}</h3>
            <p>나이: {age}</p>
            <p>주소: {email}</p>
            <OrderListWrapper onClick={() => setOrderVisible(!isOrderVisible)}>
                {isOrderVisible ? `Click to Close ▲` : `Click to Expand ▼`}
                {orderList.length > 0 &&
                    orderList.map((order: Order) => {
                        return (
                            <OrderList
                                isVisible={isOrderVisible}
                                key={order.id}
                            >
                                <h3>주문번호: {order.id}</h3>
                                <p>상품 : {order.item.name}</p>
                                <p>가격 : {order.item.price}</p>
                                <p>수량 : {order.amount}</p>
                                <p>총액 : {order.item.price * order.amount}</p>
                            </OrderList>
                        );
                    })}
            </OrderListWrapper>
        </UserItemWrapper>
    );
};

export default UserItem;
