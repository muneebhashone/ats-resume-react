import { Routes, Route } from "react-router-dom";
import { GalleryPage } from "./pages/GalleryPage";
import { ResumeViewerPage } from "./pages/ResumeViewerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="/resume/:slug" element={<ResumeViewerPage />} />
    </Routes>
  );
}

export default App;
