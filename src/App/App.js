import Routes from '../router';
import {useRoutes} from 'hookrouter';
import './App.css';

import dbConfig from '../database/db-config';
import { useEffect } from 'react';

const App = () => {

  const router = useRoutes(Routes);

  // React hook to create localForage instance for app
  useEffect(() => {
    dbConfig();
  })

  return router;
}

export default App;
