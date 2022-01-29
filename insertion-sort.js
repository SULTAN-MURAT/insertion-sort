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
