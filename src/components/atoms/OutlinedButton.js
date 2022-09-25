import { Button } from '@mui/material';

function OutlinedButton(props){
    return (
        <Button variant="outlined" size={"large"}>{props.content}</Button>
    );
}

export default OutlinedButton;