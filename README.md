# Fontester
Chrome extension to preview fonts on any webpage. Use your own fonts or one of the many included Google fonts.  
This is the successor to [FontCycler](https://github.com/mattConn/fontcycler).

## To build
On the first build:  
`npm install && make all`

After node modules have been installed:  
`make all`  
will handle all tasks.  

## Details of the build process
When running `make all`:
1. The file-includer (finc) parses `main.es6` and writes the concatenated file to `tmp`, where babel transpiles this file into browser-compatible JS and writes it to `dist`.
2. All stylesheets in `font_faces` are concatenated into a single file by a shell for-loop and written to `tmp`. This stylesheet is then parsed by a lexer (`generate_font_array`) which will create the JS array of all fonts available, needed by the main JS script, and write it to `dist` as a JS file. The stylesheet is then moved from `tmp` to `dist`.
2. Lastly, all files needed for the functionality of a Chrome extension are copied from `chrome-extension` to `dist`. 

Here's a visual:
- file-includer(main.es6) => tmp; babel(tmp) => dist;
- cat($f in font_faces) => tmp; lexer(tmp) => dist; mv tmp => dist;
- cp chrome-extension => dist;

## To install
In Chrome, navigate to `chrome://extensions/` and drag the "dist" folder into the browser window.

## Folder Structure

### tmp
This folder is an intermediary between src and dist; any files that need to be processed twice (i.e., concatenated then transpiled) are placed here for their second process, then moved to dist.
