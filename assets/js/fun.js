$(function(){
  var lastColor, 
      colorDict = {
        0: "#93DBF9",
        1: "#d49982",
        2: "#F36F74",
        3: "#B699FF"
      };

  $("a").on({
    mouseenter: function() {
      $(this).css("color", colorDict[Math.floor(Math.random() * 4)]);
    },
    mouseleave: function() {
      $(this).css("color", "black");
      console.log('bye');
    }
  });

})
