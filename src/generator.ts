import { v1, v4 } from "uuid";

export const generateV1Uuid = () => {
  return v1();
};

export const generateV4Uuid = () => {
  return v4();
};
