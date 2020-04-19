const obfClassDiv = document.getElementById("obfuscatedClasses");
const classCodeDiv = document.getElementById("codeView")

const obfClasses = ["class_1", "class_2", "class_3", "class_4", "class_5", "class_6", "class_7", "class_8"];
const obfClassesCode = {
  "class_1":"this\nis\nsome\nepic\nbalo\ncode",
  "class_2":"how cursed is this\n lol"
}

const deobfClasses = ["class_1", "class_2", "class_3", "class_4", "class_5", "class_6", "class_7", "class_8"];
const deobfClassesCode = {
  "class_1":"this\nis\nsome\nepic\nbalo\ncode",
  "class_2":"how cursed is this\n lol"
}


$("#connectionalert").hide()

addClasses(obfClasses, obfClasses);


function addClasses(obfuscatedClasses, deobfuscatedClasses) {
  for(let clazz of deobfuscatedClasses){
    addObfClass(clazz);
  }

  //set the class content
  for(let className in obfClassesCode){
    let classCode = obfClassesCode[className];
    let codeContent = document.createElement("div");
    codeContent.textContent = classCode;
    codeContent.setAttribute("role", "tabpanel");
    codeContent.classList.add("tab-pane", "fade");
    codeContent.id = className + "-code";
    codeContent.setAttribute("aria-labelledby", className);
    classCodeDiv.appendChild(codeContent);
  }
}
