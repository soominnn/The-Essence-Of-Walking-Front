import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DrawerAppBar from "../atoms/DrawerAppBar";
import Footer from "../atoms/Footer";
import axios from "axios";
import {useRecoilValue} from "recoil";
import {userId} from "../recoils/UserId";
import ApexCharts from "react-apexcharts";
import camera from "../img/camera.png";
import video from "../img/video.png"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '30px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MainPage(){
    const userID = useRecoilValue(userId);
    const [turnOffVideo, setTurnOffVideo] = useState(false);
    const [leftAngle, setLeftAngle] = useState([]);
    const [rightAngle, setRightAngle] = useState([]);
    //왼쪽 발목 평균
    const [averageLeftAngle, setAverageLeftAngle] = useState(0);
    //오른쪽 발목 평균
    const [averageRightAngle, setAverageRightAngle] = useState(0);
    //왼쪽 골반 평균
    const [averageLeftHipAngle, setAverageLeftHipAngle] = useState(0);
    //오른쪽 골반 평균
    const [averageRightHipAngle, setAverageRightHipAngle] = useState(0);
    //왼쪽 어깨 평균
    const [averageLeftShoulderAngle, setAverageLeftShoulderAngle] = useState(0);
    //오른쪽 어깨 평균
    const [averageRightShoulderAngle, setAverageRightShoulderAngle] = useState(0);
    const [frameCount, setFrameCount] =useState();
    const [isRecord, setIsRecord] = useState(false);

    //분석 결과 받아오기
    const realtimeDataResult = async () => {
        await axios
            .get(`http://localhost:8080/result/${userID}`)
            .then((res) => {
                console.log(res.data)
                setFrameCount(res.data.length);
                res.data.forEach((frame) => {
                    // if (90 <= frame.leftAngle && frame.leftAngle <= 180 && 90 <= frame.rightAngle && frame.rightAngle <= 180)
                    setLeftAngle(leftAngle => [...leftAngle, parseInt(frame.leftAngle)]);
                    setRightAngle(rightAngle => [...rightAngle, parseInt(frame.rightAngle)]);

                    setAverageLeftAngle(averageLeftAngle => averageLeftAngle + parseInt(frame.leftAngle));
                    setAverageRightAngle(averageRightAngle => averageRightAngle + parseInt(frame.rightAngle));

                    setAverageLeftHipAngle(averageLeftHipAngle => averageLeftHipAngle + parseInt(frame.leftHip));
                    setAverageRightHipAngle(averageRightHipAngle => averageRightHipAngle + parseInt(frame.rightHip));

                    setAverageLeftShoulderAngle(averageLeftShoulderAngle => averageLeftShoulderAngle + parseInt(frame.leftShoulder));
                    setAverageRightShoulderAngle(averageRightShoulderAngle => averageRightShoulderAngle + parseInt(frame.rightShoulder));
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //동영상 녹화 시작
    const videoStart = async () => {
        await axios
            .get(`http://localhost:8080/live/${userID}`)
            .then((res) => {
                realtimeDataResult();
                setTurnOffVideo(true);
            })
            .catch((err) => {
                alert("오류입니다.");
            });
    };

    //파일 버전
    const recordDataResult = async () => {
        await axios
            .get(`http://localhost:8080/file/${userID}`)
            .then((res) => {
                console.log(res.data)
                setFrameCount(res.data.length);
                res.data.forEach((frame) => {
                    // if (90 <= frame.leftAngle && frame.leftAngle <= 180 && 90 <= frame.rightAngle && frame.rightAngle <= 180)
                    setLeftAngle(leftAngle => [...leftAngle, parseInt(frame.leftAngle)]);
                    setRightAngle(rightAngle => [...rightAngle, parseInt(frame.rightAngle)]);

                    setAverageLeftAngle(averageLeftAngle => averageLeftAngle + parseInt(frame.leftAngle));
                    setAverageRightAngle(averageRightAngle => averageRightAngle + parseInt(frame.rightAngle));

                    setAverageLeftHipAngle(averageLeftHipAngle => averageLeftHipAngle + parseInt(frame.leftHip));
                    setAverageRightHipAngle(averageRightHipAngle => averageRightHipAngle + parseInt(frame.rightHip));

                    setAverageLeftShoulderAngle(averageLeftShoulderAngle => averageLeftShoulderAngle + parseInt(frame.leftShoulder));
                    setAverageRightShoulderAngle(averageRightShoulderAngle => averageRightShoulderAngle + parseInt(frame.rightShoulder));
                });
                setIsRecord(true);
                setTurnOffVideo(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(
        <div>
            <DrawerAppBar/>
            <Box sx={{ flexGrow: 1}}>
                <Grid container columns={16}>
                    <Grid xs={8}>
                        {/*왼편에 동영상*/}
                        <Item>
                            <div>
                                {turnOffVideo
                                    ? isRecord
                                        ?
                                        <video src=""></video>
                                        :
                                        <div>
                                            <ApexCharts
                                                style = {{width: "100%", margin:"auto"}}
                                                type="line"
                                                series={ [
                                                    { name: "왼쪽 발목 각도",
                                                        data: leftAngle,
                                                    },
                                                    { name: "오른쪽 발목 각도",
                                                        data: rightAngle,
                                                    },
                                                ]}
                                                options={{
                                                    chart : {
                                                        height: 500,
                                                        width: 500,
                                                    },
                                                }}>
                                            </ApexCharts>
                                        </div>
                                    :
                                    <div style={{fontSize:"30px", fontWeight:"Bold", padding:"30px"}}>
                                        <div>실시간 버전</div>
                                        <img src={camera} alt="" onClick={videoStart} style={{cursor:"pointer", width:"400px"}}/>
                                    </div>
                                }
                            </div>
                        </Item>
                    </Grid>
                        <Grid xs={8}>
                        {/*오른편에 동영상 추천 및 비교 글 넣기*/}
                        <Item>
                            {turnOffVideo
                                ? isRecord
                                    ?
                                    <div>
                                        <div>
                                            <ApexCharts
                                                style = {{width: "100%", margin:"auto"}}
                                                type="line"
                                                series={ [
                                                    { name: "왼쪽 발목 각도",
                                                        data: leftAngle,
                                                    },
                                                    { name: "오른쪽 발목 각도",
                                                        data: rightAngle,
                                                    },
                                                ]}
                                                options={{
                                                    chart : {
                                                        height: 500,
                                                        width: 500,
                                                    },
                                                }}>
                                            </ApexCharts>
                                        </div>
                                        <div>
                                            <div style={{textAlign: "center", fontSize: "30px", fontWeight: "Bold"}}>분석 결과</div>
                                            <br/>
                                            <div>
                                                {'왼쪽 발목 평균 각도: ' + (averageLeftAngle / frameCount).toFixed(2)}
                                            </div>
                                            <br/>
                                            <div>
                                                {'오른쪽 발목 평균 각도: ' + (averageRightAngle / frameCount).toFixed(2)}
                                            </div>
                                            <br/>
                                            <div>
                                                {'왼쪽 골반 평균 위치: ' + (averageLeftHipAngle / frameCount).toFixed(2)}
                                            </div>
                                            <br/>
                                            <div>
                                                {'오른쪽 골반 평균 위치: ' + (averageRightHipAngle / frameCount).toFixed(2)}
                                            </div>
                                            <br/>
                                            <div>
                                                {'왼쪽 어깨 평균 위치: ' + (averageLeftShoulderAngle / frameCount).toFixed(2)}
                                            </div>
                                            <br/>
                                            <div>
                                                {'오른쪽 어깨 평균 위치: ' + (averageRightShoulderAngle / frameCount).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div style={{textAlign: "center", fontSize: "30px", fontWeight: "Bold"}}>분석 결과</div>
                                        <br/>
                                        <div>
                                            {'왼쪽 발목 평균 각도: ' + (averageLeftAngle / frameCount).toFixed(2)}
                                        </div>
                                        <br/>
                                        <div>
                                            {'오른쪽 발목 평균 각도: ' + (averageRightAngle / frameCount).toFixed(2)}
                                        </div>
                                        <br/>
                                        <div>
                                            {'왼쪽 골반 평균 위치: ' + (averageLeftHipAngle / frameCount).toFixed(2)}
                                        </div>
                                        <br/>
                                        <div>
                                            {'오른쪽 골반 평균 위치: ' + (averageRightHipAngle / frameCount).toFixed(2)}
                                        </div>
                                        <br/>
                                        <div>
                                            {'왼쪽 어깨 평균 위치: ' + (averageLeftShoulderAngle / frameCount).toFixed(2)}
                                        </div>
                                        <br/>
                                        <div>
                                            {'오른쪽 어깨 평균 위치: ' + (averageRightShoulderAngle / frameCount).toFixed(2)}
                                        </div>
                                    </div>
                                :
                                <div style={{fontSize: "30px", fontWeight: "Bold", padding: "30px"}}>
                                    <div>동영상 버전</div>
                                    <img src={video} alt="" onClick={recordDataResult} style={{cursor: "pointer", width: "400px"}}/>
                                </div>
                            }
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </div>
    );
}

export default MainPage;

