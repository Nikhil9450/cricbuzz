import { Routes, Route , Navigate} from 'react-router-dom';
import Layout from './components/Navbar/Layout';
import Home from './components/Pages/Home';
import Page2 from './components/Pages/Page2';
import FetchAll from './components/API/FetchAll';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FetchAll />} />
        <Route path="/otherPage" element={<Page2/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;