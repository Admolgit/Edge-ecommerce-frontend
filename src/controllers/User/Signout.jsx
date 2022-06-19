const Signout = (next) => {
  if(typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch("http://localhost:8000/signout", {
      method: "GET",
    })
      .then((response) => console.log(response.json()))
      .catch((err) => console.log(err));
  }
}

export default Signout;