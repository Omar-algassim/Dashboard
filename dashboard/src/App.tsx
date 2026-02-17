import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './app/dashboard/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}