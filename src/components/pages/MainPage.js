import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DrawerAppBar from "../atoms/DrawerAppBar";
import Footer from "../atoms/Footer";
import OutlinedButton from "../atoms/OutlinedButton";
import axios from "axios";
import {useRecoilValue} from "recoil";
import {userId} from "../recoils/UserId";
import ApexCharts from "react-apexcharts";

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
    console.log(userID)
    //동영상 녹화 시작
    const videoStart = async () => {
        await axios
            .get(`http://localhost:8080/python/${userID}`)
            .then((res) => {
                setTurnOffVideo(true);
                console.log(res);
            })
            .catch((err) => {
                alert("오류입니다.");
            });
    };

    return(
        <div>
            <DrawerAppBar/>
            <Box sx={{ flexGrow: 1}}>
                <Grid container columns={16}>
                    <Grid xs={8}>
                        {/*왼편에 동영상*/}
                        <Item>
                            <div>

                                <OutlinedButton onClick={videoStart} content={"동영상 녹화"}/>
                            </div>
                        </Item>
                    </Grid>
                    <Grid xs={8}>
                        {/*오른편에 동영상 추천 및 비교 글 넣기*/}
                        <Item>
                        { turnOffVideo &&
                            <div>
                                <ApexCharts
                                    style = {{width: "600px", margin:"auto"}}
                                    type="line"
                                    series={ [
                                        { name: "왼쪽 발목 각도",
                                            data: [19, 26, 20, 9],
                                        },
                                        { name: "오른쪽 발목 각도",
                                            data: [30, 26, 34, 10],
                                        },
                                    ]}
                                    options={{
                                        chart : {
                                            height: 500,
                                            width: 500,
                                        },
                                    }}>
                                </ApexCharts>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Pulvinar sapien et ligula ullamcorper malesuada. Semper feugiat nibh sed pulvinar proin gravida. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Volutpat diam ut venenatis tellus in metus vulputate eu. Fusce ut placerat orci nulla pellentesque. Fermentum posuere urna nec tincidunt praesent semper feugiat. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Et leo duis ut diam quam nulla.

                                Scelerisque eleifend donec pretium vulputate. Laoreet non curabitur gravida arcu. Lectus arcu bibendum at varius vel pharetra. Nibh sed pulvinar proin gravida hendrerit. Quam quisque id diam vel quam elementum. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque sit amet porttitor eget. Elit pellentesque habitant morbi tristique senectus. Nisi vitae suscipit tellus mauris a diam maecenas.
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

