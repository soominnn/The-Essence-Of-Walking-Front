import React, {useState} from "react";
import DrawerAppBar from "../atoms/DrawerAppBar";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import {useNavigate} from "react-router-dom";
import Footer from "../atoms/Footer";
import axios from "axios";
import {userId} from "../recoils/UserId";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userInfo} from "../recoils/UserInfo";

function MyPage(){
    const userID = useRecoilValue(userId);
    const setUserInfo = useSetRecoilState(userInfo);
    const navigate = useNavigate();
    const removeInfo = async () => {
        const check = window.confirm('정말 탈퇴하시겠습니까?');
        if (check) {
            await axios
                .delete(`http://localhost:8080/users/delete/${userID}`)
                .then(res => {
                    navigate('/');
                })
                .catch((err) => {
                    alert("회원 탈퇴 오류입니다.");
                })
        }
    }

    const editInfo = async () => {
        await axios
            .get(`http://localhost:8080/users/info/${userID}`)
            .then((res) => {
                setUserInfo(res.data);
                navigate('/editinfo');
                console.log(res);
            })
            .catch((err) => {
                alert("오류입니다.");
            });
    };

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
                    <OutlinedButton content={'과거 데이터 비교'} onClick={() => navigate('/recordcompare')}/>
                </div>
                <div>
                    <OutlinedButton content={'내 정보 수정'} onClick={editInfo}/>
                </div>
                <div>
                    <OutlinedButton content={'회원 탈퇴'} onClick={removeInfo}/>
                </div>
            </Box>
            <Footer/>
        </div>
    );
}

export default MyPage;