const getMonth = (string) => {
  const temp = string.split("-");
  const indexOfMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return indexOfMonths[parseInt(temp[1]) - 1];
};
const getDay=(string)=>{
    const temp = string.split("-");
    return temp[2]
}
export { getMonth,getDay };
