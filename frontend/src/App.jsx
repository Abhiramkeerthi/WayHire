import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import UploadResume from "./pages/UploadResume";
import Loading from "./pages/Loading";
import ATSReport from "./pages/ATSReport";
import Roadmap from "./pages/Roadmap";
import Interview from "./pages/Interview";
import FinalReport from "./pages/FinalReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/ats-report" element={<ATSReport />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/final-report" element={<FinalReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;