import React from "react";
import DrawerAppBar from "../atoms/DrawerAppBar";
import Paper from '@mui/material/Paper';
import {styled} from "@mui/material/styles";
import Footer from "../atoms/Footer";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    margin: '120px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function PastRecordComparePage(){
    return (
        <div>
            <DrawerAppBar/>
            <Item>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Lectus magna fringilla urna porttitor. Neque gravida in fermentum et sollicitudin ac orci phasellus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Semper eget duis at tellus at urna condimentum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc id. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Nullam non nisi est sit. Sed arcu non odio euismod lacinia at. Malesuada fames ac turpis egestas integer eget aliquet. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis.

                Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Pellentesque massa placerat duis ultricies. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio. Ut tristique et egestas quis ipsum suspendisse ultrices. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Nulla facilisi cras fermentum odio. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Leo in vitae turpis massa. Bibendum arcu vitae elementum curabitur vitae nunc sed. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Duis tristique sollicitudin nibh sit.

                Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Facilisi etiam dignissim diam quis. Id leo in vitae turpis massa sed elementum. Porttitor massa id neque aliquam vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Quisque sagittis purus sit amet volutpat consequat. Tellus id interdum velit laoreet id donec ultrices tincidunt. Dui sapien eget mi proin sed libero enim sed faucibus. Id diam maecenas ultricies mi eget mauris. Hendrerit gravida rutrum quisque non tellus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Sagittis purus sit amet volutpat consequat mauris nunc congue. Mattis pellentesque id nibh tortor id aliquet lectus proin. Est ultricies integer quis auctor elit sed vulputate mi. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.

                Ut eu sem integer vitae. Pharetra vel turpis nunc eget. Id velit ut tortor pretium viverra suspendisse potenti nullam. Augue eget arcu dictum varius duis. Nisi est sit amet facilisis magna etiam. Sed blandit libero volutpat sed cras ornare arcu dui. Posuere sollicitudin aliquam ultrices sagittis orci. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sit amet porttitor eget dolor morbi non arcu risus quis. Vitae turpis massa sed elementum. Viverra adipiscing at in tellus. Felis bibendum ut tristique et egestas quis. Ac ut consequat semper viverra nam libero justo laoreet sit. Sed nisi lacus sed viverra.
            </Item>
            <Footer/>
        </div>
    );
}

export default PastRecordComparePage;