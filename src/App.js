import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { Head } from './components/Head.jsx';
import { Body } from './components/Body.jsx';
import styled from 'styled-components';
// import image from './image/pug_amarillo.jpg';
// import image from './image/cahorros.jpg';
// import image from './image/pug_anteojos.jpg';
// import image from './image/pug_gorra.jpg';
// import image from './image/pasto.jpg';
// import image from './image/dark.jpg';
import image from './image/w.jpeg';

function App() {
  return (
    <Fondo>
      <Provider store={store}>
        <Router>
            <Head/>
            <Body/>
        </Router>
      </Provider>
    </Fondo>
  );
}

export default App;

const Fondo = styled.div`
  min-height: 100vh;
  max-width: 100vw;
    &::before{
        content: '';
        position: fixed;
        top: 0vh;
        min-width: 100vw;
        min-height: 100vh;
        background: url(${image});
        background-repeat: repeat;
        opacity: 0.9;
        z-index: -1;
    }
`;
