// 1st Question

function Checkstring(duparr,check){
    let arr=[]
    chk=check.toLowerCase()
    let x=true;
    for(let i=0;i<duparr.length;i++){
        arr[arr.length]=duparr[i].toLowerCase();
        if(arr[i]==chk){
            x=false;
            console.log("true","'"+check+"'","is in the Index of",i)
        } 
    }
    if(x===true){
        console.log("-1")
    }
}
Checkstring(["org","HIZEXDGFCHGVH","abc"],"Abc")

// 2.Questions2. Array [2,6,4,1] above three true or false
// function checking odd numbers

// let count=0
// function odd(arr){
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2!==0){
//         count++
//     }
// }
// if(count>3){
//     return "True"
// }
// else{
//     return "False"
// }
// }
// console.log(odd([2,6,4,1]))

// 3.

// Method -1
// let arr=[]
// function differtwoarray(arr1,arr2){
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i]==arr2[j]){
//                arr1.splice(i,1)
//                arr2.splice(j,1)
//                i--
//             }
//         }
//     }
// console.log(arr1)
// console.log(arr2);
// }

// Method-2
// function differtwoarray(arr1,arr2){
//     let duplicate=[]
//     let original1=[]
//     let original2=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 duplicate[duplicate.length]=arr1[i]
//             }
//         }
//         if(!duplicate.includes(arr1[i])){
//             original1.push(arr1[i])
//         }
//     }
//     for(let j=0; j<arr2.length ;j++){
//         if(!duplicate.includes(arr2[j])){
//             original2.push(arr2[j])
//         }
//     }
//     console.log(original1)
//     console.log(original2)
// }
// differtwoarray([1,2,3,4,9,10],[2,3,56,4])