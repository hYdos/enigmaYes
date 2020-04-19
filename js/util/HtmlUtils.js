const obfClassDiv = document.getElementById("obfuscatedClasses");
const classCodeDiv = document.getElementById("codeView")

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

function addObfClassCode(name, code) {
  let codeContent = document.createElement("div");
  codeContent.textContent = code;
  codeContent.setAttribute("role", "tabpanel");
  codeContent.classList.add("tab-pane", "fade");
  codeContent.id = name + "-code";
  codeContent.setAttribute("aria-labelledby", name);
  classCodeDiv.appendChild(codeContent);

}

function addDeobfClassPkg(classPackage, classNames) {
  let divElement = document.createElement("div");
  divElement.classList.add("btn-group", "deobfuscatedClassSpacer");

  let dropdownTitleElement = document.createElement("button");
  dropdownTitleElement.classList.add("btn", "btn-secondary", "btn-sm", "dropdown-toggle", "themeTextSmall");
  dropdownTitleElement.setAttribute("data-toggle", "dropdown");
  dropdownTitleElement.setAttribute("aria-haspopup", "true");
  dropdownTitleElement.setAttribute("aria-expanded", "false");
  dropdownTitleElement.innerText = classPackage;

  let classesDiv = document.createElement("div");
  classesDiv.classList.add("dropdown-menu", "dropdown-menu-right");

  for (const className of classNames) {
    let classElement = document.createElement("button");
    classElement.classList.add("dropdown-item");
    classElement.setAttribute("type", "button");
    classElement.innerText = className;
    classesDiv.appendChild(classElement);
  }

  divElement.appendChild(dropdownTitleElement);
  divElement.appendChild(classesDiv);
  document.getElementById("deobfuscatedClasses").appendChild(divElement);
}


function removeClass(id) {
  $("#" + id).hide();
}
