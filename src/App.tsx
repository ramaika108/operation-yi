import React, {useEffect, useState} from 'react';
import './styles/main.sass';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import {AuthContext} from './context/AuthContext';

function App() {

    const [authToken, setAuthToken] = useState<string>()

    const getAuthToken = async () => {
        let res = await fetch('/auth?user=USERNAME');
        let token = res.headers.get("Authorization")
        if (token){
            setAuthToken(token);
            console.log(token)
        }
    }
    useEffect(() => {
        getAuthToken()
    }, [])

  return (
    <>
        <AuthContext.Provider value={authToken!}>
            <Aside />
            <Main />
            <Footer />
        </AuthContext.Provider>
    </>
  );
}

export default App;
