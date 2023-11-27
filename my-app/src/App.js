import { Routes, Route } from "react-router-dom";
import 'reset-css';
import './assets/styles/style.scss';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Business from './components/business/Business';
import Entertainment from './components/entertainment/Entertainment';
import News from './components/allNews/allNews';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/allNews" element={<News />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
