$(document).ready(function() {
  if(!$('#myCanvas').tagcanvas({
    textColour: '#000000',
    depth: 0.8,
    initial: [0.3,-0.1],
    maxSpeed: 0.03,
    minSpeed: 0.01,
    textFont: 'Lato',
    splitWidth: 1.0,
    stretchX: 2,
    shuffleTags: true,
    shape: "sphere",
    outlineMethod: 'colour',
    outlineColour: 'rgba(17, 209, 170, 0.7)',
    wheelZoom: false,
    fadeIn: 3000,
    clickToFront: 1000,
    decel: 0.9,
    freezeActive: true,
    freezeDecel: true,
  },'tags')) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
});
