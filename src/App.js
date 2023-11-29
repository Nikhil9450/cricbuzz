import { Switch, Route , Redirect} from 'react-router-dom';

import Layout from './components/Navbar/Layout';

import Home from './Pages/Home';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;