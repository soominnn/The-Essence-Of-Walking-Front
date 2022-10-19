import React, {useState} from "react";
import TextInput from "../atoms/TextInput";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function SignupPage(){
    const navigate = useNavigate();

    //회원가입 정보
    const [signupInfo, setSignupInfo] = useState({
        id: "",
        password: "",
        name: "",
        age: "",
        gender: "",
        email: "",
        phoneNumber: "",
    });

    //순서대로 id, 비밀번호, 비밀번호 재확인, 이름, 전화번호 변화 감지
    const idOnChange = (e) => {
        setSignupInfo({ ...signupInfo, id: e.target.value });
    };
    const passwordOnChange = (e) => {
        setSignupInfo({ ...signupInfo, password: e.target.value });
    };
    // const passwordCheckOnChange = (e) => {
    //     setSignupInfo({ ...signupInfo, passwordCheck: e.target.value });
    // };
    const nameOnChange = (e) => {
        setSignupInfo({ ...signupInfo, name: e.target.value });
    };
    const ageOnChange = (e) => {
        setSignupInfo({ ...signupInfo, age: e.target.value });
    };
    const genderOnChange = (e) => {
        setSignupInfo({ ...signupInfo, gender: e.target.value });
    };
    const emailOnChange = (e) => {
        setSignupInfo({ ...signupInfo, email: e.target.value });
    };
    const phoneNumberOnChange = (e) => {
        setSignupInfo({ ...signupInfo, phoneNumber: e.target.value });
    };

    //엔터 누르면 회원가입 버튼 누른것과 같은 기능
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            SignUpOnClick();
        }
    };

    //회원가입 버튼 클릭 API
    const SignUpOnClick = async () => {
        console.log(signupInfo)
        //입력 안된 것이 있으면 경고창 띄위기
        if (
            signupInfo.id === "" ||
            signupInfo.password === "" ||
            signupInfo.name === "" ||
            signupInfo.age === "" ||
            signupInfo.age === "" ||
            signupInfo.email === "" ||
            signupInfo.phoneNumber === ""
        ) {
            alert("회원가입 정보를 올바르게 입력하세요.");
            return;
        }
        await axios
            .post("http://localhost:8081/signup", signupInfo, {
                withCredentials: true,
            })
            .then((res) => {
                alert("회원가입 되었습니다.");
                navigate("/");
            })
            .catch((err) => {
                alert("회원가입 오류입니다.");
            });
    };

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
                <TextInput label={"아이디"} onChange={idOnChange} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"비밀번호"} type={"password"} onChange={passwordOnChange} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"비밀번호 재확인"} type={"password"} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"이름"} onChange={nameOnChange} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"나이"} type={"number"} onChange={ageOnChange} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"성별"} onChange={genderOnChange} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"이메일"} onChange={emailOnChange} onKeyDown={onKeyDown}/>
            </div>
            <div>
                <TextInput label={"휴대폰 번호"} onChange={phoneNumberOnChange} onKeyDown={onKeyDown}/>
            </div>
            <OutlinedButton content={"회원가입"} onClick={SignUpOnClick}/>
        </Box>
    );
}

export default SignupPage;