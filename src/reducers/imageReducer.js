import * as ActionTypes from "../actions/imageTypes";

const INITIAL_STATES = {
  images: [
    {
      id: 1,
      name: "Fox in a wood",
      describe: "asd",
      img: "https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg",
    },
    {
      id: 2,
      name: "Buffalo",
      describe: "asd",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bison_bison_d.jpg",
    },
    {
      id: 3,
      name: "Bird",
      describe: "asd",
      img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQDbC9Mb4oorlDmYYk7lm7Av-qd3jgGz2FSV6LUOuQjbr6E6MbHdPIxPH7-7jMZkoOIoZJgL3Ky7U-ZdLp3uRY",
    },
    {
      id: 4,
      name: "Fox in a wood",
      describe: "asd",
      img: "https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg",
    },
    {
      id: 5,
      name: "Buffalo",
      describe: "asd",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bison_bison_d.jpg",
    },
    {
      id: 6,
      name: "Bird",
      describe: "asd",
      img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQDbC9Mb4oorlDmYYk7lm7Av-qd3jgGz2FSV6LUOuQjbr6E6MbHdPIxPH7-7jMZkoOIoZJgL3Ky7U-ZdLp3uRY",
    },
    {
      id: 7,
      name: "Fox in a wood",
      describe: "asd",
      img: "https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg",
    },
    {
      id: 8,
      name: "Buffalo",
      describe: "asd",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bison_bison_d.jpg",
    },
    {
      id: 9,
      name: "Bird",
      describe: "asd",
      img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQDbC9Mb4oorlDmYYk7lm7Av-qd3jgGz2FSV6LUOuQjbr6E6MbHdPIxPH7-7jMZkoOIoZJgL3Ky7U-ZdLp3uRY",
    },
    {
      id: 10,
      name: "Fox in a wood",
      describe: "asd",
      img: "https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg",
    },
    {
      id: 11,
      name: "Buffalo",
      describe: "asd",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bison_bison_d.jpg",
    },
    {
      id: 12,
      name: "Bird",
      describe: "asd",
      img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQDbC9Mb4oorlDmYYk7lm7Av-qd3jgGz2FSV6LUOuQjbr6E6MbHdPIxPH7-7jMZkoOIoZJgL3Ky7U-ZdLp3uRY",
    },
  ],
};

const imageReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      const id = Math.floor(Math.random() * 1000000);
      const newObject = {
        id: id,
        name: action.payload.name,
        describe: action.payload.describe,
        img: action.payload.img,
      };
      return { ...state, images: [...state.images, newObject] };
    case ActionTypes.REMOVE:
      return state.images.filter(({ id }) => id !== action.payload.id);
    default:
      console.log("Wrong state");
      return state;
  }
};
export default imageReducer;
