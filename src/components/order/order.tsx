import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Order } from "../users/types/typeOrder";
import {
    OrderWrapper,
    OrderItemList,
    OrderList,
    OrderListWrapper,
} from "./order.style";

const OrderSection = () => {
    const userContext = useContext(UserContext);
    return (
        <OrderWrapper>
            <h3>주문상세</h3>
            <OrderListWrapper>
                {userContext.user.id === "" && "왼쪽에서 주문자를 선택해주세요"}
                {userContext.user.orderList.length > 0 &&
                    userContext.user.orderList.map((order: Order) => {
                        return (
                            <OrderList key={order.id}>
                                <h3>주문번호: {order.id}</h3>
                                <p>주문 상품 개수: {order.item.length}</p>
                                {order.item.length > 0 &&
                                    order.item.map((item) => (
                                        <OrderItemList key={item.id}>
                                            <p>아이템 ID : {item.id}</p>
                                            <p>상품 : {item.name}</p>
                                            <p>가격 : {item.price}</p>
                                            <p>수량 : {item.amount}</p>
                                            <p>
                                                총액 :{" "}
                                                {item.price * item.amount}
                                            </p>
                                        </OrderItemList>
                                    ))}
                            </OrderList>
                        );
                    })}
            </OrderListWrapper>
        </OrderWrapper>
    );
};

export default OrderSection;
