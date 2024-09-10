function get_new_project_template(
   name: string,
   img_path: string,
   desc: string,
   langs_used: Array<project_langs>
) {
   let proj_templ: project_template = new project_template(
      name,
      img_path,
      desc,
      langs_used
   );
   return proj_templ;
}

function new_project(
   name: string,
   img_path: string,
   desc: string,
   langs_used: Array<project_langs>,
   parent: string = "project_section"
) {
   let proj_templ: project_template = get_new_project_template(
      name,
      img_path,
      desc,
      langs_used
   );

   make_project_html(proj_templ, parent);
}

function make_project_html(proj_templ: project_template, parent: string) {
   let parent_el = get_id(parent);
}
