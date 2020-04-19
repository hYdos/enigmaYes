function addObfClass(clazz) {
  let e = document.createElement("div");
  e.classList.add("classesBoxTheme", "list-group-item", "list-group-item-action");
  e.id = clazz;
  e.innerText = clazz;
  e.setAttribute("data-toggle", "list");
  e.setAttribute("href", "#" + clazz + "-code");
  e.setAttribute("role", "tab");
  e.setAttribute("aria-controls", clazz);
  obfClassDiv.appendChild(e);
}
function addDeobfClass() {

}
function removeObfClass() {

}
function removeObfClass() {

}
