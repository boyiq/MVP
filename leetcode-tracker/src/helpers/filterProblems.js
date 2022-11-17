const filterProblems = (target, array)=>{
  let newArray = [];
  array.forEach((element)=>{
    if (element.category === target) {
      newArray.push(element);
    }
  })
  return newArray;
}

export default filterProblems;