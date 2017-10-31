## To build
On the first build:  
`npm install; make all;`

After node modules have been installed:  
`make all;`  
will handle all tasks.  

## Folder Structure

### Processing
This folder is an intermediary between src and dist; any files that need to be processed twice (i.e., concatenated then transpiled) are placed here for their second process, then moved to dist.