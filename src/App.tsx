import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Market } from './pages/market'
import  Layout  from './pages/Layout'
import { User } from './pages/user'
import { basename } from 'node:path/win32';
// import { DealerRegister } from './pages/dealerRegister'
// import { FarmerRegister } from './pages/farmerRegister'
// import { Login } from './pages/login'

//ctest_1 pull de jo
function App() {  
  return (
    <div className='corps'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Market" element={<Market />} />
            <Route path="User" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
