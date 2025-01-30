
function customRender(reactElement,container){
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    //yaha hum dekh sakte hai ki hmara code repeat ho rha hai to isko aur ache se likhne ke liye hum loop ka use kar skte hai
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    container.appendChild(domElement)
}

let reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);