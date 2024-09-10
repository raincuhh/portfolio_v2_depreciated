"use strict";
class pipeline {
    constructor(_ready) {
        this.ready = _ready;
    }
    pipeline_init() {
        this.ready = true;
        this.load_project_section();
    }
    error() {
        console.log("error initializing pipeline");
    }
    load_project_section() { }
}
