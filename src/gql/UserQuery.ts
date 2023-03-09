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
                item {
                    id
                    category
                    name
                    price
                    image
                    amount
                }
            }
        }
    }
`;
