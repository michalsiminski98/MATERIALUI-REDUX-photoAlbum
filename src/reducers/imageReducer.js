import * as ActionTypes from "../actions/actionTypes";

const INITIAL_STATES = {
  images: [
    {
      id: 1,
      name: "Fox in a wood",
      link: "https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg",
    },
    {
      id: 2,
      name: "Buffalo",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bison_bison_d.jpg",
    },
    {
      id: 3,
      name: "Bird",
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruce.com%2Fparts-of-a-bird-387367&psig=AOvVaw2uWPNBZuyETLR_2xHzvI1B&ust=1621233073163000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjEp__JzfACFQAAAAAdAAAAABAD",
    },
  ],
};

const imageReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return;
    case ActionTypes.REMOVE:
      return state.images.filter(({ id }) => id !== action.payload.id);
    default:
      console.log("Wrong state");
      return state;
  }
};
export default imageReducer;
