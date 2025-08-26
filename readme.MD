# Odin React 
https://www.theodinproject.com/paths/full-stack-javascript/courses/react

## See Also

    ReactJS Quizzes - https://www.geeksforgeeks.org/reactjs/practice-react-online/

## section_title
```
npm create vite@latest lesson-name -- --template react
cd lesson-name && npm install && npm run dev

MMM DD
    go_here
```

## Rendering Techniques
```
npm create vite@latest rendering-techniques -- --template react
cd rendering-techniques && npm install && npm run dev

Aug 26
    Now that we have learned how JSX works and how to write it, this lesson will cover how we can render multiple elements and conditionally render UI in JSX.

    You will learn 
        Render a list of elements/components in JSX.
        Conditionally render UI.

    
````

## What is JSX?
https://www.theodinproject.com/lessons/node-path-react-new-what-is-jsx
```
Aug 18
    JSX is...
        JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It’s not required to use JSX when writing React components, but it does make writing them more concise.

        Essentially, JSX is syntactic sugar for the React createElement function. This function creates a React element, which is a plain object, so JSX compiles down to plain JavaScript objects.
    Rules of JSX
        1. Return a single root element.
        2. Close all tags.
        3. camelCase Most things.
            JSX turns into JavaScript, and attributes of elements become keys of JavaScript objects, so you can’t use dashes or reserved words such as class. Because of this, many HTML attributes are written in camelCase. Instead of stroke-width, you’d use strokeWidth, and instead of class you’d use className.

    get a sample app rolling for this lesson
    
        npm create vite@latest what-is-jsx -- --template react
        (cd into the dir)
        npm install
        then
        npm run dev

    Converting HTML to JSX
        <h1>Test title</h1>
        <svg>
            <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
        </svg>
        <form>
            <input type="text">
        </form>
        done! (see code)

    Assignment
        Aug 25
            1. done
            2. Aug 26 done
    Knowledge check
        1. What is JSX?
            it's a syntax extension for JavaScript that lets you write HTML-esque markup
        2. Why do we use JSX?
            to be more concise 
            allows you to separate concerns for both rendering logic and content for a given thing in one place (a component)
        3. What are the three rules of JSX?
            1. Return a single root element, often <></> or <div></div>
            2. close all tags
            3. camelCase MOST things
        4. How do you reference a dynamic value inside of your JSX?


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
    8/18
        NEXT Additional resources
            This section contains helpful links to related content. It isn’t required, so consider it supplemental.
                Geeks for Geeks has a quick ReactJS Functional Components tutorial. It introduces some new ways of calling functional components you can play around with if you feel a burning desire to do so. For the time being don’t worry too much about Class components, which the resource also goes into. https://www.geeksforgeeks.org/reactjs/reactjs-functional-components/ 

                Notes

                    ReactJS Functional Components
                        In ReactJS, functional components are a core part of building user interfaces. They are simple, lightweight, and powerful tools for rendering UI and handling logic. Functional components can accept props as input and return JSX that describes what the component should render.

                        In ReactJS, functional components are a core part of building user interfaces. They are simple, lightweight, and powerful tools for rendering UI and handling logic. Functional components can accept props as input and return JSX that describes what the component should render.

                        example
                            import React, { useState } from 'react';
                            function App() {
                                const [message, setMessage] = useState("Hello World!");
                                return (
                                    <div style={{ textAlign: "center", marginTop: "50px" }}>
                                    <h1>{message}</h1>
                                    <button onClick={() => setMessage("Welcome to React!")}>
                                        Click Me!
                                    </button>
                                    </div>
                                );
                            }
                            export default App;

                        When a functional component receives input and is rendered, React uses props and updates the virtual DOM to ensure the UI reflects the current state.

                        Props: Functional components receive input data through props, which are objects containing key-value pairs.
                        Processing Props: After receiving props, the component processes them and returns a JSX element that defines the component's structure and content.

                        Virtual DOM: When the component is rendered, React creates a virtual DOM tree that represents the current state of the application.

                        Re-rendering: If the component's props or state change, React updates the virtual DOM tree accordingly and triggers the component to re-render.

                    Functional Component with Props

                        In React, a functional component with props is a JavaScript function that receives an object called props as its argument. Props (short for “properties”) are used to pass data from a parent component to a child component.

                        This allows components to be dynamic and reusable, as the data displayed can change based on what is passed in.

                        Example:
                        
                            import React from 'react';
                            import ReactDOM from 'react-dom';

                            // Functional component with props
                            function Greet(props) {
                                return <h2>Hello, {props.name}!</h2>;
                            }

                            // Rendering the component and passing a prop
                            ReactDOM.render(
                                <Greet name="Alice" />,
                                document.getElementById('root')
                            );                    

                        Oh I get it now

                            <Greet name="Alice" />,
                            ^ Greet is the function call and name (and it's value) become part of props (hence, props.name)

                    When to Use ReactJS Functional Components

                        Functional components should be used whenever possible because they are simpler, easier to test, and more performant than class components. However, there are a few cases where functional components may not be suitable:

                        Stateful components: Functional components cannot hold state on their own. Therefore, if you need to maintain state within your component, you may need to use a class component.

                        Lifecycle methods: If you need to use lifecycle methods such as componentDidMount, componentDidUpdate, or componentWillUnmount, you will need to use a class component.

                        Destructuring Props
                            Instead of using props.name, you can destructure the props object directly in the function’s argument to make the code cleaner.

                            example

                                import React from 'react';

                                // Functional Component with destructuring
                                const Welcome = ({ name }) => {
                                    return <h1>Hello, {name}!</h1>;
                                };

                                // Parent Component
                                const App = () => {
                                    return <Welcome name="Jiya" />;
                                };

                                export default App;

                        React Functional Components Vs. Class Components
                            Feature	            Functional Components           Class Components

                            Syntax	            Simple function with Hooks	    ES6 classes extending React.Component.

                            State Management    Requires Hooks like useState	Managed via this.state and this.setState.

                            Lifecycle Methods   Managed via useEffect	        Dedicated lifecycle methods like componentDidMount.

                            Performance	        Slightly faster due to          Slightly slower due to more internal logic.
                                                fewer abstractions
                        This was a good read


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

Sup?