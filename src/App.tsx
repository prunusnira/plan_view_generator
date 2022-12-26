import * as React from 'react';
import ImageRow from "./components/ImagesRow";
import {Grid} from "@mui/material";

export default function App() {
    return (
        <Grid container spacing={2}>
            <Grid item sx={{width:1000, height: 1200}} >
                <ImageRow rowNumber={0} />
                <ImageRow rowNumber={1} />
                <ImageRow rowNumber={2} />
            </Grid>
            <Grid item >
                <div>세부 디테일 설정</div>
            </Grid>
        </Grid>
    );
}