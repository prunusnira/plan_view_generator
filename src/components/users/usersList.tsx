import { useQuery } from "@apollo/client";
import { GetAllUsers } from "../../gql/UserQuery";
import { User } from "./types/typeUser";
import UserItem from "./userItem";
import { UserWrapper } from "./usersList.style";

const Users = () => {
    const { loading, error, data } = useQuery(GetAllUsers);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <UserWrapper>
            <h3>주문자 목록</h3>
            {(data.userList as Array<User>).map((user) => (
                <UserItem user={user} />
            ))}
        </UserWrapper>
    );
};

export default Users;
