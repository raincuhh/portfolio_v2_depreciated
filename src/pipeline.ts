class pipeline {
   ready: boolean;

   constructor(_ready: boolean) {
      this.ready = _ready;
   }

   pipeline_init() {
      this.ready = true;
   }

   error() {
      console.log("error initializing pipeline");
   }
}
