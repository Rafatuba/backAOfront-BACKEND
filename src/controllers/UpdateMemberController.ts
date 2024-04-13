import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateMemberService } from "../services/UpdateMemberService";

// Não utilizado no front-end
class UpdateMemberController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, email } = request.query as { id: string; email: string };

    const updateMemberService = new UpdateMemberService();

    const updateMember = await updateMemberService.execute({ id, email });

    reply.send(updateMember);
  }
}

export { UpdateMemberController };
