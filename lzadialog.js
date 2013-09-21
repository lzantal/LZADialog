/*
    LZADialog
    v1.6
*/
(function(window, undefined){

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    function isObject(arg) {
      return typeof arg === 'object';
    }

    var LZADialog = {
        debug: false
    };

    var saveFileAsCB, saveFileAsCE = undefined;
    LZADialog.saveFileAs = function(opt, callb){
        if(LZADialog.debug){ console.log("called saveFileAs"); }

        var cb = arguments[arguments.length - 1];
        saveFileAsCB = (isFunction(cb))? cb : function(evt){ if(LZADialog.debug){ console.log("Missing saveFileAs callback"); } };
        var opt = (isObject(opt))? opt : {};

        var f = document.createElement("input");
        f.setAttribute("type","file");
        if(opt.filename){ f.setAttribute("nwsaveas",opt.filename); }
        else{ f.setAttribute("nwsaveas",""); }

        if(opt.workingdir){ f.setAttribute("nwworkingdir",opt.workingdir); }

        saveFileAsCE = function(evt){
            var files = evt.target.files;
            if(LZADialog.debug){
                console.log("called saveFileAs change");
                for (var i = 0; i < files.length; ++i){
                    console.log(files[i].path);
                }
            }
            if(files.length > 0){
                saveFileAsCB(files[0]);
            }
        };
        f.addEventListener("change", saveFileAsCE);
        f.click();
    };

    var selectFileCB, selectFileCE = undefined;
    LZADialog.selectFile = function(opt, callb){
        if(LZADialog.debug){ console.log("called selectFile"); }

        var cb = arguments[arguments.length - 1];
        selectFileCB = (isFunction(cb))? cb : function(evt){ if(LZADialog.debug){ console.log("Missing selectFile callback"); } };
        var opt = (isObject(opt))? opt : {};

        var f = document.createElement("input");
        f.setAttribute("type","file");
        if(opt.workingdir){ f.setAttribute("nwworkingdir",opt.workingdir); }

        if(opt.multiple){ f.setAttribute("multiple",""); }

        selectFileCE = function(evt){
            var files = evt.target.files;
            if(LZADialog.debug){
                console.log("called selectFile change");
                for (var i = 0; i < files.length; ++i){
                    console.log(files[i].path);
                }
            }
            if(files.length > 0){
                if(opt.multiple){ selectFileCB(files); }
                else{ selectFileCB(files[0]); }
            }
        }
        f.addEventListener("change", selectFileCE);
        f.click();
    };

    var selectDirCB, selectDirCE = undefined;
    LZADialog.selectDir = function(opt, callb){
        if(LZADialog.debug){ console.log("called selectDir"); }

        var cb = arguments[arguments.length - 1];
        selectDirCB = (isFunction(cb))? cb : function(evt){ if(LZADialog.debug){ console.log("Missing selectDir callback"); } };
        var opt = (isObject(opt))? opt : {};

        var f = document.createElement("input");
        f.setAttribute("type","file");
        if(opt.workingdir){ f.setAttribute("nwworkingdir",opt.workingdir); }
        f.setAttribute("nwdirectory","");

        selectDirCE = function(evt){
            var files = evt.target.files;
            if(LZADialog.debug){
                console.log("called selectDir change");
                for (var i = 0; i < files.length; ++i){
                    console.log(files[i].path);
                }
            }
            if(files.length > 0){
                selectDirCB(files[0]);
            }
        };
        f.addEventListener("change", selectDirCE);
        f.click();
    };

    var selectWebkitDirCB, selectWebkitDirCE = undefined;
    LZADialog.selectWebkitDir = function(opt, callb){
        if(LZADialog.debug){ console.log("called selectWebkitDir"); }

        var cb = arguments[arguments.length - 1];
        selectWebkitDirCB = (isFunction(cb))? cb : function(evt){ if(LZADialog.debug){ console.log("Missing selectWebkitDir callback"); } };
        var opt = (isObject(opt))? opt : {};

        var f = document.createElement("input");
        f.setAttribute("type","file");
        if(opt.workingdir){ f.setAttribute("nwworkingdir",opt.workingdir); }
        f.setAttribute("webkitdirectory","");

        selectWebkitDirCE = function(evt){
            var files = evt.target.files;
            if(LZADialog.debug){
                console.log("called selectWebkitDir change");
                for (var i = 0; i < files.length; ++i){
                    console.log(files[i].path);
                }
            }
            if(files.length > 0){
                selectWebkitDirCB(files);
            }
        };
        f.addEventListener("change", selectWebkitDirCE);
        f.click();
    };

    window.LZADialog = LZADialog;
})(window);
