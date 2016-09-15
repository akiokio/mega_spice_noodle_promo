(function() {
  var theCanvas = document.getElementById('spice_level_canvas');

  if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {
      setTimeout(function(){
        ctx.fillStyle = "#cc3333";
        ctx.fillRect(5,3,25,theCanvas.height);
      }, 0);

      setTimeout(function(){
        ctx.fillStyle = "#cc3333";
        ctx.fillRect(35,3,25,theCanvas.height);
      }, 1000);

      setTimeout(function(){
        ctx.fillStyle = "#cc3333";
        ctx.fillRect(65,3,25,theCanvas.height);
      }, 2000);

      setTimeout(function(){
        ctx.fillStyle = "#cc3333";
        ctx.fillRect(95,3,25,theCanvas.height);
      }, 3000);

      setTimeout(function(){
        ctx.fillStyle = "#cc3333";
        ctx.fillRect(125,3,25,theCanvas.height);
      }, 4000);
    }
  }
})();
