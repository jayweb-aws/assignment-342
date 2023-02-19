import "./App.css";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
// Assignment 4
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import PageNotFound from "../pages/PageNotFound";
import Account from "../Account/Account";
import Protected from "../../util/Protected";
import { useEffect } from "react";
//Assignment 6
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import AppLoader from "../utils/loaders/AppLoader";

const App = () => {
  // getting auth state from redux store
  const { loaded } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loaded) {
      // Here will be load user from server later.
      // for now a dummy loader for 2 seconds
      const user = JSON.parse(localStorage.getItem('user'));
      setTimeout(() => {
        dispatch(login({
          firstName: user?.firstName || '',
          lastName: user?.lastName || '',
          email: user?.email || '',
          avatar: ''
        }))
      }, 2000)

      // this is dummy user setup. it will be functional when server get connected
      // dispatch(login({ username: "test", email: "test@example.com", avatar: "" }));
    }
  })

  return (
    <div className="App">
      {/* AppLoader component will be mounted(rendered in DOM or UI) until user get loaded from server. and when user will be loaded AppLoader component wil be unmounted(means invisible from UI or DOM) */}
      {!loaded && <AppLoader />}
      <Navigation />
      <h1 style={{ margin: 0 }}>ravenous</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
