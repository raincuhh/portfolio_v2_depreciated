"use strict";
function get_new_project_template(name, img_path, desc, langs_used) {
    let proj_templ = new project_template(name, img_path, desc, langs_used);
    return proj_templ;
}
function new_project(name, img_path, desc, langs_used, parent = "project_section") {
    let proj_templ = get_new_project_template(name, img_path, desc, langs_used);
    make_project_html(proj_templ, parent);
}
function make_project_html(proj_templ, parent) {
    let parent_el = get_id(parent);
}
