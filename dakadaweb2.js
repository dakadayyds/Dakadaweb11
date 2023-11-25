(function(Scratch){
    function getOverlayMode () {
        resizeBehavior === "scale" ? "scale-centered" : "manual";
    }
     let iframe = document.createElement("iframe");

     
  function src(){
    const { stageWidth, stageHeight } = Scratch.vm.runtime;
    let iframewidth=stageWidth;
    let iframeHeight=stageHeight-50;
    iframe.style.width = `${effectiveWidth}px`;
    iframe.style.height = `${effectiveHeight}px`;
  }
    console.log(Scratch)
    console.log(Scratch.renderer)
       let overlay = Scratch.renderer.addOverlay(iframe,"scale");
            Scratch.renderer._updateOverlays();
          src()
          Scratch.vm.on("STAGE_SIZE_CHANGED", src);
})(Scratch);
