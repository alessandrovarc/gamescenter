import React, { useEffect, useState } from "react";
import { Box, Button, Link, Modal, TextField, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const withModalstyle = {
    all: "unset",
    position: 'absolute',
    top: '65px',
    right: '20px',
    width: 350,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box"
  };
const withoutModalstyle = {
    all: "unset",
    position: 'relative',
    width: 330,
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box",
    margin: "auto"
  };
  
const Login = ({withModal = true, emailFromRegistration, passwordFromRegistration}) => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState(emailFromRegistration || "");
    const [password,setPassword] = useState(passwordFromRegistration || "");
    const {isLogged} = useAuth();
    const navigate = useNavigate("/");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        localStorage.setItem("accessToken", "");
        window.dispatchEvent(new Event("storage"));
        window.history.replaceState({}, '');
        navigate("/");
        handleClose();
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

        }catch (error) {
            console.error('Errore durante la fetch:', error);
          }
    }



    return  withModal ? (
        <>
        {isLogged ?
            <i className="bi bi-box-arrow-left icons" onClick={handleLogout}></i>
            :
            <i className="bi bi-person-circle icons" onClick={handleOpen}></i>
        }
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box sx={withModalstyle}>
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
            </Box>
        </Modal>
        </>
    ) : (
        <div className="m-auto">
            <h5>Accedi per scoprire migliaia di giochi!</h5>
            <Box sx={withoutModalstyle}>
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
            </ Box>
        </div>
    )
}

export default Login