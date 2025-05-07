import { createResolvers } from "@/src/axolotl.js";
const resolvers = createResolvers({
  Query: {
    health: () => {
      return "ok";
    },
  },
});
export default resolvers;
