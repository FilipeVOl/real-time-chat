import DefaultLayout from "./layouts/DefaultLayout";
import ChatComponent from "./modules/Chat";
import Dashboard from "./modules/Dashboard";
import Form from "./modules/Form";
import { Routes, Route, Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null;
  console.log("isLoggedInn >", isLoggedIn);

  if (!isLoggedIn && ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)) {
    return children;
  } else if (!isLoggedIn) {
    return <Navigate to="/users/sign_in" />;
  } else if (isLoggedIn && ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <DefaultLayout />
        }
      >
        <Route path="form" element={<Form />} /> 
        <Route path="chat/:id" element={<ChatComponent />} />
      </Route>


      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={true} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={false} />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
