import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"

const index = async (fastify: FastifyInstance) => {
    
    fastify.get('/',async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({ message: "Hello Fastify MVC!!" })
    })

}

export default index