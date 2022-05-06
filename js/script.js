function AgeInDays() {
  let birthyear = prompt("What is yor birthyear?");
  let birthday = (2022 - birthyear) * 365;
  console.log(birthyear);
  let test = /[0-9]{4}|\d+/.test(birthyear);
  if (!test && birthyear !== " ") {
    alert("Please enter a valid year");
  } else {
    if (parseInt(birthyear) > 2022) {
      alert("Please enter a valid year");
    } else {
      console.log(/[0-9]{4}/.test(birthyear));

      let h3 = document.createElement("h3");
      let outputText = document.createTextNode(
        "You are " + birthday + " days old"
      );
      h3.setAttribute("id", "birthdays");
      h3.appendChild(outputText);
      document.getElementById("output").appendChild(h3);
      // }
    }
  }
}

function Reset() {
  document.getElementById("birthdays").remove();
}
