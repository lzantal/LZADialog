## LZADialog v1.6

Static dialog class for [node-webkit](https://github.com/rogerwang/node-webkit).    
Opens native OS dialogs for selecting files, directories and saving files.  
Developed for [RaptorGL Editor](http://raptorgl.com).  
  
## Features

* Select file dialog, single or multi file select, set working directory to open dialog in
* Save file as dialog, add default filename for saving, set working directory to open dialog in
* Select directory, set working directory to open dialog in
* Select Webkit directory, set working directory to open dialog in

## Documentation

### Properties:

* `debug` => bool
If set to true debug messages will be printed to the console for all method calls

### Methods:

`selectFile(options, callback)`

* options => Object
    * nwworkingdir => String  
    Defines the working directory the dialog will open under
    * multiple => bool  
    If set to true dialog will allow multiple file selection and the file argument will be an array of file objects
* callback(file) => Function  
    Callback function, file argument will be an array of file objects if multiple set to true otherwise a single file object. It will be called when user select one or more file. each file object have the path property to get the absolute path for the selected fill  

- - -

`saveFileAs(options, callback)`

* options => Object
    * nwworkingdir => String  
    Defines the working directory the dialog will open under
    * filename => String
    Default filenae that will appear in the dialog
* callback(file) => Function  
    Callback function, file argument will be a single file object. It will be called when user sets a filename and clicks save. file object have the path property to get the absolute path for file  

- - -

`selectDir(options, callback)`

* options => Object
    * nwworkingdir => String  
    Defines the working directory the dialog will open under
* callback(file) => Function  
    Callback function, file argument will be a file object, use path property to get the absolute path of the selected directory

- - - 

`selectWebkitDir(options, callback)`

* options => Object
    * nwworkingdir => String  
    Defines the working directory the dialog will open under
* callback(path) => Function  
    Callback function, path argument will be an array of file objects of ALL the files in the selected directory including the subdirectories and hidden directories.
    Use path property to get the absolute path of the selected directory

## Examples
- - - 
Select single file:

    LZADialog.selectFile(function(file){
        console.log('complete callback: '+ file.path);
    });
- - - 
Select multiple files:

    LZADialog.selectFile({multiple: true}, function(file){
        for(var i=0, len = file.length; i<len; i++){
            console.log('complete callback: '+ file[i].path);
        }
    });
- - - 
Select single file open dialog in your home dir:

    LZADialog.selectFile({nwworkingdir: '/home/user'}, function(file){
        console.log('complete callback: '+ file.path);        
    });
- - -
Save file as:

    LZADialog.saveFileAs(function(file){
        console.log(file.path);
    });
- - - 
Save file as with default file name:

    LZADialog.saveFileAs({filename:"example.js"}, function(file){
        console.log(file.path);
    });
- - - 
Save file as in your home dir:

    LZADialog.saveFileAs({nwworkingdir: '/home/user'}, function(file){
        console.log(file.path);
    });
- - - 
Select directory:

    LZADialog.selectDir(function(file){
        console.log('complete callback: '+ file.path);
    });
- - - 
Select directory in your home dir:

    LZADialog.selectDir({nwworkingdir: '/home/user'}, function(file){
        console.log('complete callback: '+ file.path);
    });
- - - 
Select Webkit directory:

    LZADialog.selectDir(function(file){
        for(var i=0, len = file.length; i<len; i++){
            console.log('complete callback: '+ file[i].path);
        }
    });
- - - 
Select Webkit directory in your home dir:

    LZADialog.selectDir({nwworkingdir: '/home/user'}, function(file){
        for(var i=0, len = file.length; i<len; i++){
            console.log('complete callback: '+ file[i].path);
        }
    });

## License
The project uses the MIT license, see LICENSE file
