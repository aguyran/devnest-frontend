const updatedEmail = (data) => {
  return {
    type: "TEXT_WRITTEN",
    text: data,
  };
};
const updatedName = (data) => {
  return {
    type: "NAME_WRITTEN",
    text: data,
  };
};
export { updatedEmail, updatedName };
