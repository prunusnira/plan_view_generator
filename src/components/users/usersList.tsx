import { useQuery } from "@apollo/client";
import { GetAllUsers } from "../../gql/UserQuery";
import { User } from "./types/typeUser";
import UserItem from "./userItem";
import { UserWrapper } from "./usersList.style";

const Users = () => {
    const { loading, error, data } = useQuery(GetAllUsers);

    return (
        <UserWrapper>
            <h3>주문자 목록</h3>
            {loading && "Loading"}
            {error && `Error: ${error.message}`}
            {data &&
                data.userList.length > 0 &&
                (data.userList as Array<User>).map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
        </UserWrapper>
    );
};

export default Users;
