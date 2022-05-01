import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sumOperation} from "../store/operationSlice";
import {sum, difference, division,multiply} from "../store/calculatorSlice";
import {evaluate} from "mathjs"

function Calculator() {
    const ref = useRef(null);
    const [text, setText] = useState("");
    const [simbol, setSimbol] = useState(false);
    const [operation, setOperation] = useState(false);
    const dispath = useDispatch();
    const calculator = useSelector(state => state.calculator)


    const actionNumber = (num) => {
        setText(text + num)
        setSimbol(false);
        ref.current.focus();
    } 
    const changeInputHendler = (e) => {
        setSimbol(false);
        setText(e.target.value)
        ref.current.focus(); 
    }
    const operationHendler = (operation) => {
        if(!simbol) {
            setText(text+operation);
            setSimbol(true); 
        }
        ref.current.focus();
    }

    const getResult = (e) => {
        let result
        try {
           result = evaluate(text);
        } catch(error) {
            throw Error("ошибка ввода", error)
        }
        setText(result)  
    }

    return (
        <Container maxWidth="md">
            <Box sx={{display: 'flex', flexDirection: "column", margin: '100px auto', width: "305px", padding:"10px", backgroundColor:"#d1c4e9"}}>
                <Stack sx={{mb: "20px", width: '100%'}}>
                    <input 
                        style={{padding:"10px", borderRadius:"5px"}}
                        type="text" ref={ref}
                        value={text}
                        onChange={changeInputHendler}
                    />
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined" onClick={() => {actionNumber(1)}}>1</Button>
                    <Button variant="outlined" onClick={() => {actionNumber(2)}}>2</Button>
                    <Button variant="outlined" onClick={() => {actionNumber(3)}}>3</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("+")}} >+</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined" onClick={() => {actionNumber(4)}}>4</Button>
                    <Button variant="outlined" onClick={() => {actionNumber(5)}}>5 </Button>
                    <Button variant="outlined" onClick={() => {actionNumber(6)}}>6</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("-")}}>-</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined" onClick={() => {actionNumber(7)}}>7</Button>
                    <Button variant="outlined" onClick={() => {actionNumber(8)}}>8</Button>
                    <Button variant="outlined" onClick={() => {actionNumber(9)}}>9</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("*")}}>*</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined" onClick={() => {actionNumber(0)}}>0</Button>
                    <Button variant="outlined" color="success" onClick={() => {actionNumber(".")}}>.</Button>
                    <Button variant="contained" onClick={getResult}>=</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("/")}}>/</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px", width: '100%'}}>
                    <Button variant="outlined" sx={{width: '100%'}} onClick={() => {setText("");  ref.current.focus(); }}>Очистить</Button>
                </Stack>
            </Box>

        </Container>
    )
}

export default Calculator;