import React from 'react';
import './Account.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings/Settings';
import Search from './Search/Search';
import Sidebar from './Sidebar/Sidebar';
import Chats from './Chats/Chats';

const Account = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <section className="py-5 w-11/12 mx-auto text-start">
                <div className="container">

                    <div className="bg-white shadow rounded-lg grid grid-cols-5">
                        <Sidebar />
                        <div className="h-full ml-2 p-3 space-y-2 col-span-4  bg-gray-100 text-gray-900">
                            <Routes>
                            
                                <Route path="/" element={<Dashboard/>}></Route>
                                <Route path="/chat" element={<Chats/>}></Route>
                                
                                <Route path="/settings" element={<Settings/>}></Route>
                                <Route path="/search" element={<Search/>}></Route>
                                <Route path="/*" element={<Outlet />} />
                                
                            </Routes>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Account;