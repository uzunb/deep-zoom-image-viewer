// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// If you like my work, please consider supporting it at https://www.patreon.com/iangilman

var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "2",
      TileSize: "256",
      Size: {
        Width:  "13920",
        Height: "10200"
      }
    }
  };
  
  var viewer = OpenSeadragon({
    id: "openseadragon1",
    prefixUrl: "//openseadragon.github.io/openseadragon/images/",
    tileSources: duomo
  });
  
  