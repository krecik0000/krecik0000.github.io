$( document ).ready(function() {
    $("#tvd").click(function(){
        $("#teams-viewer").toggleClass("disp");
        $("#cloose").toggleClass("disp");
        $("#dn").toggleClass("dn");
      });
      $("#cloose").click(function(){
        $("#teams-viewer").toggleClass("disp");
        $("#cloose").toggleClass("disp");
        $("#dn").toggleClass("dn");
      });
});