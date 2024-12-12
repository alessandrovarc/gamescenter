import React, { useState } from "react";
import { Box, Button, Link, Modal, TextField, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '65px',
    right: '20px',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem"
  };
  
const Login = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [storedValue, setStoredValue] = useState(localStorage.getItem('accessToken') || '');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        localStorage.setItem("accessToken", "");
        window.dispatchEvent(new Event("storage"));
        setStoredValue("");
    }

     const fetchLogin = async () => {
        try {
            const response = await fetch ('http://localhost:3001/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
            
                }),
                
            });
            console.log('Dati ricevuti:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
      
                const data = await response.json(); // Parsing della risposta
                console.log('Dati ricevuti:', data);
                localStorage.setItem("accessToken", data.accessToken);
                window.dispatchEvent(new Event("storage"));
                setStoredValue(data.accessToken); // Aggiorna lo stato

        }catch (error) {
            console.error('Errore durante la fetch:', error);
          }
    }



    return (
        <>
        <i className="bi bi-person-circle icons" onClick={handleOpen}></i>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                { !storedValue ? //non sono loggato? 
                    <>
                        <TextField
                            id="outlined-email"
                            label="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="example@mail.com"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Button variant="contained" onClick={fetchLogin}>Accedi</Button>
                        <Link href="/registration" underline="hover" variant="caption">
                            Non sei registrato? Clicca qui per registrarti
                        </Link>
                    </>
                    :
                    <>
                        <Typography variant="">
                            Ciao, Utente1223
                        </Typography>
                        <Button variant="contained">Impostazioni</Button>
                        <Button variant="contained" onClick={handleLogout}>Esci</Button>
                    </>
            }
            </Box>
        </Modal>
        </>
    )
}

export default Login