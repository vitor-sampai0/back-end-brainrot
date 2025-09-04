import prisma from "../../prisma/client.js";

class BrainrotModel {
  getAll = async () => {
    return await prisma.brainrot.findMany();
  };

  create = async (
    name,
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    rarity_1,
    rarity_2,
    rarity_3,
    rarity_4,
    rarity_5,
    rarity_6,
    rarity_7,
    rarity_8,
    cost,
    income,
    favorite
  ) => {
    return await prisma.brainrot.create({
      data: {
        name,
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8,
        rarity_1,
        rarity_2,
        rarity_3,
        rarity_4,
        rarity_5,
        rarity_6,
        rarity_7,
        rarity_8,
        cost,
        income,
        favorite
      },
    });
  };

  update = async (
    id,
    name,
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    rarity_1,
    rarity_2,
    rarity_3,
    rarity_4,
    rarity_5,
    rarity_6,
    rarity_7,
    rarity_8,
    cost,
    income,
    favorite
  ) => {
    try {
      const brainrot = await prisma.brainrot.update({
        where: { id },
        data: {
          name,
          img_1,
          img_2,
          img_3,
          img_4,
          img_5,
          img_6,
          img_7,
          img_8,
          rarity_1,
          rarity_2,
          rarity_3,
          rarity_4,
          rarity_5,
          rarity_6,
          rarity_7,
          rarity_8,
          cost,
          income,
          favorite
        },
      });

      return brainrot;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const brainrotDeletada = await prisma.brainrot.delete({
        where: { id },
      });

      return brainrotDeletada;
    } catch (error) {
      console.log("Erro ao deletar o Curso!", error);
      throw error;
    }
  };
  async findById(id) {
    const brainrot = await prisma.brainrot.findUnique({
      where: {
        id: Number(id),
      },
    });
    return brainrot;
  }
}
export default new BrainrotModel();
