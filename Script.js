var button=document.getElementById("btn");
var list=document.getElementById("ul");
var input=document.getElementById("team");


function Create_element()
{
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value="";
}

button.addEventListener("click",function(e)
{
    if(input.value.length>0)
    {
        Create_element();

    }
})

input.addEventListener("keypress", function(e)
{
    if(input.value.length>0 && e.keyCode===13)
    {
        Create_element();
    }
  
})
const c;
const b=5;
 b=4;
console.log(b);
































// function CheckDriverAge()
// {
//     var age=prompt("For Driving License , What is your age?");
//     var Age=Number(age);
//     if(Age>18)
//     {
//         alert("Have Fun You are ready to go!")
//     }
//     else
//     {
//         var min_age=18-Age;
//         alert("You Should try after "+min_age+" Age")
//     }
// }

// CheckDriverAge();

