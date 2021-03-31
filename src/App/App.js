import Routes from '../router';
import {useRoutes} from 'hookrouter';
import './App.css';

function App() {
  const router = useRoutes(Routes);
  return router;
}

export default App;
