import React from "react";
import TextInput from "../atoms/TextInput";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";

function SignupPage(){
    return(
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
                <TextInput label={"아이디"}/>
            </div>
            <div>
                <TextInput label={"비밀번호"} type={"password"}/>
            </div>
            <div>
                <TextInput label={"비밀번호 재확인"} type={"password"}/>
            </div>
            <div>
                <TextInput label={"이름"}/>
            </div>
            <div>
                <TextInput label={"성별"}/>
            </div>
            <div>
                <TextInput label={"나이"} type={"number"}/>
            </div>
            <div>
                <TextInput label={"이메일"}/>
            </div>
            <div>
                <TextInput label={"휴대폰 번호"}/>
            </div>
            <OutlinedButton content={"회원가입"}/>
        </Box>
    );
}

export default SignupPage;