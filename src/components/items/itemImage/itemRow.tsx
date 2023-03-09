import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import styled from "styled-components";
import ImageItem from "./ImageItem";
import ImageAppender from "./ImageAppender";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { clear } from "../../../redux/slices/selections";
import { Item } from "../../users/types/typeItem";
import { ItemRowWrapper } from "./itemRow.style";

type Props = {
    item: Item;
};

type ImageFile = {
    id: number;
    file: File;
    url: string;
};

const ItemRow = ({ item }: Props) => {
    const { id, category, name, price, image, amount } = item;

    const fileId = useRef<number>(0);
    const [files, setFiles] = useState<ImageFile[]>([]);
    const selections = useAppSelector((state) => state.selections).rows.find(
        (selectionInRow) => selectionInRow.row === id
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(__dirname);
    }, []);

    const onChangeFiles = useCallback(
        (e: ChangeEvent<HTMLInputElement> | any): void => {
            let selectFiles: File[] = [];
            let tempFiles: ImageFile[] = files;

            if (e.type === "drop") {
                selectFiles = e.dataTransfer.files;
            } else {
                selectFiles = e.target.files;
            }

            for (const file of selectFiles) {
                tempFiles = [
                    ...tempFiles,
                    {
                        id: fileId.current++,
                        file: file,
                        url: URL.createObjectURL(file),
                    },
                ];
            }

            setFiles(tempFiles);
        },
        [files]
    );

    const handleRemoveFiles = useCallback((): void => {
        if (!selections) return;

        setFiles(
            files.filter(
                (curFile: ImageFile) =>
                    selections.idList.indexOf(curFile.id) < 0
            )
        );
        dispatch(clear(id));
    }, [selections, files]);

    const handleEditFile = useCallback((): void => {
        alert("edit!");
    }, [files]);

    const handleSelectFile = useCallback((file: File): void => {}, [files]);

    const getFile = (id: number) => {
        files.map((imageFile) => {
            if (imageFile.id === id) {
                return imageFile.file;
            }
        });
        return null;
    };

    return (
        <ItemRowWrapper>
            <p>아이템 ID {id}</p>
            <p>이름 {name}</p>
            <p>가격 {price}</p>
            <p>분류 {category}</p>
            {image.map((path, i) => (
                <ImageItem
                    key={`image${id}_${i}`}
                    rowNumber={id}
                    id={i}
                    url={`${process.env.PUBLIC_URL}/img/${path}`}
                />
            ))}
            {files.length > 0 &&
                files.map((file: ImageFile) => {
                    return (
                        <ImageItem
                            rowNumber={id}
                            key={file.id}
                            id={file.id}
                            url={file.url}
                        />
                    );
                })}
            <ImageAppender
                rowNumber={id}
                onChangeFiles={onChangeFiles}
                onRemove={handleRemoveFiles}
                onEdit={handleEditFile}
            />
            <div>
                {selections &&
                    selections.idList.map((id: number) => {
                        return <p key={id}>{id}</p>;
                    })}
            </div>
        </ItemRowWrapper>
    );
};

export default ItemRow;
