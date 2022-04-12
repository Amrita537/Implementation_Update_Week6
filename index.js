function showLayerNames() {
    const app = window.require("photoshop").app;
    const allLayers = app.activeDocument.layers;
    const allLayerNames = allLayers.map(layer => layer.name);
    const sortedNames = allLayerNames.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    document.getElementById("layers").innerHTML = `
      <ul>${
        sortedNames.map(name => `<li>${name}</li>`).join("")
      }</ul>`;
}

// ************Accessing File Storage****************//

async function ReadStorageFile() {
  const app = window.require("photoshop").app;
    app.showAlert("button clicked");
}

//******************flatmagic code 1**********************//
// const fs = uxp.storage.localFileSystem;
// const st = uxp.storage;
// const app = window.require("photoshop").app;
// function ReadStorageFile() {
//     app.showAlert("button clicked");
//       open a json palette
//       const file = await fs.getFileForOpening({
//           allowMultiple: false,
//           types: st.fileTypes.text
//       });
//       let paletteText = await file.read();
//       if (typeof paletteText !== undefined)
//           setPaletteChange(JSON.parse(paletteText));
// }


//******************flatmagic code 2**********************//

// const fs = uxp.storage.localFileSystem;
// const st = uxp.storage;
// const app = window.require("photoshop").app;
// async function ReadStorageFile() {
//   app.showAlert("button clicked");
//   var newScenes = await readFiles(true);
// }



//*****************Source 1******************************//
// https://developer.adobe.com/xd/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/


// const fs = uxp.storage.localFileSystem;
// const st = uxp.storage;
// const app = window.require("photoshop").app;
// function ReadStorageFile() {
//   const folder = await fs.getFolder({initialDomain = domains.userDocuments});
//   const file = await fs.getFileForOpening({initialLocation = folder});
//   if (!file) {
//       // no file selected
//       return;
//   }
//   const text = await file.read();
//   const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
//   if (files.length === 0) {
//       // no files selected
//   }
// }

//*****************Source 2******************************//
// https://developer.adobe.com/xd/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/File/

//*****************Source 3******************************//
// https://adobexdplatform.com/plugin-docs/reference/uxp/storage-index.html


document.getElementById("btnPopulate").addEventListener("click", showLayerNames);
document.getElementById("btnClick").addEventListener("click", ReadStorageFile);
