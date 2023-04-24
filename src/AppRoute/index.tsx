import {
    BrowserRouter,
    Routes,
    Route,
    Navigator,
    redirect
} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';


const AppRoutes = () => (
    <BrowserRouter>


        <Routes>

            <Route
                path='/login'
                element={<SignIn />}
            />

            <Route
                path='/'
                element={<Dashboard />}
            />

        </Routes>


    </BrowserRouter>
);

export { AppRoutes };