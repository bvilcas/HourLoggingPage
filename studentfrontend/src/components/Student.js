import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [students, setStudents] = useState([])
    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, hours }
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1 } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField id="outlined-basic" label="Amount of Hours" variant="outlined" fullWidth
                        value={hours}
                        onChange={(e) => setHours(e.target.value)} />

                    <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                </Box>
                <h1>Students</h1>
                <Paper elevation={3} style={paperStyle}>
                    {students.map(student => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                            Id: {student.id}<br/>
                            Name: {student.name}<br/>
                            Hours: {student.hours}
                        </Paper>
                    ))
                    }
                </Paper>
            </Paper>
        </Container>
    );
}