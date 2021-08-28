export interface User {
  username: string;
  profile: string;
}

const updateUser = () => {
  return (dispatch: any) => {
    fetch("/data/user.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "UPDATE_USER",
          payload: data,
        })
      );
  };
};
export default updateUser;
