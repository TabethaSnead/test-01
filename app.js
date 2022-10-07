const addition = document.getElementById('addition')
const subtraction= document.getElementById('subtraction')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('modulo')
//const buttonSub = document.getElementById('buttonSub')

document.getElementById("buttonSub").onclick = function(){
    const inputSub = document.getElementById('inputSub').value;
    const inputSub2 = document.getElementById('inputSub2').value;
    const difference = inputSub - inputSub2;
    const resultSpan = document.getElementById('subResult');
    resultSpan.textContent= difference;
    console.log(difference)
    noLetters(difference)
}

document.getElementById("buttonAdd").onclick = function(){
    const inputAdd = document.getElementById("inputAdd").value;
    const inputAdd2 = document.getElementById("inputAdd2").value;
    const resultSpan = document.getElementById("addResult");
    // const sum =  inputAdd + inputAdd2;
    const sum = Number(inputAdd) + Number(inputAdd2);
    noLetters(sum)
    
    
    resultSpan.textContent = sum;
    console.log(inputAdd)
    
}
addition.addEventListener('click', ()=>{
    
})





const add = (n1, n2)=>{
    return n1+n2
}
console.log(add(4,8))

const sub = (n1, n2) =>{
    return n1-n2
}
console.log(sub (5, 16))

const mult = (n1, n2) =>{
    return n1*n2
}
console.log(mult(8,64))

const divi = (n1,n2) =>{
    return n1/n2
}
console.log(divi(500,12))

const modu = (n1, n2) =>{
    return n1%n2
}
console.log(modu(3,6))




function noLetters(x){

    if(isNaN(x)){
        alert("Must be a Number")
    }

}