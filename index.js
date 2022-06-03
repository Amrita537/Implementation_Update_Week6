function showLayerNames() {
    const app = window.require("photoshop").app;
    // const allLayers = app.activeDocument.layers;
    // const allLayerNames = allLayers.map(layer => layer.name);
    // const sortedNames = allLayerNames.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    // document.getElementById("layers").innerHTML = `
    //   <ul>${
    //     sortedNames.map(name => `<li>${name}</li>`).join("")
    //   }</ul>`;
    app.showAlert("clicked");
}

// function ShadowClicked() {
//     const app = window.require("photoshop").app;
//     app.showAlert("clicked");
// }

function imgSize(){
    const app = window.require("photoshop").app;
    // app.showAlert("clicked");
    var myImg = document.querySelector("#sk");
    var realWidth = myImg.naturalWidth;
    var realHeight = myImg.naturalHeight;
    app.showAlert("Original width=" + realWidth + ", " + "Original height=" + realHeight + "\n center: (x,y): ("+realWidth/2+","+realHeight/2+")" );
}

function GetButtonPosition(){
  const app = window.require("photoshop").app;
  const helloElement = document.getElementById('b1');
  const results = helloElement.getBoundingClientRect();
  app.showAlert("(X,Y): ("+results.left.toFixed()+","+results.top.toFixed()+")");
}

// document.getElementById("btnPopulate").addEventListener("click", showLayerNames);
document.getElementById("btnImgSize").addEventListener("click", imgSize);
document.getElementById("b1").addEventListener("click", GetButtonPosition);
