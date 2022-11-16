const generateLink = (name) =>{
  let parsedName = name.toLowerCase().split(' ').join('-');
  let link =`https://leetcode.com/problems/${parsedName}/`;
  return link;
}

export default generateLink;