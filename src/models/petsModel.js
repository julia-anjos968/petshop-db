import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.pets.findMany({
    });
}

export const findById = async (id) => {
    return await prisma.pets. findUnique({
        where: { id: Number(id) }
    });
}

export const criar = async (dados) => {
    const { id, ...dadosSemId } = dados;
    return await prisma.pets.create({
      data: dadosSemId,
    });
  };

export const deletar = async (id) => {
    return await prisma.pets.delete({
      where: { id },
    });
  };

export const atualizar = async (id, dados) => {
    return await prisma.pets.update({
      where: { id },
      data: dados,
    });
  };