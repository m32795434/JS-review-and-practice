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
const par = document.querySelector('.par');
const h1 = p.closest('h1');
console.log(h1); // null

function isEven(value){
return value % 2 === 0;
}
par.addEventListener('keydown', (e)=>{
if(e.key==="Enter"){
    const value = parseFloat(e.currentTarget.value);
    if (isEven(value)){
        par.insertAdjacentText('afterend',`  ${value} is even!`);
    } else {
        par.insertAdjacentText('afterend',`  ${value} is odd!`);
    }
}
})

