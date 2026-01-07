export const checkAuth = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/v1/users/isauth",
      {
        credentials: "include", 
      }
    );

    return res.ok;
  } catch {
    return false;
  }
};
