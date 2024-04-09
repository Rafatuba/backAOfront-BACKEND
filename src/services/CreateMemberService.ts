import prismaClient from "../prisma";

interface CreateMemberProps {
  name: string;
  email: string;
  instrument: string;
  birth_at: Date;
}

class CreateMemberService {
  async execute({ name, email, instrument, birth_at }: CreateMemberProps) {
    if (!name || !email || !instrument) {
      throw new Error("preencha todos os campos");
    }

    const member = prismaClient.member.create({
      data: {
        name,
        email,
        instrument,
        status: true,
        birth_at,
      },
    });

    return member;
  }
}

export { CreateMemberService };
