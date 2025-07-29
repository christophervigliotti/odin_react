# Odin React

## React Components
https://www.theodinproject.com/lessons/node-path-react-new-react-components 

## Setting Up A React Environment
https://www.theodinproject.com/lessons/node-path-react-new-setting-up-a-react-environment

```
Notes
    install nvm - https://github.com/nvm-sh/nvm?tab=readme-ov-file
    install node - https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage
    start node
        nvm use node
    install npm via nvm - https://dev.to/ms314006/how-to-install-npm-through-nvm-node-version-manager-5gif
    installed React DevTools for Brave (Chrome)
Assignment
    Review this material by reading through Vite’s Getting Started Page.
        read but largely not understood
    Check out this guide for React Developer Tools to begin learning how to use it (don’t worry if you don’t understand some of the details yet).
        installing the repo so I can tinker
        7/29
            get todo app running
                cd into the dir
                npm install 
                npm run dev
                npm audit fix
                npm run (to list choices)
                    then run the app
            this debugger is impressive
    Try to clean up your my-first-react-app project so that it no longer displays the default page. See if you can get it to display a “Hello, World!” message instead.
        7/29
            done
Knowledge check
    7/29
        The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.            
        ...
        What are some of the ways we can start a new React project?
            vite's react config
            gatsby
            nextJS
            Create React App (Depracated)
        Why should we initially be using pre-made toolchains instead of making our own?
            Because it's mega-complicaetd
        What is Vite and why would we use it?
            react-centric frontend tools for devs 
        What command can we run to scaffold a new React project using Vite?
            a new app
                npm create vite@latest my-first-react-app -- --template react
                then
                    cd into the folder 
                    and type 
                        npm install
                        and
                        npm run dev
                        to run the app
            an existing app
                cd into it
                then
                npm create vite@latest . -- --template react
        What is in the public folder?
            static assets for the app
        What is in the src folder?
            the 'code'
        Why are the React Developer Tools useful?
            bc they are awesome / help you understand what is happening under the hood
            not the best answer lol

```