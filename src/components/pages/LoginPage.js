import React from "react";
import TextInput from "../atoms/TextInput";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import TextButton from "../atoms/TextButton";
import {useNavigate} from "react-router-dom";
function LoginPage(){
    const navigate = useNavigate();
    const signupButtonOnClick = () => {
        navigate("/signup");
    }
    const loginButtonOnClick = () => {
        navigate("/main");
    }
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
                    <TextInput label={"아이디"}/>
                </div>
                <div>
                    <TextInput label={"비밀번호"} type={"password"}/>
                </div>
                <div>
                    <OutlinedButton onClick={loginButtonOnClick} content={"로그인"}/>
                </div>
            </Box>
                <TextButton onClick={signupButtonOnClick} content={"회원가입"}/>
        </div>
    );
}

export default LoginPage;