let data = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !",
};

let str =
  '{"firstName":"Colonel","lastName":"Sanders","motto":"Il est bon mon poulet"}';

document.addEventListener("DOMContentLoaded", function () {
  let kfc = JSON.parse(str);
  console.log(kfc);

  let HarryBow = JSON.stringify(data);
  console.log(HarryBow);
});
