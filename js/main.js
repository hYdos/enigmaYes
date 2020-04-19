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


function addClasses(deobfuscatedClasses, obfuscatedClasses) {
  for(let clazz of obfuscatedClasses){
    addObfClass(clazz);
  }

  addDeobfClassPkg("net.minecraft.util", ["ChatUtil", "Commonl18n", "DyeColor", "Formatting", "IdList", "Identifier"]);
}
