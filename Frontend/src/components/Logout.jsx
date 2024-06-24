import React from "react";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Create a new object with all properties of authUser, but set user to null
      setAuthUser({
        ...authUser, // Copy all properties from authUser
        user: null // Change the user property to null
      });

      // Remove the user information from localStorage
      localStorage.removeItem("users");
      
      window.location.reload();

      // Show a message that the user has logged out
      alert("Logged out");
    } catch (error) {
      // Show an error message if something goes wrong
      alert(error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
