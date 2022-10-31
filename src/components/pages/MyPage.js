import React from "react";
import DrawerAppBar from "../atoms/DrawerAppBar";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";

function MyPage(){
    return(
        <div>
            <DrawerAppBar/>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    '& button': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <OutlinedButton content={'과거 데이터 비교'}/>
                </div>
                <div>
                    <OutlinedButton content={'내 정보 수정'}/>
                </div>
                <div>
                    <OutlinedButton content={'회원 탈퇴'}/>
                </div>
            </Box>
        </div>
    );
}

export default MyPage;