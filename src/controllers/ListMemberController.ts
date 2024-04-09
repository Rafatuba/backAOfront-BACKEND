import { FastifyRequest, FastifyReply } from "fastify";
import { ListMemberService } from "../services/ListMemberService";

class ListMemberController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listMemberService = new ListMemberService();

    const listMember = await listMemberService.execute();

    reply.send(listMember);
  }
}

export { ListMemberController };
