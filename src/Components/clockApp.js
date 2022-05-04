import $ from 'jquery';

$(function () {
  setInterval( function() {
    /*GETTING TIME BASED ON MINUTES, SECONDS, HOURS*/
    var seconds = new Date().getSeconds();
    var min  = new Date().getMinutes();
    var hour = new Date().getHours();


    /*CONVERTING THE TIME*/
    var hdegree = hour * 30 + (min / 2);
    var mdegree = min * 6;
    var sdegree = seconds * 6;

    /*ROTATION OF SECONDS*/
    var srotate = "rotate(" + sdegree + "deg)";

    /*ROTATION OF MINUTES*/
    var mrotate = "rotate(" + mdegree + "deg)";

    /*ROTATION OF HOURS*/
    var hrotate = "rotate(" + hdegree + "deg)";
    
    /*ASSIGNING THE ROTATION*/
    $("#S").css({ "transform": srotate });
    $("#M").css({ "transform" : mrotate });
    $("#H").css({ "transform" : hrotate });

  }, 1000 );
});