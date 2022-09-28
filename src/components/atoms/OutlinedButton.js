import { Button } from '@mui/material';

function OutlinedButton(props){
    return (
        <Button onClick={props.onClick} variant="outlined" size={"large"}>{props.content}</Button>
    );
}

export default OutlinedButton;