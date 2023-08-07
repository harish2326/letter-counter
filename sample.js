let check1 = document.querySelector("#check1");
let check2 = document.querySelector("#check2");
let check3 = document.querySelector("#check3");
let check4 = document.querySelector("#check4");
function countLetters() {
  const text = document.getElementById("inputTextArea").value;
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let specialCount = 0;
  let spacecount = 0;
  

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (/[a-z]/.test(char)) {
      lowercaseCount++;
    } else if (/[A-Z]/.test(char)) {
      uppercaseCount++;
    }
    else if(/["  "]/.test(char)){
     spacecount++;
    }
    
    else {
      specialCount++;
    }
  }

  // Update the counts in the HTML
  const lowercaseCountElement = document.getElementById("lowercaseCount");
  lowercaseCountElement.textContent = lowercaseCount;

  const uppercaseCountElement = document.getElementById("uppercaseCount");
  uppercaseCountElement.textContent = uppercaseCount;

  const specialCountElement = document.getElementById("specialCount");
  specialCountElement.textContent = specialCount;
  const spaceCountEl = document.getElementById("spacecount");
  spaceCountEl.textContent = spacecount ;
  if(text.length >= 8){
    check1.style.color = 'green';
    
  }
  else{
    check1.style.color ='red'
  }
  if(/[A-Z]/.test(text)){
    check2.style.color = 'green';
  }
  else{
    check2.style.color ='red'  
  }
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
if(specialCharRegex.test(text)){
  check3.style.color = 'green';
}  
else{
  check3.style.color = 'red';
}
if(/[0-9]/.test(text)){
  check4.style.color = 'green';
}
else{
  check4.style.color ='red'  
}
}
var textArea = document.getElementById("inputTextArea");
textArea.addEventListener("input", countLetters);
















