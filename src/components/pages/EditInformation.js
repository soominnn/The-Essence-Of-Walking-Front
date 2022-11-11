import React, {useState} from "react";
import TextInput from "../atoms/TextInput";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import {useNavigate} from "react-router-dom";
import DrawerAppBar from "../atoms/DrawerAppBar";
import Footer from "../atoms/Footer";
import {useRecoilValue} from "recoil";
import {userInfo} from "../recoils/UserInfo";
import axios from "axios";
import {userId} from "../recoils/UserId";

function EditInformation(){
    const userID = useRecoilValue(userId);
    const navigate = useNavigate();
    const userInfoValue = useRecoilValue(userInfo);
    //회원가입 정보
    const [signupInfo, setSignupInfo] = useState({
        userid: userInfoValue.userid,
        password: "",
        name: userInfoValue.name,
        age: userInfoValue.age,
        gender: userInfoValue.gender,
        email: userInfoValue.email,
        phone: userInfoValue.phone,
    });
    console.log(signupInfo);
    //순서대로 id, 비밀번호, 비밀번호 재확인, 이름, 전화번호 변화 감지
    const idOnChange = (e) => {
        setSignupInfo({ ...signupInfo, userid: e.target.value });
    };
    const passwordOnChange = (e) => {
        setSignupInfo({ ...signupInfo, password: e.target.value });
    };
    const passwordCheckOnChange = (e) => {
        setSignupInfo({ ...signupInfo, passwordCheck: e.target.value });
    };
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
        setSignupInfo({ ...signupInfo, phone: e.target.value });
    };

    //엔터 누르면 회원가입 버튼 누른것과 같은 기능
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    //회원정보 수정 API
    const editInfoButtonClick = async () => {
        await axios
            .patch(`http://localhost:8080/users/info/${userID}`, signupInfo)
            .then((res) => {
                console.log(res);
                alert("회원정보가 수정되었습니다.");
                navigate('/mypage');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div>
            <DrawerAppBar/>
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
                    <TextInput defaultValue = {userInfoValue.userid} label={"아이디"} onChange={idOnChange} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput label={"비밀번호"} type={"password"} onChange={passwordOnChange} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput label={"비밀번호 재확인"} type={"password"} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput defaultValue = {userInfoValue.name} label={"이름"} onChange={nameOnChange} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput defaultValue = {userInfoValue.age} label={"나이"} type={"number"} onChange={ageOnChange} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput defaultValue = {userInfoValue.gender} label={"성별"} onChange={genderOnChange} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput defaultValue = {userInfoValue.email} label={"이메일"} onChange={emailOnChange} onKeyDown={onKeyDown}/>
                </div>
                <div>
                    <TextInput defaultValue = {userInfoValue.phone} label={"이메일"} label={"휴대폰 번호"} onChange={phoneNumberOnChange} onKeyDown={onKeyDown}/>
                </div>
                <OutlinedButton content={"회원정보 수정"} onClick ={editInfoButtonClick}/>
            </Box>
            <Footer/>
        </div>
    );
}

export default EditInformation;