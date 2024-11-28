let user = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !",
};

document.addEventListener("DOMContentLoaded", function () {
  let userJson = JSON.stringify(user);
  sessionStorage.setItem("user", userJson);

  if (sessionStorage.getItem("user") === null) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
  }
});
