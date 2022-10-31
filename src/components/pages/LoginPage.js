import React, {useState} from "react";
import axios from "axios";
import TextInput from "../atoms/TextInput";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import TextButton from "../atoms/TextButton";
import {useNavigate} from "react-router-dom";
import DrawerAppBar from "../atoms/DrawerAppBar";
import walkingman from "../img/walkingman.png";
import Footer from "../atoms/Footer";

function LoginPage(){
    const navigate = useNavigate();
    //로그인 정보
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: "",
    });

    //id 입력 변화
    const idChange = (e) => {
        setLoginInfo({...loginInfo, id: e.target.value});
    }

    //password 입력 변화
    const passwordChange = (e) => {
        setLoginInfo({...loginInfo, password: e.target.value});
    }

    //하단에 회원가입 버튼 누를 시 회원가입 페이지로 이동
    const signupButtonOnClick = () => {
        navigate("/signup");
    }

    //로그인 버튼 클릭 API
    const loginButtonOnClick = async () => {
        console.log(loginInfo)
        //아이디나 비밀번호 입력이 없을 때 경고창
        if (loginInfo.id === "" || loginInfo.password === "") {
            alert("아이디 또는 비밀번호를 올바르게 입력하세요.");
            return;
        }
        await axios
            .post("http://localhost:8080/login", loginInfo)
            .then((res) => {
                navigate("/main");
            })
            .catch((err) => {
                alert("존재하지 않는 계정입니다.");
            });
    };

    return(
        <div>
            <DrawerAppBar/>
            <img src={walkingman} width={"120px"} />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '300px' },
                    '& button': { m: 1, width: '300px' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextInput label={"아이디"} onChange={idChange}/>
                </div>
                <div>
                    <TextInput label={"비밀번호"} type={"password"} onChange={passwordChange}/>
                </div>
                <div>
                    <OutlinedButton onClick={loginButtonOnClick} content={"로그인"}/>
                </div>
                <TextButton onClick={signupButtonOnClick} content={"회원가입"}/>
            </Box>
            <Footer/>
        </div>
    );
}

export default LoginPage;