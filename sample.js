
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
  
}
var textArea = document.getElementById("inputTextArea");
textArea.addEventListener("input", countLetters);
















