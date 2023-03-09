import { gql } from "@apollo/client";

export const GetAllItems = gql`
    {
        itemList {
            id
            category
            name
            price
            image
        }
    }
`;
