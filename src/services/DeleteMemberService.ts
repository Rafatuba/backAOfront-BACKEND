import prismaClient from "../prisma";

interface DeleteMemberProps {
  id: string;
}

class DeleteMemberService {
  async execute({ id }: DeleteMemberProps) {
    if (!id) {
      throw new Error("É necessário passar um id para realizar a operação");
    }
    const findMember = await prismaClient.member.findFirst({
      where: {
        id: id,
      },
    });

    if (!findMember) {
      throw new Error("Músico não encontrado");
    }

    await prismaClient.member.delete({
      where: {
        id: findMember.id,
      },
    });

    return { message: "Cadastro excluído com sucesso" };
  }
}

export { DeleteMemberService };
