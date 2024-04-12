const List1 = document.getElementById("demo")
List1.innerHTML= "<ol id='o'><li>Introduction</li><li>Body</li><li>Conclusion</li></ol>";
List1.style.color='red';
List1.style.fontSize='40px';
const New = document.createElement('li');
New.textContent="TP2";
List1.appendChild(New);