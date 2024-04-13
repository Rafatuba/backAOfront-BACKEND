import prismaClient from "../prisma";

// Não utilizado no front-end
interface UpdateMemberProps {
  id: string;
  email: string;
}

class UpdateMemberService {
  async execute({ id, email }: UpdateMemberProps) {
    if (!id) {
      throw new Error("É necessário passar um id para realizar a operação");
    }

    const findMember = await prismaClient.member.findFirst({
      where: {
        id: id,
      },
    });
    if (!findMember) {
      throw new Error("Músico não encontrado.");
    }

    await prismaClient.member.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
    if (!email) {
      throw new Error("Erro ao atualizar email");
    }

    return { message: "Campo atualizado com sucesso" };
  }
}

export { UpdateMemberService };
