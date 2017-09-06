// import mojs from 'mojs';
// var mojs = require("mo-js");

$(document).ready(function() {
  $('#project1').mouseover(function() {
    $('#project1info').css("visibility", "visible");
    $('#aboutme').css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $('#resume').mouseover(function() {
    // $('#resume-text').effect("shake", {direction: "up"});
    $('#resume-text').css("visibility", "visible");
    // $('#resume-text').fadeIn();

    // $('#resume-text').toggle("pulsate");
  });
});

$(document).ready(function() {
  $('#resume').mouseout(function() {
    $('#resume-text').css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $('#linkedin').mouseover(function() {
    // $('#linkedin-text').effect("shake", {direction: "up"});
    $('#linkedin-text').css("visibility", "visible");

    // $('#linkedin-text').toggle("pulsate");
  });
});

$(document).ready(function() {
  $('#linkedin').mouseout(function() {
    $('#linkedin-text').css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $('#github').mouseover(function() {
    // $('#resume-text').effect("shake", {direction: "up"});
    $('#github-text').css("visibility", "visible");
    // $('#resume-text').fadeIn();

    // $('#resume-text').toggle("pulsate");
  });
});

$(document).ready(function() {
  $('#github').mouseout(function() {
    $('#github-text').css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $('#codepen').mouseover(function() {
    // $('#resume-text').effect("shake", {direction: "up"});
    $('#codepen-text').css("visibility", "visible");
    // $('#resume-text').fadeIn();

    // $('#resume-text').toggle("pulsate");
  });
});

$(document).ready(function() {
  $('#codepen').mouseout(function() {
    $('#codepen-text').css("visibility", "hidden");
  });
});

$(document).ready(function() {
  $('#email').mouseover(function() {
    // $('#resume-text').effect("shake", {direction: "up"});
    $('#email-text').css("visibility", "visible");
    // $('#resume-text').fadeIn();

    // $('#resume-text').toggle("pulsate");
  });
});

$(document).ready(function() {
  $('#email').mouseout(function() {
    $('#email-text').css("visibility", "hidden");
  });
});

// const fireColors = ["#E25822", "#E27822", "#E29822", "#E2B822", "#E23822", "#E2222C", "#E2224C"]

// const SWIRL_OPTS = {
//   left: 0, top: 0,
//   duration:       'rand(1000, 5000)',
//   radius:         'rand(1, 5)',
//   pathScale:      'rand(.5, 1)',
//   swirlFrequency: 'rand(2,10)',
//   swirlSize: 'rand(2,20)',
// }

// const swirlsNumber = 400;
// let swirlsArray = [];

// function createParticles() {
//   for(var i=0;i<swirlsNumber;i++){
//     let swirlColor = fireColors[Math.floor(Math.random() * fireColors.length)];


//     var swirl = new mojs.ShapeSwirl({
//       ...SWIRL_OPTS,
//       fill: swirlColor,
//     });
//     swirlsArray.push(swirl);  
//   } 
// }

// function drawParticles() {
//   const y = { [window.innerHeight]: 0 };
  
//   for(var i=0;i<swirlsNumber;i++){
    
//     var x = i * window.innerWidth/swirlsNumber;
    
//     swirlsArray[i] 
//       .tune({ x, y })
//       .generate()
//       .replay();
//   }
// }


// document.addEventListener('click', function(){
  
//   drawParticles();
  
// });

// createParticles();
// drawParticles();

// $(document).ready(function() {
//   alert("YO");
//   createParticles();
//   drawParticles();
// });