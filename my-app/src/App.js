import { Routes, Route } from "react-router-dom";
import 'reset-css';
import './assets/styles/style.scss';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Business from './components/business/Business';
import Entertainment from './components/entertainment/Entertainment';
import AllNews from './components/allNews/allNews';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import NewForm from "./components/form/NewForm";
import OneItem from "./components/allNews/oneItem/OneItem"

function App() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/allNews" element={<AllNews />} />
            <Route path="/all-news/one-item" element={<OneItem />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/subscribe/form" element={<NewForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
