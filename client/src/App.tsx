import './App.css'
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom"
import {CreatePayAttention} from "./pages/CreatePayAttention/CreatePayAttention";
import {PayAttentionAdvertise} from "./components/PayAttentionAdvertise/PayAttentionAdvertise";
import {Login} from "./pages/Login/Login";
import {Profile} from "./pages/Profile/Profile";
import {News} from "./pages/News/News";
import {PayAttention} from "./pages/PayAttention/PayAttention";
import {Registration} from "./pages/Registration/Registration";
import {Admin} from "./pages/Admin/Admin";
import {BanUser} from "./pages/BanUser/BanUser";
import {CreateUser} from "./pages/CreateUser/CreateUser";

function App() {

    return (
        <>
            <Navbar/>
            <div className={'container'}>
                <Routes>
                    <Route path='/'
                           element={<News/>}/>
                    <Route path='/login'
                           element={<Login/>}/>
                    <Route path='/registration'
                           element={<Registration/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/profile'
                           element={<Profile/>}/>
                    <Route path='/pay-attention'
                           element={<PayAttention/>}/>
                    <Route path='/pay-attention/create'
                           element={<CreatePayAttention/>}/>
                    <Route path='/admin'
                           element={<Admin/>}/>
                    <Route path='/admin/create-user'
                           element={<CreateUser/>}/>
                    <Route path='/admin/ban-user'
                           element={<BanUser/>}/>
                </Routes>
            </div>
            <PayAttentionAdvertise/>
        </>
    )
}

export default App
