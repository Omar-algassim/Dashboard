import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './app/dashboard/page';
import Analytic from './app/analytics/page';
import Team from './app/team/page';
import Project from './app/projects/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytic />} />
        <Route path='/team' element={<Team />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}