//Bai 1:
let str = "abcdef";
let str1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  str1 += str[i];
}
console.log(str1);

//Bai 2:
deleteEleSame = (...elements) => {
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[i] === elements[j]) {
        elements.splice(j, 1);
      }
    }
  }
  return elements;
};

console.log(deleteEleSame(1, 2, 3, 5, 4, 2, 6, 4));

//Bai 3:
//count the number of element in array which have the same value with the element in array. Count is maximum
countingValue = (...elements) => {
    let max=0;
    let flagMore = 0;
    for (let i = 0; i < elements.length; i++) {
        let count = 0;
        let flag = 0;
        for (let j = i; j < elements.length; j++) {
            if (elements[i] === elements[j]) {
                count++;
                flag = elements[i];
            }
        }
        if(count>=max){
            max=count;
            flagMore=flag;
        }

    }
    console.log(`value: ${flagMore} count: ${max}`);
}
countingValue(1, 2, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 2);

//Bai 4:
