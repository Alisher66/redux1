import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Calculator() {
    return(
        <Container maxWidth="md">
            <Box sx={{display:'flex', flexDirection:"column", alignItems:"center", mt:"100px"}}>
                <Stack>
                    i
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb:"20px"}}>
                    <Button variant="outlined">1</Button>
                    <Button variant="outlined">2</Button>
                    <Button variant="outlined">3</Button>
                    <Button variant="outlined">+</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb:"20px"}}>
                    <Button variant="outlined">4</Button>
                    <Button variant="outlined">5</Button>
                    <Button variant="outlined">6</Button>
                    <Button variant="outlined">-</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb:"20px"}}>
                    <Button variant="outlined">7</Button>
                    <Button variant="outlined">8</Button>
                    <Button variant="outlined">9</Button>
                    <Button variant="outlined">*</Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{mb:"20px"}}>
                    <Button variant="outlined">0</Button>
                    <Button variant="outlined">.</Button>
                    <Button variant="contained">=</Button>
                    <Button variant="outlined">/</Button>
                </Stack>
            </Box>

        </Container>
        )
}

export default Calculator;