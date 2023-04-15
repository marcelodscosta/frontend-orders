import {
    BrowserRouter,
    Routes,
    Route,
    Navigator,
    redirect
} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { AuthProvider } from '../contexts/Authentication/AuthProvider';

const AppRoutes = () => (
    <BrowserRouter>

        <AuthProvider>

            <Routes>

                <Route
                    path='/login'
                    element={<SignIn />}
                />

                <Route
                    path='/dashboard'
                    element={<Dashboard />}
                />

            </Routes>

        </AuthProvider>

    </BrowserRouter>
);

export { AppRoutes };