import { BrowserRouter } from 'react-router-dom';

import { AppRouter, Navbar } from './components';

import './styles/App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="app">
      <AppRouter />
    </div>
  </BrowserRouter>
);

export default App;
