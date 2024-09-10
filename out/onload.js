"use strict";
window.onload = function () {
    let p_line = new pipeline(false);
    if (!p_line.ready) {
        const root = get_id("root");
        if (!root || !root.parentElement) {
            p_line.error();
            return;
        }
        console.log("initialized pipeline");
        p_line.pipeline_init();
    }
    /*
    if (!pipeline.ready) {
       const ROOT = get_id("root");
       if (!ROOT || !ROOT.parentElement) {
          Main.error();
       } else {
          console.log(
          "[=== " + "Heya, the game has loaded, dont cheat thanks." + " ===]"
       );
       Main.init();
       }
    }
    */
};
