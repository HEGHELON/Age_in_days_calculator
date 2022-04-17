function AgeInDays() {
  let birthyear = prompt('What is yor birthyear?');
  let birthday = (2022-birthyear)*365;
  console.log(birthday);

  let h1 = document.createElement("h1")
  let outputText = document.createTextNode("You are " + birthday + " days old")
  h1.setAttribute('id', 'birthdays')
  h1.appendChild(outputText);
  document.getElementById('output').appendChild(h1);
} 

function Reset() {
 document.getElementById('birthdays').remove();
 
}
