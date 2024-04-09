import prismaClient from "../prisma";

// Lista todos os membros
class ListMemberService {
  async execute() {
    const members = await prismaClient.member.findMany();

    return members;
  }
}

export { ListMemberService };
