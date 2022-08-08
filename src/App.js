import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { Head } from './components/Head.jsx';
import { Body } from './components/Body.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Head/>
          <Body/>
      </Router>
    </Provider>
  );
}

export default App;
