import { generateV1Uuid, generateV4Uuid } from "./generator";

const main = () => {
  console.log(generateV1Uuid());
  console.log(generateV4Uuid());
};

main();
