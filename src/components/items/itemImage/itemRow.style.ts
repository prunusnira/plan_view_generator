import styled from "styled-components";

export const ItemRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    min-width: 500px;
    margin-bottom: 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;

    p {
        margin: 0;
    }
`;
