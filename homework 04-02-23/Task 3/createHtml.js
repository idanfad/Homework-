export class CreateHtml {
    tagName;
    tagAttribute;
    tagAttributeContent;
    tagTextContent;
    constructor(
       tagNameInput,
       tagAttributeInput,
       tagAttributeContentInput,
       tagTextConentInput
    ) {
       this.tagName = tagNameInput;
       this.tagAttribute = tagAttributeInput;
       this.tagAttributeContent = tagAttributeContentInput;
       this.tagTextContent = tagTextConentInput;
    }
    print() {
       let newHTML = document.createElement(this.tagName);
       let newTextNode = document.createTextNode(this.tagTextContent);
 
       newHTML.setAttribute(this.tagAttribute, this.tagAttributeContent);
       newHTML.appendChild(newTextNode);
       document.body.appendChild(newHTML);
    }
 }
