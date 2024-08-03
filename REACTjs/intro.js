The library for web and native user interfaces

JSX:---

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. 
Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

DOM and virtual DOM:---

React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a
tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.



What is DOM ?
DOM stands for ‘Document Object Model’. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app. 
DOM represents the entire UI of your application. The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document.
It is very useful as it allows web developers to modify content through JavaScript, 
also it being in structured format helps a lot as we can choose specific targets and all the code becomes much easier to work with.

Disadvantages of real DOM :
Every time the DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page.
For this, each time there is a component update, the DOM needs to be updated and the UI components have to be re-rendered.



// Simple getElementById() method
document.getElementById('some-id').innerValue = 'updated value';

When writing the above code in the console or in the JavaScript file, these things happen: 

The browser parses the HTML to find the node with this id.
It removes the child element of this specific element.
Updates the element(DOM) with the ‘updated value’.
Recalculates the CSS for the parent and child nodes.
Update the layout.
Finally, traverse the tree and paint it on the screen(browser) display.

Recalculating the CSS and changing the layouts involves complex algorithms, and they do affect the performance.
So React has a different approach to dealing with this, as it makes use of something known as Virtual DOM.


Virtual DOM
React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). 
So for every object that exists in the original DOM, there is an object for that in React Virtual DOM.
It is exactly the same, but it does not have the power to directly change the layout of the document. 

Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.
So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 

How does virtual DOM actually make things faster?
When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. 
So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. 
This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. 
After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.


CONDITIONAL rendering :--------

Conditional rendering in React allows you to dynamically control what is displayed to the user based on application state, user input, or other conditions.
By leveraging JavaScript conditions and React's rendering capabilities, you can create highly interactive and responsive user interfaces.


npx is a package runner tool that comes with npm (since npm version 5.2.0). 
It allows you to execute packages directly without installing them globally on your system. This is useful for running commands or tools that you don't need to keep installed permanently.


when i try to run react directly it gives error that npm not found etc 
so i did download it gloablly 

npm i -g create-react-app
now it is done and to use it
npx create-react-app app-name  (mene he diya tha--->(react-app))






--> and do ( npm start ) to run the server


the react contains all of the things like css files , js files , files for testing , etc....




























  









  
