import React, {useEffect, useState} from 'react';
import './styles/main.sass';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

    const [authToken, setAuthToken] = useState<string>()

    const getAuthToken = async () => {
        let res = await fetch('/auth?user=USERNAME');
        let token = res.headers.get("Authorization")
        if (token){
            setAuthToken(token);
        }
    }
    useEffect( () => {
        getAuthToken()
    }, [authToken])

  return (
    <>
        <Aside />
        {authToken &&  <Main authToken={authToken}/>}
        <Footer />
    </>
  );
}

export default App;
