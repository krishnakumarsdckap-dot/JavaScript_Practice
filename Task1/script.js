// 1.Let string = “Dckap123” how many objects and numbers in the string.

// let str = "Dckap123"
// let sum=0;
// let count=0
// for(let i=0; i<str.length; i++){
//     if(str[i]>0 && str[i]<9){
//         sum+=1
//     }
//     else {
//         count+=1
//     }
// }
// console.log(`There are ${count} words in that string.`);
// console.log(`There are ${sum} numbers in that string.`);

// 2.sum of the elements let a = [1,2,3,4,5,true] output : 15

// let a = [1,2,3,4,5,true]
// let sum=0;
// for(let i=0; i<a.length; i++){
//     if(typeof(a[i])=="boolean"){
//         continue;
//     }
//     else{
//         sum+=a[i]
//     }
// }
// console.log(sum)

// 3.second largest number a = [54,23,11,17,10] output : 23

// let a = [54,23,11,17,10]
// let max=0;
// let secondmax=0;
// for(let i=0; i<a.length; i++){
//     if(a[i]>max){
//         max=a[i];
//     }
// }
// for(let i=0; i<a.length; i++){
//     if(a[i]>secondmax&&a[i]!==max){
//         secondmax=a[i]
//     }
// }
// console.log(secondmax)

// 4.Assending and descending two arguments passed

// function asds(a,b){
//     if ( b == "asc"){
//         for (let i=0; i<a.length; i++){
//             for(let j=0; j<a.length; j++){
//                 if (a[i] < a[j]){
//                     let ase = a[i]
//                     a[i] = a[j]
//                     a[j] = ase
//                 }
//             }
//         }
//     }
//     if ( b == "dsc"){
//         for (let i=0; i<a.length; i++){
//             for(let j=0; j<a.length; j++){
//                 if (a[i] > a[j]){
//                     let dse = a[i]
//                     a[i] = a[j]
//                     a[j] = dse
//                 }
//             }
//         }
//     }
//     console.log(a)
// }
// asds([2,3,4,1,6],"dsc") 

// 5.Count positive and negative values in the array // positives are sum and negative are count

// let arr=[-1,5,7,-10,2,9]
// let positive=0;
// let negative=0;
// for(let i=0; i<arr.length ;i++){
//     if(arr[i]>0){
//         positive+=arr[i]
//     }
//     else if(arr[i]<0){
//         negative++
//     }
// }
// console.log("The sum of the positive numbers is :",positive)
// console.log("The total number of the nagative numbers is :",negative)

// 6.Find the missing number in the array Let a = [1,2,3,4,6] //output : 5 is missing

// Method-1
// let arr = [-5,2,3,6]
// let x=arr[0];
// let missing=[]
// for(let i=0; i<arr.length;i++){
//     if(arr[i]==x){
//         x++
//     }
//     else{
//         missing[missing.length]=x
//         x++
//         i--
//     }
// }
// console.log(missing)

// Method-2
// let arr=[1,2,3,4,10]
// let count=arr[0]
// let missing=[]
// for(let i=0; i<arr.length ;i++){
//     while(arr[i]!==count){
//         missing[missing.length]=count
//         count++
//     }
//     count++
// }
// console.log(missing)