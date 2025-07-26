import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "@/pages/Home";
import Articles from "@/pages/Articles";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        {/* <Route path="/article/:id" element={<ArticleDetail />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
