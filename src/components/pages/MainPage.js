import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DrawerAppBar from "../atoms/DrawerAppBar";
import Footer from "../atoms/Footer";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '30px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MainPage(){
    return(
        <div>
            <DrawerAppBar/>
            <Box sx={{ flexGrow: 1}}>
                <Grid container columns={16}>
                    <Grid xs={8}>
                        {/*왼편에 동영상*/}
                        <Item>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Pulvinar sapien et ligula ullamcorper malesuada. Semper feugiat nibh sed pulvinar proin gravida. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Volutpat diam ut venenatis tellus in metus vulputate eu. Fusce ut placerat orci nulla pellentesque. Fermentum posuere urna nec tincidunt praesent semper feugiat. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Et leo duis ut diam quam nulla.

                            Scelerisque eleifend donec pretium vulputate. Laoreet non curabitur gravida arcu. Lectus arcu bibendum at varius vel pharetra. Nibh sed pulvinar proin gravida hendrerit. Quam quisque id diam vel quam elementum. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque sit amet porttitor eget. Elit pellentesque habitant morbi tristique senectus. Nisi vitae suscipit tellus mauris a diam maecenas.

                            Commodo sed egestas egestas fringilla phasellus faucibus. Semper risus in hendrerit gravida rutrum quisque non tellus. Ac odio tempor orci dapibus ultrices in iaculis. Bibendum neque egestas congue quisque egestas diam. Id ornare arcu odio ut sem nulla pharetra diam. Sed augue lacus viverra vitae congue eu consequat ac felis. Egestas pretium aenean pharetra magna. Mi bibendum neque egestas congue. Ac turpis egestas maecenas pharetra convallis posuere morbi. Congue nisi vitae suscipit tellus mauris a. Nisl tincidunt eget nullam non nisi. At imperdiet dui accumsan sit amet nulla facilisi. Suspendisse in est ante in nibh mauris cursus mattis. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna neque viverra justo nec ultrices. Tincidunt eget nullam non nisi est sit amet. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Enim nunc faucibus a pellentesque.

                            Quam elementum pulvinar etiam non quam. Duis convallis convallis tellus id interdum velit laoreet id. Nisi quis eleifend quam adipiscing vitae. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Interdum posuere lorem ipsum dolor sit amet. Fusce id velit ut tortor pretium viverra suspendisse potenti. Volutpat commodo sed egestas egestas fringilla phasellus. Vivamus arcu felis bibendum ut tristique et. Ac placerat vestibulum lectus mauris ultrices. Sit amet cursus sit amet dictum sit amet justo. Auctor neque vitae tempus quam pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Nec ultrices dui sapien eget mi. Sit amet cursus sit amet dictum sit amet. Id volutpat lacus laoreet non curabitur gravida. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Volutpat est velit egestas dui id ornare arcu. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.
                        </Item>
                    </Grid>
                    <Grid xs={8}>
                        {/*오른편에 동영상 추천 및 비교 글 넣기*/}
                        <Item>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Pulvinar sapien et ligula ullamcorper malesuada. Semper feugiat nibh sed pulvinar proin gravida. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Volutpat diam ut venenatis tellus in metus vulputate eu. Fusce ut placerat orci nulla pellentesque. Fermentum posuere urna nec tincidunt praesent semper feugiat. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Et leo duis ut diam quam nulla.

                            Scelerisque eleifend donec pretium vulputate. Laoreet non curabitur gravida arcu. Lectus arcu bibendum at varius vel pharetra. Nibh sed pulvinar proin gravida hendrerit. Quam quisque id diam vel quam elementum. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque sit amet porttitor eget. Elit pellentesque habitant morbi tristique senectus. Nisi vitae suscipit tellus mauris a diam maecenas.

                            Commodo sed egestas egestas fringilla phasellus faucibus. Semper risus in hendrerit gravida rutrum quisque non tellus. Ac odio tempor orci dapibus ultrices in iaculis. Bibendum neque egestas congue quisque egestas diam. Id ornare arcu odio ut sem nulla pharetra diam. Sed augue lacus viverra vitae congue eu consequat ac felis. Egestas pretium aenean pharetra magna. Mi bibendum neque egestas congue. Ac turpis egestas maecenas pharetra convallis posuere morbi. Congue nisi vitae suscipit tellus mauris a. Nisl tincidunt eget nullam non nisi. At imperdiet dui accumsan sit amet nulla facilisi. Suspendisse in est ante in nibh mauris cursus mattis. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna neque viverra justo nec ultrices. Tincidunt eget nullam non nisi est sit amet. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Enim nunc faucibus a pellentesque.

                            Quam elementum pulvinar etiam non quam. Duis convallis convallis tellus id interdum velit laoreet id. Nisi quis eleifend quam adipiscing vitae. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Interdum posuere lorem ipsum dolor sit amet. Fusce id velit ut tortor pretium viverra suspendisse potenti. Volutpat commodo sed egestas egestas fringilla phasellus. Vivamus arcu felis bibendum ut tristique et. Ac placerat vestibulum lectus mauris ultrices. Sit amet cursus sit amet dictum sit amet justo. Auctor neque vitae tempus quam pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Nec ultrices dui sapien eget mi. Sit amet cursus sit amet dictum sit amet. Id volutpat lacus laoreet non curabitur gravida. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Volutpat est velit egestas dui id ornare arcu. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </div>
    );
}

export default MainPage;

