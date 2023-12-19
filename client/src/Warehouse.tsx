import { BrowserRouter, Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter, redirect } from 'react-router-dom'
import Lander from './Lander/Lander';
import { getAuthUser } from './firebase';
import App from './App/App';
import UserProtectedRoute from './ProtectedRoutes';

const Warehouse = () => {

    const user = getAuthUser();

    return (
        <section id="root-app" className="dark">

            <BrowserRouter>
                <Routes>
                    <Route index element={<Lander />} />
                    <Route path='/app' element={
                        <UserProtectedRoute user={user} element={<App user={user!} />} />
                    } />
                </Routes>
            </BrowserRouter>

        </section>
    )

}

export default Warehouse;