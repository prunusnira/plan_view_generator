import { current } from "@reduxjs/toolkit";
import { createContext, useState } from "react";
import { User } from "../components/users/types/typeUser";

const emptyUser: User = {
    age: 0,
    email: "",
    id: "",
    name: "",
    orderList: [],
};

interface IUserContext {
    user: User;
    changeUser: (user: User) => void;
}

export const UserContext = createContext<IUserContext>({
    user: emptyUser,
    changeUser: (user: User) => {},
});

type Props = {
    children: JSX.Element;
};

export const UserProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState(emptyUser);

    return (
        <UserContext.Provider
            value={{ user: currentUser, changeUser: setCurrentUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
