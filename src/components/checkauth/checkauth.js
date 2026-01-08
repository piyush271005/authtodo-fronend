export const checkAuth = async () => {
  try {
    const res = await fetch(
      "https://authtodo-2.onrender.com/api/v1/users/isauth",
      {
        credentials: "include", 
      }
    );

    return res.ok;
  } catch {
    return false;
  }
};
