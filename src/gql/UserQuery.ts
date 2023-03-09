import { gql } from "@apollo/client";

export const GetAllUsers = gql`
    {
        userList {
            id
            name
            email
            age
            orderList {
                id
                amount
                item {
                    category
                    name
                    price
                }
            }
        }
    }
`;
