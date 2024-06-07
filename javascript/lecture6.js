DOM MANIPULATION (DOCUMENT OBJECT MODEL) IN JS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <h1 id="hello">HELLO</h1>

    <h1 id="header">HELLO</h1>
    <p id="paragraph">This is a Paragraph</p>
    <button id="button1">Change header</button>
    <button id="button2">Change Paragraph</button>
    <button id="button3">Show Alert</button>

    <p class="democlass">para1</p>
    <p class="democlass">para2</p>
    <p class="democlass">para3</p>

    <script>
        document.getElementById("hello").style.color="red";
        const myelement=document.getElementById("hello");
        myelement.innerHTML="Say Hello";
        myelement.style.color="red";
        myelement.style.backgroundColor="purple";

        //JS HAS 3 POP-UP BOXES FOR INTERACTION

        alert("SOMETHINGG);

        let a=confirm("do you want to delete it ?");
        if(a){
            console.log("delete it");
        }
        else{
            console.log("dont delete it");
        }

        prompt("what is your name ? GUEST");
        console.log(prompt);



        document.getElementById("button1").addEventListener('click',function(){
            document.getElementById("header").innerText="NEW HEADER VALUEEE";
        }) 

        document.getElementById("button2").addEventListener('click',function(){
            document.getElementById("paragraph").style.color="blue";
            document.getElementById("paragraph").innerText="Paragraph changed";
        })

        document.getElementById("button3").addEventListener('click',function(){
            alert(document.getElementById("paragraph").innerText);
        })

        //this get class will return list of elements or array of elements with same class
        //and it can be access also

        let para=document.getElementsByClassName("democlass");
        para[1].style.color="red";//only 2nd element will become red

        //or can also do
        document.getElementsByClassName("democlass").style.color="red";
        //it will do red to all the elements or can use for loop

        for(let i=0;i<para.length;i++){
          para[i].style.color="blue";
        }

    </script>
</body>
</html>


we can use this setAttribute and using this we can add any attribute like here we have added 
a class attribute to the html element

and in this way we can also use this like we do in addEventListner

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .democlass{
            background-color: red;
        }
    </style>
</head>
<body>
    <h1 id="header">header</h1>
     <h2 class="democlass">This contains a class</h2>
     <button onclick="myfunction()">Add class</button>

    <script>
        function myfunction(){
            document.getElementById("header").setAttribute("class","democlass");
        }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        
    </style>
</head>
<body>
    <h1 id="header">Original Header</h1>
    <p id="paragraph" class="example">This is a paragraph</p>
    <p class="example">This is another paragraph with the same class.</p>
    <ul id="list">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
    </ul>

    <p class="democlass">para1</p>
    <p class="democlass">para2</p>
    <p class="democlass">para3</p>

    <button id="button1">change header</button>
    <button id="button2">change paragraphs</button>

    <button id="button3">list items alert</button>

    <button id="button4">change first paragraph style</button>

    <button id="button5">highlight all paragraphs</button>

   

    <script>
        document.getElementById("button1").addEventListener('click',function(){
            document.getElementById("header").innerText="Headr Changed!";
        })

        document.getElementById("button2").addEventListener('click',function(){
            let para=document.getElementsByClassName("democlass");
            for(let i=0;i<para.length;i++){
                para[i].innerText="PARAGRAPH "+(i+1)+" CHANGED";
            }
        })

        document.getElementById("button3").addEventListener('click',function(){
            //to is se ham kisi bhi tag ko pick kr skte hai
            let items=document.getElementsByTagName("p");
            let itemTexts=[];
            for(let i=0;i<items.length;i++){
                itemTexts.push(items[i].innerText);
            }
            alert("LIST ITEMS ARE "+itemTexts.join(","));
        })

        //query selector
        document.getElementById("button4").addEventListener('click',function(){
            //to all vala sare matches ko select kr lega aor simple vala
            //first element jo match kre use select krega aap # use krke id access
            //kr skte ho and . use krke class and direct tag ko bhi just like 
            //we do in css to selection 
            let firstparagraph=document.querySelector(".democlass");
            firstparagraph.style.color="blue";
            firstparagraph.style.fontWeight="bold";
        })

        document.getElementById("button5").addEventListener('click',function(){
            let allparagraphs=document.querySelectorAll(".democlass");
            allparagraphs.forEach(function(i){
                i.style.backgroundColor="purple";
            })
            
        })

    </script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document.getElementById Examples</title>
  </head>
  <body>
    <h1 id="header">Original Header</h1>
    <p id="paragraph">This is a paragraph.</p>
    <button id="button1">Change Header</button>
    <button id="button2">Change Paragraph</button>
    <button id="button3">Show Alert</button>

    <script>
      // Example 1: Changing the content of an element
      document.getElementById("button1").addEventListener("click", function () {
        document.getElementById("header").innerText = "Header Changed!";
      });

      // Example 2: Changing the style of an element
      document.getElementById("button2").addEventListener("click", function () {
        document.getElementById("paragraph").style.color = "blue";
        document.getElementById("paragraph").innerText =
          "The paragraph text has changed and now it's blue!";
      });

      // Example 3: Adding an alert with the content of an element
      document.getElementById("button3").addEventListener("click", function () {
        alert(document.getElementById("paragraph").innerText);
      });

      // Example 4: Changing the attribute of an element
      document
        .getElementById("paragraph")
        .setAttribute("data-custom", "customAttribute");

      // Display the custom attribute value in the console
      console.log(
        document.getElementById("paragraph").getAttribute("data-custom")
      );
    </script>
  </body>
</html>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Attribute Manipulation Example</title>
    <style>
      .editable {
        border: 1px solid #ccc;
        padding: 5px;
        margin: 10px 0;
      }
    </style>
  </head>
  <body>
    <h1>HTML Attribute Manipulation Example</h1>
    <p id="editableParagraph" class="editable">
      This is a paragraph. Try modifying my attributes!
    </p>
    <input type="text" id="inputField" placeholder="Enter some text" />

    <div>
      <button id="makeEditableButton">Make Editable</button>
      <button id="removeEditableButton">Remove Editable</button>
      <button id="enableSpellcheckButton">Enable Spellcheck</button>
      <button id="disableSpellcheckButton">Disable Spellcheck</button>
      <button id="setPlaceholderButton">Set Placeholder</button>
      <button id="removePlaceholderButton">Remove Placeholder</button>
      <button id="setMaxLengthButton">Set Max Length to 10</button>
      <button id="removeMaxLengthButton">Remove Max Length</button>
      <button id="disableInputButton">Disable Input</button>
      <button id="enableInputButton">Enable Input</button>
    </div>

    <script>
      // Make paragraph editable
      document
        .getElementById("makeEditableButton")
        .addEventListener("click", function () {
          var paragraph = document.getElementById("editableParagraph");
          paragraph.setAttribute("contenteditable", "true");
          alert("Paragraph is now editable.");
        });

      // Remove paragraph editable attribute
      document
        .getElementById("removeEditableButton")
        .addEventListener("click", function () {
          var paragraph = document.getElementById("editableParagraph");
          paragraph.removeAttribute("contenteditable");
          alert("Paragraph is no longer editable.");
        });

      // Enable spellcheck on paragraph
      document
        .getElementById("enableSpellcheckButton")
        .addEventListener("click", function () {
          var paragraph = document.getElementById("editableParagraph");
          paragraph.setAttribute("spellcheck", "true");
          alert("Spellcheck enabled on paragraph.");
        });

      // Disable spellcheck on paragraph
      document
        .getElementById("disableSpellcheckButton")
        .addEventListener("click", function () {
          var paragraph = document.getElementById("editableParagraph");
          paragraph.setAttribute("spellcheck", "false");
          alert("Spellcheck disabled on paragraph.");
        });

      // Set placeholder on input field
      document
        .getElementById("setPlaceholderButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          inputField.setAttribute("placeholder", "New placeholder text");
          alert("Placeholder set on input field.");
        });

      // Remove placeholder from input field
      document
        .getElementById("removePlaceholderButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          inputField.removeAttribute("placeholder");
          alert("Placeholder removed from input field.");
        });

      // Set max length on input field
      document
        .getElementById("setMaxLengthButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          inputField.setAttribute("maxlength", "10");
          alert("Max length set to 10 on input field.");
        });

      // Remove max length from input field
      document
        .getElementById("removeMaxLengthButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          inputField.removeAttribute("maxlength");
          alert("Max length removed from input field.");
        });

      // Disable input field so we cannot take input in the input field
      document
        .getElementById("disableInputButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          inputField.setAttribute("disabled", "true");
          alert("Input field disabled.");
        });

      // Enable input field
      document
        .getElementById("enableInputButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          inputField.removeAttribute("disabled");
          alert("Input field enabled.");
        });
    </script>
  </body>
</html>





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dynamic Attribute Check and Input Value</title>
  </head>
  <body>
    <h1>Dynamic Attribute Check and Input Value</h1>
    <form id="inputForm">
      <label for="inputField">Enter text:</label>
      <input type="text" id="inputField" placeholder="Enter some text" />
      <button type="button" id="getValueButton">Get Input Value</button>
      <button type="button" id="checkAttributesButton">Check Attributes</button>
    </form>
    <div id="result"></div>

    <script>
      // Get the value of the input field
      document
        .getElementById("getValueButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          //so here we have to use value not innertext to get the value of the inputfield
          var inputValue = inputField.value;
          document.getElementById("result").innerText =inputValue;
        });

      // Check for specific attributes and display the result
      document
        .getElementById("checkAttributesButton")
        .addEventListener("click", function () {
          var inputField = document.getElementById("inputField");
          var attributesToCheck = ["placeholder", "maxlength", "disabled"];
          var results = [];

          attributesToCheck.forEach(function (attribute) {
            if (inputField.hasAttribute(attribute)) {
              results.push(
                attribute + ": " + inputField.getAttribute(attribute)
              );
            } else {
              results.push(attribute + ": not set");
            }
          });

          document.getElementById("result").innerText =
            "Attributes:\n" + results.join("\n");
        });
    </script>
  </body>
</html>





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dynamic Attribute Check and Input Value</title>
  </head>
  <body>
    <h1>Dynamic Attribute Check and Input Value</h1>
    <form id="inputForm">
      <label for="inputField">Enter text:</label>
      <input type="text" id="inputField" placeholder="Enter some text" />
      <button type="button" id="getValueButton">Get Input Value</button>
      <button type="button" id="checkAttributesButton">Check Attributes</button>
    </form>
    <div id="result"></div>
    <script>
        document.getElementById("getValueButton").addEventListener('click',function(){
            let inputField=document.getElementById("inputField");
            let inputValue=inputField.value;
            document.getElementById("result").innerText=inputValue;
        })
        document.getElementById("checkAttributesButton").addEventListener('click',function(){
            let inputField=document.getElementById("inputField");
            let attributesTocheck=["placeholder","maxlength","disabled","contenteditable"];
            let results=[];
            
            attributesTocheck.forEach((attr)=>{
                //has attribute returns true or false okkkk
                if(inputField.hasAttribute(attr)){
                    results.push(attr+" :"+inputField.getAttribute(attr));
                }
                else{
                    results.push(attr+" :No attribute");
                }
            })
            document.getElementById("result").innerText="Attributes:\n"+results.join("\n");

        })

    </script>
  </body>
</html>






<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dynamic List Traversal and Manipulation</title>
  </head>
  <body>
    <h1>Dynamic List Traversal and Manipulation</h1>
    <ul id="itemList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <button id="traverseButton">Traverse List</button>
    <button id="replaceItemButton">Replace Item</button>
    <button id="removeItemButton">Remove Item</button>

    <div id="result"></div>

    <script>
      // Function to traverse and display the list items
      document
        .getElementById("traverseButton")
        .addEventListener("click", function () {
          var listItems = document.querySelectorAll("#itemList li");
          var result = "List Items:\n";
          listItems.forEach(function (item, index) {
            result += "Item " + (index + 1) + ": " + item.innerText + "\n";
          });
          document.getElementById("result").innerText = result;
        });

      // Function to replace the second item in the list
      document
        .getElementById("replaceItemButton")
        .addEventListener("click", function () {
          var listItems = document.querySelectorAll("#itemList li");
          if (listItems.length > 1) {
            var newItem = document.createElement("li");
            newItem.innerText = "New Item";
            listItems[1].replaceWith(newItem);
            alert("Item 2 has been replaced.");
          } else {
            alert("The list does not have enough items to replace.");
          }
        });

      // Function to remove the last item in the list
      document
        .getElementById("removeItemButton")
        .addEventListener("click", function () {
          var listItems = document.querySelectorAll("#itemList li");
          if (listItems.length > 0) {
            listItems[listItems.length - 1].remove();
            alert("Last item has been removed.");
          } else {
            alert("There are no items to remove.");
          }
        });
    </script>
  </body>
</html>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Using innerHTML</title>
  </head>
  <body>
    <h1>Using innerHTML Example</h1>
    <div id="content">
      <p>This is the initial content.</p>
    </div>

    <button id="changeContentButton">Change Content</button>
    <button id="addContentButton">Add Content</button>
    <button id="clearContentButton">Clear Content</button>

    <script>
      // Function to change the content of the div
      document
        .getElementById("changeContentButton")
        .addEventListener("click", function () {
          var contentDiv = document.getElementById("content");
          contentDiv.innerHTML =
            "<p>New content has been set!</p><p>More new content.</p>";
        });

      // Function to add content to the div
      document
        .getElementById("addContentButton")
        .addEventListener("click", function () {
          var contentDiv = document.getElementById("content");
          contentDiv.innerHTML += "<p>Additional content added.</p>";
        });

      // Function to clear the content of the div
      document
        .getElementById("clearContentButton")
        .addEventListener("click", function () {
          var contentDiv = document.getElementById("content");
          contentDiv.innerHTML = "";
        });
    </script>
  </body>
</html>
