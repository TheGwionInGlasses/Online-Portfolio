# Online-Portfolio
This website is a React driven set of pages, built using Vite, and integrates a WebGL build of the Digital Lancer Tool.

## Developing
1. Ensure all dependancies are installed by executing 'npm install'
2. Load up a development server by executing 'npm run dev'

To test the integration of the Digital Lancer Tool, it's necessary to create a production build.

## Building production
1. Ensure all dependancies are installed by executing 'npm install'
2. Create a production build by executing 'npm run build'
3. Copy the Digital Lancer tool /Build folder containing the wasm, 2 .js files and the .data file to /distro/Build

You can check the production build by running 'npm run preview' which will spin up a server serving the resources contained in the /distro folder.
