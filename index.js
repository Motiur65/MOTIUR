// let calculateAll = document.getElementsByClassName('calculateButton');
// for(const calculate of calculateAll){
//     calculate.addEventListener('click', function(){
//         //console.log('clicked');
//         let inputValueall = document.getElementsByTagName('input');
//         for(const inputValue of inputValueall){
//             if(inputValue.value !== typeof 'number'){
//                 alert('Please give a valid input');
//             }
//         }
//     })
// }


let triangleInput1 = document.getElementById('triangleInput1');
let triangleInput2 = document.getElementById('triangleInput2');
let areaCalculation = document.getElementById('areaCalculation');
function allShape(input1, input2, shape){
    if(typeof parseInt(input1.value) === 'number' && typeof parseInt(input2.value) === 'number'){
        // alert('valid input');
        let count = 0;
        let area = parseInt(input1.value)*parseInt(input2.value);
        const p = document.createElement('p');
        count = count+1;
        p.innerText = count++ + '. Area of' + shape + 'is :'+ ' ' + area;
        areaCalculation.appendChild(p);
    }
    else{
        alert('not a valid input');
    }
}



document.getElementById('triangleButton').addEventListener('click', function(){
    allShape('triangleInput1', 'triangleInput2', 'triangle');
    // if(typeof parseInt(triangleInput1.value) === 'number' && typeof parseInt(triangleInput2.value) === 'number'){
    //     // alert('valid input');
    //     let count = 0;
    //     let area = parseInt(triangleInput1.value)*parseInt(triangleInput2.value);
    //     console.log(area);
    //     const p = document.createElement('p');
    //     count = count+1;
    //     p.innerText = count++ + '. Area of triangle is :'+ ' ' + area;
    //     areaCalculation.appendChild(p);
    // }
    // else{
    //     alert('not a valid input');
    // }
})
