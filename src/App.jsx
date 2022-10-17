import Inicio from './routes/Inicio';
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import DashboardProfile from './routes/DashboardProfile';
import SignOut from './routes/SignOut';
import ProfilePublicview from './routes/ProfilePublicview';
import ChooseUserName from './routes/ChooseUserName';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path='Login' element={<Login/>}/>
          <Route path='ChooseUserName' element={<ChooseUserName/>}/>
          <Route path='Dashboard' element={<Dashboard/>}/>
          <Route path='Dashboard/profile' element={<DashboardProfile/>}/>
          <Route path='SignOut' element={<SignOut/>}/>ç
          <Route path='u/:username' element={<ProfilePublicview/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
