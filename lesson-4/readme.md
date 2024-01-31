### DOM

### 

1. selectors: 

- querySelector 
- querySelectorAll
- getElementById 
- getElementsByTagName
- getElementsByClassName
- getElementsByName

2. HtmlCollection vs NodeList

- querySelectorAll -> NodeList
- getElementsByTagName / className -> HTMLCollection

3. CSSstyleDeclaration object
- let h1 = document.queryeSelector("h1") 
console.log(h1.style) -> CSSStyleDeclaration

```
let object={
    key :1
}

object.key="";

<!-- object="" -->

console.log(object.key)


let h1 = document.queryeSelector('h1');

h1.style.backgroundColor ="red";
h1.style.cssText = "background-color:red";

```

3. Attributes

- getAttribute(name)
- setAttribute(name, value)
- hasAttribute(name) / boolean

4. ClassList -> DOMTokenList (array)
- .add("className1 , className2 , className3 , ..");
- .remove("className1 , className2 , className3);
- .contains("className1"); // boolean
- .toggle("className"); // if true then false else true


### DOM Lesson 4

####  dynamically DOM monupulation

- createElement('tagName'); ( yanagi html elemen qurib beradi)
- appendChild / append (element)
- prependChild / prepend (element)
- after / before (element)
- maping

#### DOM event

- on / addEventListener

#### on mouse

- click 
- dblClick
- mouseLeave
- mouseOver
- mouseMove

#### on keyboard

- keyDown
- keyUp
- keyPress

#### Browser / Window events

- DOMContentLoaded / loaded
- scroll
- resize

### Maping

- forEach
- map
- filter 
- reduce


## extra String 

str.subString(0, n)
















