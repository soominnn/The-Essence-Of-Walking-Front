import React from "react";
import TextInput from "../atoms/TextInput";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import TextButton from "../atoms/TextButton";

function LoginPage(){
    return(
        <div>
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
                    <TextInput label={"ID"}/>
                </div>
                <div>
                    <TextInput label={"Password"} type={"password"}/>
                </div>
                <div>
                    <OutlinedButton content={"로그인"}/>
                </div>
            </Box>
                <TextButton content={"회원가입"}/>
        </div>
    );
}

export default LoginPage;