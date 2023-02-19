/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  // user from redux store
  const { user, loaded } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // when user load done from server and if there no user then it will redirect to login. Otherwise you are ok to go.
    if (loaded && !user.email) {
      navigate('/login', { replace: true });
    }
  }, [loaded, user])

  return children;
};

export default Protected;
