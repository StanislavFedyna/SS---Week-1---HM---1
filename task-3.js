// Link : https://www.codewars.com/kata/sum-of-a-sequence

const sequenceSum = (begin, end, step) => {
  
  if(begin > end){
    return 0
  }
  
  else if(begin === end){ 
    return begin
  }

  else{
    return begin + sequenceSum(begin += step, end, step)
  }
  const sum = sequenceSum(begin, end, step)
}

console.log(sequenceSum(1,5,3))