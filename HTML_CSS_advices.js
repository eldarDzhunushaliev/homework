const
elementName = document.getElementById('ID'),
elementsName = document.getElementsByTagName('tagName'),
elementsName = document.getElementsByClassName('className'),
elementsName = document.querySelectorAll('selectorName'),
elementName = document.querySelector('selectorName');

elementName.style.backgroundColor = 'color';
                 .width = '100px';
                 .cssText = 'background-color: color; width: 100px';

elementsName[0].style.borderRadius = '100%';
                     .backgroundColor = 'color';

//for querySelectorAll:
elementsName.forEach(item => {
    item.style.backgroundColor = 'color';
});

const elementName = document.createElement('elementName');
const someText = document.createTextNode('Some text');

elementName.classList.add('className');

document.body.append(elementName);
className.append(newClassName);
className.prepend(newClassName);

elementsName[0].after(elementName);

elementName.remove();

elementsName[0].replaceWith(elementName);

className.appendChild(elementName);
className.insertBefore(elementName, elementsName[0]);
className.removeChild(elementsName[0]);
className.replaceChild(newElementName, oldElementsName);

elementName.innerHTML = '<tagName>HTMLcode</tagName>';

elementName.textContent = 'Some text';

elementName.insertAdjacentHTML('before/afterbegin/end', '<tagName>HTMLcode</tagName>');

document.documentElement;
document.head;
        .body;

elementName.childNodes;
           .firstChild;      .firstElementChild;
           .lastChild;       .lastElementChild;
           .parentNode;      .parentElement;
           .nextSibling;     .nextElementSibling;
           .previousSibling; .previousElementSibling;


