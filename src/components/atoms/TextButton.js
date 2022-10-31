import { Button } from '@mui/material';

function TextButton(props){
    return (
        <Button onClick={props.onClick} variant="text" size={"large"}>{props.content}</Button>
    );
}

export default TextButton;