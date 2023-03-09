import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 10px 20px;
`;

export const HeaderLink = styled.div<{ isCurrent: boolean }>`
    font-weight: bold;
    a {
        text-decoration: none;
        color: black;

        ${(props) => (props.isCurrent ? `color: red;` : ``)}
    }

    a:hover {
        color: grey;
    }
`;
