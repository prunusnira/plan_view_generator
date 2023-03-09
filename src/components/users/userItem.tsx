import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { User } from "./types/typeUser";
import { UserItemWrapper } from "./userItem.style";

type Props = {
    user: User;
};

const UserItem = ({ user }: Props) => {
    const { id, name, age, email } = user;
    const userContext = useContext(UserContext);
    return (
        <UserItemWrapper key={id} onClick={() => userContext.changeUser(user)}>
            <h3>{name}</h3>
            <p>나이: {age}</p>
            <p>주소: {email}</p>
        </UserItemWrapper>
    );
};

export default UserItem;
