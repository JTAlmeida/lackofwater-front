import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Game from './pages/Game';
import SignIn from './pages/SignIn';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import { ReRenderProvider } from './contexts/ReRenderContext';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <ReRenderProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRouteGuard>
                    <Game />
                  </ProtectedRouteGuard>
                }
              />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </Router>
        </ReRenderProvider>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
