import styled from "styled-components";

export const UserItemWrapper = styled.div`
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

export const OrderListWrapper = styled.div``;

export const OrderList = styled.div<{ isVisible: boolean }>`
    ${(props) => (props.isVisible ? `` : `display: none;`)}

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
