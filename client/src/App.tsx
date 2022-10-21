import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter, Navbar } from './components';
import { AuthContext } from './context';

import './styles/App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('authMyApp')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />

        <div className="app">
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
export default App;
