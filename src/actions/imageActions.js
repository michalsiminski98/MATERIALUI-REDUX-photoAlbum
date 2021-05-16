import * as ActionTypes from "./imageTypes";

export const addImage = (imageName, imageLink) => ({
  type: ActionTypes.ADD,
  payload: {
    name: imageName,
    link: imageLink,
  },
});

export const removeImage = (imageID) => ({
  type: ActionTypes.REMOVE,
  payload: {
    id: imageID,
  },
});
