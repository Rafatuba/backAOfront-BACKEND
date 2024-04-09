import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteMemberService } from "../services/DeleteMemberService";

class DeleteMemberController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deleteMemberService = new DeleteMemberService();

    const deleteMember = await deleteMemberService.execute({ id });

    reply.send(deleteMember);
  }
}

export { DeleteMemberController };
