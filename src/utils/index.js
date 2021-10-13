export const isTrue = (value) => (value === 0 ? true : value);
//when it's 0, it is true

export const isInt = (value) => {

    if (isNaN(value)) {
       return false
    } 
    const num = parseFloat(value)
  
    return (num | 0) === num;
}