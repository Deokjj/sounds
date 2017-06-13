// To use sound you need to host your files on a fake "server"
// To do that run this in the terminal:
//    npm install http-server  --global
//
// Then navigate to your project folder in the terminal:
//    cd ~/code/YOUR/PROJECT/FOLDER
//
// Then run this in the terminal:
//    http-server
//
// Then visit localhost:8080 in the browser


ion.sound({
    // List of sound files to load
    sounds: [
          // beer_can_opening.mp3
        {
          name: "beer_can_opening",
          // loop: true
        },

          // bell_ring.mp3
        {name: "bell_ring"},

          // branch_break.mp3
        {name: "branch_break"},

          // button_click.mp3
        {name: "button_click"}
    ],

    // Path to the folder where the sound files are
    path: "ion.sound-3.0.7/sounds/",

    // Starts loading sound files even before you use them
    preload: true,

    // Multiple sounds at once
    multiplay: true,

    // 90%
    volume: 0.9
});



$(document).ready(function () {

  $('#open-beer').click(function () {
    ion.sound.play('beer_can_opening');
  });

});
