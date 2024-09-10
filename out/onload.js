"use strict";
window.onload = function () {
   let p_line = new pipeline(false);
   if (!p_line.ready) {
      const root = get_id("root");
      if (!root || !root.parentElement) {
         p_line.error();
         return;
      }
      console.log("INFO, initialized pipeline");
      p_line.pipeline_init();
   } else {
      console.error("ERROR, pipeline already initialized?");
   }
};
