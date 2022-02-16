import * as fastify from "fastify"
import cors from "fastify-cors"
import formbody from "fastify-formbody";

import routers from "./router"

const app: fastify.FastifyInstance = fastify.fastify({
  logger: {
    level: "info",
  },
});

// Plugin
app.register(cors)
app.register(formbody)

// Route
app.register(routers)

export default app;
