import styled from "styled-components";

export const OrderWrapper = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 600px;
    align-items: center;

    h3 {
        margin: 0;
    }
`;

export const OrderListWrapper = styled.div``;

export const OrderList = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;

    h3 {
        font-size: 18px;
        margin: 0;
    }
    p {
        margin: 0;
    }
`;

export const OrderItemList = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
`;
