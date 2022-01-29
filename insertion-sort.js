function insertionSort(inputArray){
let n=inputArray.length
for (let i=0;l<n;i++){
let current=inputArray[i];
let j=i-1;
while(j>-1 && (current<inputArray[j])){
inputArray[j+1]=inputArray[j];
j--;
}
inputArray[j+1]=current;
}
return inputArray;
}

//best case Time complexity= O(n)
//average and worst case Time complexity =O(n^2)

//[22,27,16,2,18,6] 
//after first iteration
//[22,27,16,2,18,6] 
//after second iteration
//[16,22,27,2,18,6] 
//after third iteration
//[2,16,22,27,18,6]
//after forth iteration
//[2,16,18,22,27,6]
//after forth iteration
//[2,6,16,18,22,27] 

//[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımı
//after first iteration
//[3,7,5,8,2,9,4,15,6] 
//after second iteration
//[3,5,7,8,2,9,4,15,6] 
//after third iteration
//[2,3,5,7,8,9,4,15,6] 
//after forth iteration
//[2,3,4,5,7,8,9,15,6] 
