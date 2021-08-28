import { User } from "../actions";
const initialUser = {
  username: "",
  profile: "",
};

export interface actionType {
  type: string;
  payload: any;
}
const userReducer = (state: User = initialUser, action: actionType) => {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
