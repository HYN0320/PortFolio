import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

// 프로젝트 상세 페이지
import Curate from "./pages/project/Curate";
import SkinCheck from "./pages/project/SkinCheck";
import Finmo from "./pages/project/Finmo";
import RunX3 from "./pages/project/RunX3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Home />} />

        {/* 이력서 */}
        <Route path="/resume" element={<Resume />} />

        {/* 프로젝트 상세 */}
        <Route path="/projects/curate" element={<Curate />} />
        <Route path="/projects/skincheck" element={<SkinCheck />} />
        <Route path="/projects/finmo" element={<Finmo />} />
        <Route path="/projects/runx3" element={<RunX3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
