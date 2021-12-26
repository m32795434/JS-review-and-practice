console.log('it works!');
const myHtml = `
<div>
    <h1>Hola mundo</h1>
    <p>Lorem ipsum dolor sit amet 
            <strong>HOOOOO  HO HOOOO</strong> 
        consectetur adipisicing elit.
    </p>
    <img src="https://picsum.photos/200/300" alt="nice dog!">
    <ul>
        <li>uno</li>
        <li>dos</li>
        <li>tres</li>
    </ul>
</div>`;
const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);
const p = document.querySelector('p');
const h1 = p.closest('h1');
console.log(h1); // null
