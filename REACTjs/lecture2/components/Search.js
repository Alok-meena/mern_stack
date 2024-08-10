import React, { useEffect, useState } from "react";
import "./search.css"

const items=["Apple","Mango","Banana","Orange","Grapes","PineApple"];

const Search= () =>{
    const [query,setQuery]=useState("");//ye to hamne bas jo input dalenge use store krne ke liye
    //rkha hai taki use leke ham filter function ko use kr ske apne code ke ander
    const [filteredItems,setFilteredItems]=useState(items);
    //starting me filetereitems me sbhi items ko dala hai hamne

    useEffect(() => {
        setFilteredItems(
            
            items.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
            //SO VERY IMP
            //yha kya ho rha hai filter basically sbhi items ke elements ko iterate krega
            //to item jo aaya hai vo items ke hi hai bs har kisi ko query se compare kr rhe hai
            //inclues return T/F if item contains query aor ye hamne setfil.. func ke 
            //ander likha hai to bs jo elements fileter hoke aayenge vo neye array me hone aor 
            //vhi store honge setfiltered items me

            
            //lowercase me convert kiya as it is case sensitive
            //jo jo items query se match ho rhe hai unhe filter krke le aayega ye logic
        );
    },[query]);//to query ke change hone pe useeffect call hoga

    return(
        <div>
            <h1>Search Fruit</h1>
            <input 
               type="text" 
               value={query}
               onChange={(e)=>setQuery(e.target.value)}//to jaise hi input change hoga to
       //setquery query ko change kr dega mtlb query me i/p ki value dal dega
               placeholder="Search"
            />

            <ul>
                {filteredItems.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>

    //if {} are used with arrow function then should use return statement -->explicit return
    //can use () then return is not required it is implicit
     // <ul>
     //            {filteredItems.map((item) =>{
     //                return <li key={item}>{item}</li>
     //            })}
     //        </ul>
        </div>
    );
}

export default Search; 




onChange Event:

onChange={(e)=>setQuery(e.target.value)}

onChange is an event handler that is triggered whenever the value of an input element (like a text field) changes.
It's commonly used to capture and react to user input in real-time.
Arrow Function (e) => setQuery(e.target.value):

This arrow function is executed every time the onChange event is triggered.
e: Represents the event object that is automatically passed to event handlers in React. This object contains information about the event that just occurred.
e.target:

e.target refers to the element that triggered the event (in this case, the input field).
It gives you access to properties of the input element, such as its value, id, name, etc.
e.target.value:

e.target.value retrieves the current value of the input field at the moment the event occurs. This is the text the user has typed into the input.
setQuery(e.target.value):

setQuery is a function, typically from the useState hook, that updates the state variable query with the new value from the input field.
Every time the user types something, setQuery is called with the current input value, updating the component's state accordingly.








map method and key props of react :-------

     <ul>
         {filteredItems.map((item)=>(
            <li key={item}>{item}</li>
         ))}
     </ul>


<ul> Tag:

Represents an unordered list in HTML.
This is the container for the list items (<li> elements) that will be generated dynamically.
filteredItems.map((item) => ( ... )):

filteredItems: This is an array containing the items you want to display. The array might have been filtered from a larger set of items based on certain criteria.
.map(): This is a JavaScript array method that creates a new array by applying a function to each element in the original array. In this case, it's used to generate a list item (<li>) for each element in filteredItems.
item: Represents the current element of the filteredItems array being processed by map.
<li key={item}>{item}</li>:

<li>: Represents a list item in HTML.
key={item}:
key is a special prop in React used to uniquely identify each element in the list. It helps React efficiently update and render the list when items are added, removed, or changed.
The key should be unique among siblings to ensure the list renders correctly. In this example, item is used as the key, assuming each item is unique.
{item}:
Inside the curly braces, you're injecting the value of item (the current element from filteredItems) into the list item. This is what will be displayed as the content of each <li> element.

