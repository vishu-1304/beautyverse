import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import MainLayout from './layouts/MainLayout';

// Import all pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import BeautyQuiz from './pages/BeautyQuiz';
import Recommendation from './pages/Recommendation';
import FaceCanvasStudio from './pages/FaceCanvasStudio';
import BeautyPassport from './pages/BeautyPassport';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.EXPLORE} element={<Explore />} />
          <Route path={ROUTES.QUIZ} element={<BeautyQuiz />} />
          <Route path={ROUTES.RECOMMENDATION} element={<Recommendation />} />
          <Route path={ROUTES.STUDIO} element={<FaceCanvasStudio />} />
          <Route path={ROUTES.PASSPORT} element={<BeautyPassport />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
