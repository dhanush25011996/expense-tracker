export const useGetUserInfo = () => {
  // Retrieve the value from localStorage
  const authDataFromLocalStorage = localStorage.getItem("auth");

  // Check if the retrieved value is a non-empty string
  const { name, profilePhoto, userID, isAuth } = authDataFromLocalStorage
    ? JSON.parse(authDataFromLocalStorage)
    : {};

  return { name, profilePhoto, userID, isAuth };
};
