import { TextField } from '@mui/material';

function TextInput(props){
    return (
        <TextField label={props.label} type={props.type} onChange={props.onChange} onKeyDown={props.onKeyDown}/>
    );
}

export default TextInput;