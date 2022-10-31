import React from "react";
import DrawerAppBar from "../atoms/DrawerAppBar";
import {Box} from "@mui/material";
import OutlinedButton from "../atoms/OutlinedButton";
import {useNavigate} from "react-router-dom";
import Footer from "../atoms/Footer";

function MyPage(){
    const navigate = useNavigate();
    const removeInfo = () => {
        if (window.confirm('정말 탈퇴하시겠습니까?')){
        //    탈퇴 API 넣기
            navigate('/');
        }
    }
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
                    <OutlinedButton content={'과거 데이터 비교'} onClick={() => navigate('/recordcompare')}/>
                </div>
                <div>
                    <OutlinedButton content={'내 정보 수정'} onClick={() => navigate('/editinfo')}/>
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