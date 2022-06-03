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
  const buttonElement = document.getElementById('b1');
  const results = buttonElement.getBoundingClientRect();
  app.showAlert("(X,Y): ("+results.left.toFixed()+","+results.top.toFixed()+")");
}

function CalculateTheta(){
  const app = window.require("photoshop").app;
  var p1 = {
  	x: 20,
  	y: 20
  };

  var p2 = {
  	x: 40,
  	y: 40
  };

  // angle in radians
  var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
  var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
  app.showAlert("Radians:"+angleRadians+"\nDegree"+angleDeg);
}


// document.getElementById("btnPopulate").addEventListener("click", showLayerNames);
document.getElementById("btnImgSize").addEventListener("click", imgSize);
document.getElementById("b1").addEventListener("click", GetButtonPosition);
document.getElementById("btnTheta").addEventListener("click", CalculateTheta);
