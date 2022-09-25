import { TextField } from '@mui/material';

function TextInput(props){
    return (
        <TextField label={props.label} type={props.type}/>
    );
}

export default TextInput;