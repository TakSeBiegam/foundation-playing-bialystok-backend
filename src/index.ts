import { adapter } from "@/src/axolotl.js";
import resolvers from "@/src/resolvers.js";
import directives from "@/src/directives.js";

adapter({
  resolvers,
  directives,
}).server.listen(parseInt(process.env.PORT || "4002"), () => {
  console.log("LISTENING to " + (process.env.PORT ?? "4002"));
});
