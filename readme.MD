# Odin React

## section_title
```
Notes
    go_here
```
## React Components
https://www.theodinproject.com/lessons/node-path-react-new-react-components 
```
Notes
    7/29
        components
            reusable chunks of ui
            are JavaScript fns
            example
                function Greeting() {
                    return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
                }
            can be shared by exporting them
                example
                    function Greeting() {
                        return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
                    }
                    export default greeting;
                ^ at this point it can't be used bc main.jsx doesn't know about it
        TODO: app is hosed...troubleshoot this tomorrow AM
    7/30
        fixed it
        DONE Assignment
            It’s time to create some new components! Use the same project, but play around with it, try displaying something like your favorite food.
                While components normally get exported as defaults, try using some named exports instead of default exports. If you’re unsure how to do this, consult your best friend: the MDN documentation about export statements    
                    reviewed https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#description               
        DONE Knowledge check
            The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.
                What does a React element look like?
                    export default function Chicken() {
                    return (
                        <div>
                        <h1>Chicken Component</h1>
                        <p>This is a simple chicken component using a named export.</p>
                        </div>
                    );
                    }
                How would you create a functional component?
                    add it to src directory
                How do you export and then import a component?
                    imported into main.jsx
                    exported using 'export' in the component 
        NEXT Additional resources
            This section contains helpful links to related content. It isn’t required, so consider it supplemental.
                Geeks for Geeks has a quick ReactJS Functional Components tutorial. It introduces some new ways of calling functional components you can play around with if you feel a burning desire to do so. For the time being don’t worry too much about Class components, which the resource also goes into.
                https://www.geeksforgeeks.org/reactjs/reactjs-functional-components/ 
```
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