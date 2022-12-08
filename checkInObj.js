function greet(lang) {
  let language = {
    eng: "welcome",
    ar: "مرحبا",
    french: "pona pitte",
  };

  if (language.hasOwnProperty(lang)) {
    console.log(language[lang]);
  } else console.log("NOoooo");
}

greet("eng");
