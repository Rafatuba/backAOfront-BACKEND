import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateMemberController } from "./controllers/CreateMemberController";
import { ListMemberController } from "./controllers/ListMemberController";
import { DeleteMemberController } from "./controllers/DeleteMemberController";
import { UpdateMemberController } from "./controllers/UpdateMemberController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/musicos",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListMemberController().handle(request, reply);
    }
  );

  fastify.post(
    "/musicos",
    async (request: FastifyRequest, reply: FastifyReply) => {
      reply.code(201);
      return new CreateMemberController().handle(request, reply);
    }
  );

  fastify.delete(
    "/musicos",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteMemberController().handle(request, reply);
    }
  );

  //Não utilizado no front-end
  fastify.put(
    "/musicos",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateMemberController().handle(request, reply);
    }
  );
}
