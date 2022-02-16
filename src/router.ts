import { FastifyInstance } from "fastify"
import indexRoute from "./controllers/index";

const routers =  async (fastify: FastifyInstance) => {
    // router prefix
    fastify.register(indexRoute, { prefix: '/' })
}

export default routers