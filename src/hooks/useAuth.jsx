import { useEffect, useState } from "react";

export const useAuth = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [accessToken, setAccessToken] = useState("");
  
    useEffect(() => {
      const checkLoginStatus = () => {
        const token = localStorage.getItem('accessToken'); // Nome chiave nel localStorage

        if (token) {
          setIsLogged(true);
          setAccessToken(token);
        } else {
          setIsLogged(false);
          setAccessToken("");
        }
      };
  
      checkLoginStatus(); // Controlla lo stato iniziale
  
      // Aggiungi un listener per i cambiamenti nel localStorage (opzionale)
      const handleStorageChange = () => {
        checkLoginStatus();
      };

      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
  
    return {isLogged, accessToken};
  };