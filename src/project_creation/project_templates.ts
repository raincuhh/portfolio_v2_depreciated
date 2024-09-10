enum project_langs {
   HTML = 0,
   CSS,
   JS,
   TS,
   CPP,
   C,
   GDScript,
}

class project_template {
   name: string;
   img_path: string;
   desc: string;
   langs_used: Array<project_langs>;

   constructor(
      _name: string,
      _img_path: string,
      _desc: string,
      _langs_used: Array<project_langs>
   ) {
      this.name = _name;
      this.img_path = _img_path;
      this.desc = _desc;
      this.langs_used = _langs_used;
   }
}
