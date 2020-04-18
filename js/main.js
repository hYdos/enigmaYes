const obfClassDiv = document.getElementById("obfuscatedClasses");
const classCodeDiv = document.getElementById("codeView")

const obfClasses = ["class_1", "class_2", "class_3", "class_4", "class_5", "class_6", "class_7", "class_8"];
const obfClassesStuff = {
  "class_1":"this\nis\nsome\nepic\nbalo\ncode",
  "class_2":"how cursed is this\n lol"
}

addClasses(obfClasses, obfClasses);


function addClasses(obfuscatedClasses, deobfuscatedClasses) {
  let idIndex = 0
  for(let clazz of deobfuscatedClasses){
    let e = document.createElement("div");
    e.classList.add("classesBoxTheme", "list-group-item", "list-group-item-action");
    e.id = clazz;
    e.innerText = clazz;
    e.setAttribute("data-toggle", "list");
    e.setAttribute("href", "#" + clazz + "-code");
    e.setAttribute("role", "tab");
    e.setAttribute("aria-controls", clazz);
    obfClassDiv.appendChild(e);
    idIndex++;
  }
  let deobfuscatedClassesText = document.createElement("a");



  //set the class content
  for(let className in obfClassesStuff){
    let classCode = obfClassesStuff[className];
    let codeContent = document.createElement("div");
    codeContent.textContent = classCode;
    codeContent.setAttribute("role", "tabpanel");
    codeContent.classList.add("tab-pane", "fade");
    codeContent.id = className + "-code";
    codeContent.setAttribute("aria-labelledby", className);
    classCodeDiv.appendChild(codeContent);
  }
}
