const root=document.getElementById('root')
const button=document.getElementById('btn')
// console.log(button)
// console.log(root)
const h2=document.createElement('h2');
const h1=document.createElement('h1');
const img= document.createElement('img');
const div=document.createElement('div');
function getData(){
    try{

    img.src='';
    img.setAttribute('height',200);
    img.setAttribute('width',2000);
    h2.innerText="ABES ENGINEERING COLLEGE";
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    h1.innerHTML = '<h2 style=color:green>Welcome to DOM</h2>'
    div.style.border='2px solid red';
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h1);
    root.appendChild(div);
    }catch(e){
        console.log(e)
    }
    finally{
        button.remove();
    }
}
button.addEventListener('click',getData);
