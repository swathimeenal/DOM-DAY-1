// const element = document.createElement("div")
// const element1 = document.createElement("div")
// const element2= document.createElement("span")
// element.innerHTML="This is dynamic span"
// element1.append(element2);
// element.append(element1);
// document.body.append(element)
/*const div = document.createElement("div")
const header= document.createElement("header")
const section= document.createElement("section")
const article = document.createElement("article")
const span= document.createElement("span")
const p = document.createElement("p")
span.innerHTML="This is span"
p.innerHTML="This is Paragraph"
section.appendChild(span)
article.appendChild(p)
header.append(section,article)
const header1= document.createElement("header")
const section1= document.createElement("section")
const article1 = document.createElement("article")
const span1= document.createElement("span")
const p1 = document.createElement("p")
span1.innerHTML="This is span"
p1.innerHTML="This is Paragraph"
section1.appendChild(span1)
article1.appendChild(p1)
header1.append(section1,article1)
div.append(header,header1)
document.body.append(div)
*/
//innerHTML VS innerText
/*const div= document.createElement("div")
div.innerText="<span> This is span</span>"
document.body.append(div)
const div1= document.createElement("div")
div1.innerHTML="<span> This is span</span>"
document.body.append(div1)
*/

const header= document.createElement("header")
const section= document.createElement("section")
const article = document.createElement("article")
const span= document.createElement("span")
const p = document.createElement("p")
const att = document.createElement("div")
att.setAttribute("class","container")
att.setAttribute("id","container")
span.innerHTML="This is span"
p.innerHTML="This is Paragraph"
section.appendChild(span)
article.appendChild(p)
header.append(section,article)
const header1= document.createElement("header")
const section1= document.createElement("section")
const article1 = document.createElement("article")
const span1= document.createElement("span")
const p1 = document.createElement("p")
span1.innerHTML="This is span"
p1.innerHTML="This is Paragraph"
section1.appendChild(span1)
article1.appendChild(p1)
header1.append(section1,article1)
att.append(header,header1)
document.body.append(att)