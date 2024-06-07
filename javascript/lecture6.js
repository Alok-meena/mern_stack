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


