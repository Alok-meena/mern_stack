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

        for(int i=0;i<para.length;i++){
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


