import { Button } from '@mui/material';

function TextButton(props){
    return (
        <Button variant="text" size={"small"}>{props.content}</Button>
    );
}

export default TextButton;