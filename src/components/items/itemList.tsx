import { useQuery } from "@apollo/client";
import { GetAllItems } from "../../gql/ItemQuery";
import { Item } from "../users/types/typeItem";
import ItemRow from "./itemImage/itemRow";
import { ItemListWrapper } from "./itemList.style";

const ItemList = () => {
    const { loading, error, data } = useQuery(GetAllItems);
    return (
        <ItemListWrapper>
            {loading && "Loading"}
            {error && `Error: ${error.message}`}
            {data &&
                data.itemList.length > 0 &&
                (data.itemList as Array<Item>).map((item) => (
                    <ItemRow key={item.id} item={item} />
                ))}
        </ItemListWrapper>
    );
};

export default ItemList;
