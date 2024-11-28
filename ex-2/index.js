document.addEventListener("DOMContentLoaded", function () {
  console.log("test");
  let username = sessionStorage.getItem("username");
  console.log(username);
  if (username === null) {
    username = prompt("Quel est ton nom ?");
    sessionStorage.setItem("username", username);
  } else {
    alert("Bonjour " + username);
  }
});
