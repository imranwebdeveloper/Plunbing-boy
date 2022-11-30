import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-4xl   rounded-full p-2 flex justify-center items-center cursor-pointer">
      {user && (
        <img
          src={user.photoURL}
          alt=""
          className=" w-6 h-6 rounded-full"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default UserProfile;
