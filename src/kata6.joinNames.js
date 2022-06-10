const joinNames = (namesObj) => {
  const namesArr = [];
  for (let i = 0; i < namesObj.length; i++) {
    namesArr.push(namesObj[i].name);
  }

  if (namesArr.length === 3) {
    return `${namesArr[0]}, ${namesArr[1]} & ${namesArr[2]}`;
  } else if (namesArr.length === 4) {
    return `${namesArr[0]}, ${namesArr[1]}, ${namesArr[2]} & ${namesArr[3]}`;
  } else if (namesArr.length === 5) {
    return `${namesArr[0]}, ${namesArr[1]}, ${namesArr[2]}, ${namesArr[3]} & ${
      namesArr[4]
    }`;
  }
};

const newNames = [
  {
    name: "Bart",
  },
  {
    name: "Lisa",
  },
  {
    name: "Maggie",
  },
  {
    name: "Irfan",
  },
  {
    name: "Hina",
  },
  {
    name: "Haris",
  },
];

module.exports = joinNames;

// //using a for of loop
// for (let indexValue of arr.entries()) {
//   console.log(indexValue)
