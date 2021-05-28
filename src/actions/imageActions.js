import * as ActionTypes from "./imageTypes";

export const addImage = (imageName, imageDescribe, imageImg) => ({
  type: ActionTypes.ADD,
  payload: {
    name: imageName,
    describe: imageDescribe,
    img: imageImg,
  },
});

export const removeImage = (imageID) => ({
  type: ActionTypes.REMOVE,
  payload: {
    id: imageID,
  },
});
