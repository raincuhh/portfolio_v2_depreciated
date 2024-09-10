"use strict";
var project_langs;
(function (project_langs) {
    project_langs[project_langs["HTML"] = 0] = "HTML";
    project_langs[project_langs["CSS"] = 1] = "CSS";
    project_langs[project_langs["JS"] = 2] = "JS";
    project_langs[project_langs["TS"] = 3] = "TS";
    project_langs[project_langs["CPP"] = 4] = "CPP";
    project_langs[project_langs["C"] = 5] = "C";
    project_langs[project_langs["GDScript"] = 6] = "GDScript";
})(project_langs || (project_langs = {}));
class project_template {
    constructor(_name, _img_path, _desc, _langs_used, _date) {
        this.name = _name;
        this.img_path = _img_path;
        this.desc = _desc;
        this.langs_used = _langs_used;
        this.date = _date;
    }
}
class full_project_template {
    constructor(_project_template, _id) {
        this.project_template = _project_template;
        this.id = _id;
    }
}
