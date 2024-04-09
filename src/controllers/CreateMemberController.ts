import { FastifyRequest, FastifyReply } from "fastify";
import { CreateMemberService } from "../services/CreateMemberService";

class CreateMemberController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, instrument, birth_at } = request.body as {
      name: string;
      email: string;
      instrument: string;
      birth_at: Date;
    };
    console.log(name);
    console.log(email);
    console.log(instrument);

    const memberService = new CreateMemberService();

    const member = await memberService.execute({
      name,
      email,
      instrument,
      birth_at,
    });

    reply.send(member);
  }
}

export { CreateMemberController };
