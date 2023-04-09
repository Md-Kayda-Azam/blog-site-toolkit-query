import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./features/Blog/Blog";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Admin from "./features/Admin/Admin";
import "./App.css";
import LifeStyle from "./features/LifeStyle/LifeStyle";
import Fashion from "./features/Fashion/Fashion";
import Travel from "./features/Travel/Travel";
import PostFormats from "./features/PostFormats/PostFormats";
import LifeStyleTable from "./components/LifeStyle/LifeStyle";
import FashionTable from "./components/FashionTable/FashionTable";
import TravelTable from "./components/TravelTable/TravelTable";
import BlogTable from "./components/BlogTable/BlogTable";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="life-style" element={<LifeStyle />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="travel" element={<Travel />} />
            <Route path="post-formats" element={<PostFormats />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/dashboard" element={<Admin />}>
            <Route index element={<LifeStyleTable />} />
            <Route path="fashion-table" element={<FashionTable />} />
            <Route path="travel-table" element={<TravelTable />} />
            <Route path="blog-table" element={<BlogTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
