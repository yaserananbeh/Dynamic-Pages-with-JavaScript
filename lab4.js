console.log("yaser");

function test(){
var userInput = prompt("press 'cat' Or 'dog' be sure about the letter case");


if (userInput=="cat"){
    document.write('<img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png">');
    alert("you choose a cat Right! ");
}
else if(userInput=="dog"){
    document.write('<img src="https://www.vets4pets.com/siteassets/species/dog/large-dog-on-walk-looking-over-hills.jpg?w=585&scale=down">');
    alert("you choose a dog Right! ");
}
else{
    document.write('<img src="https://images-na.ssl-images-amazon.com/images/I/61UZ1SeWj6L.jpg">');
    confirm("you didn't choose the Right choice Watchout !!!! this Bomb");
}
}