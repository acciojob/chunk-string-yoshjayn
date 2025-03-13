function stringChop(str, size) {
  // your code here
	    let i=0
    while(i<str.length){
        console.log('i',i)
        arr.push(str.substring(i,i+size))
        i+=size
    }
return arr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
