"use strict";
class pipeline {
    constructor(_ready) {
        this.ready = _ready;
    }
    pipeline_init() {
        this.ready = true;
    }
    error() {
        console.log("error initializing pipeline");
    }
}
