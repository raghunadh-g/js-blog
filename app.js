let toc = document.querySelector("#toc");
let list = document.querySelector("#blog-toc-list");

console.log(list);
toc.addEventListener("click", function () {
  //   console.log("clicked");
  if (list.classList.contains("hide")) {
    list.classList.remove("hide");
  } else {
    list.classList.add("hide");
  }
});
