import { useContext, useEffect } from "react";
import { testApiRoute1 } from "../services/api";
import AuthContext from "../context/AuthProvider";

function Profile() {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth) return;

    const params = {
      Authorization: "Bearer " + auth,
    };

    testApiRoute1(params)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  }, [auth]);

  return <h1>Profile</h1>;
}

export default Profile;
