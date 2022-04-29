import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sumOperation} from "../store/operationSlice";
import {sum, difference, division,multiply} from "../store/calculatorSlice";

function Calculator() {
    const ref = useRef(null);
    const [text, setText] = useState("");
    const [operation, setOperation] = useState("");
    const dispath = useDispatch();
    const calculator = useSelector(state => state.calculator)

    const operationHendler = (operation) => {
        setOperation(operation);
        setText(text+operation);
        ref.current.focus();
    }

    const getResult = () => {
        let values = []
        switch (operation) {
            case "+":
                values = text.split("+")
                dispath(sum({first: +values[0], second: +values[1]}));
                return
            case "-":
                values = text.split("-")
                dispath(difference({first: +values[0], second: +values[1]}));
                return
            case "/":
                values = text.split("/")
                dispath(division({first: +values[0], second: +values[1]}));
                return;
            case "*":
                values = text.split("*")
                dispath(multiply({first: +values[0], second: +values[1]}));
                return;
            default: return;
        }
    }

    useEffect(() => {
        setText(calculator.value);
    }, [calculator])

    return (
        <Container maxWidth="md">
            <Box sx={{display: 'flex', flexDirection: "column", margin: '100px auto', width: "305px", padding:"10px", backgroundColor:"#d1c4e9"}}>
                <Stack sx={{mb: "20px", width: '100%'}}>
                    <input style={{padding:"10px", borderRadius:"5px"}} type="text" ref={ref} value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}/>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined">1</Button>
                    <Button variant="outlined">2</Button>
                    <Button variant="outlined">3</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("+")}} >+</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined">4</Button>
                    <Button variant="outlined">5</Button>
                    <Button variant="outlined">6</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("-")}}>-</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined">7</Button>
                    <Button variant="outlined">8</Button>
                    <Button variant="outlined">9</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("*")}}>*</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb: "20px"}}>
                    <Button variant="outlined">0</Button>
                    <Button variant="outlined" color="success">.</Button>
                    <Button variant="contained" onClick={getResult}>=</Button>
                    <Button variant="outlined" color="success" onClick={() => {operationHendler("/")}}>/</Button>
                </Stack>
            </Box>

        </Container>
    )
}

export default Calculator;