"use strict";
let projects = [];
function get_new_project_template(name, img_path, desc, langs_used, date) {
    let proj_templ = new project_template(name, img_path, desc, langs_used, date);
    return proj_templ;
}
function new_project(name, img_path, desc, langs_used, date, id) {
    let proj_templ = get_new_project_template(name, img_path, desc, langs_used, date);
    projects.push(new full_project_template(proj_templ, id));
}
function make_project_html(finished_project_template, _project_section_parent = "project_section") {
    let project_section_parent = get_id(_project_section_parent);
    // parent appending
    let proj_parent = create_el("div");
    proj_parent.setAttribute("class", "project");
    proj_parent.setAttribute("id", finished_project_template.id.toString());
    project_section_parent === null || project_section_parent === void 0 ? void 0 : project_section_parent.appendChild(proj_parent);
    // project title
}
