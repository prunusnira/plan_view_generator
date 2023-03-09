import ImageRow from "./ImagesRow";
import { ItemWrapper } from "./item.style";

const Items = () => {
    return (
        <ItemWrapper>
            <ImageRow rowNumber={0} />
            <ImageRow rowNumber={1} />
            <ImageRow rowNumber={2} />
        </ItemWrapper>
    );
};

export default Items;
