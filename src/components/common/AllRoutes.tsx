import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import Authors from "@/pages/Authors";
import ArticleDetails from "@/pages/ArticleDetails";
import AuthorDetails from "@/pages/AuthorDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
