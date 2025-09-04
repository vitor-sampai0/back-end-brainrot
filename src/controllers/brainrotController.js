import brainrotModel from "../models/brainrotModel.js";

class BrainrotController {
  getAll = async (req, res) => {
    try {
      const brainrots = await brainrotModel.getAll();
      res.json(brainrots);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar brainrots" });
    }
  };

  create = async (req, res) => {
    const {     
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
      favorite } = req.body;

    try {
      if (!name) {
        return res.status(400).json({ erro: "O campo 'title' é obrigatório." });
      }
      if (!cost) {
        return res.status(400).json({ erro: "O campo 'cost' é obrigatório." });
      }
      if (!income) {
        return res.status(400).json({ erro: "O campo 'income' é obrigatório." });
      }
      

      const novaCourse = await brainrotModel.create(    name,
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
        favorite);
      res.status(201).json(novaCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar Brainrot" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const {     name,
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
      favorite } = req.body;

    try {
      const courseAtualizada = await brainrotModel.update(
        Number(id),
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
      );

      if (!courseAtualizada) {
        return res.status(404).json({ erro: "Brainrot não encontrada!" });
      }

      res.json(courseAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar Brainrot!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await brainrotModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Brainrot não encontrado" });
      }

      res.status(200).send({ message: "Brainrot deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir Brainrot!" });
    }
  };
  async getById(req, res) {
    try {
      const { id } = req.params;

      const course = await brainrotModel.findById(id);

      if (!course) {
        return res.status(404).json({ error: "Brainrot não encontrado" });
      }

      res.json(course);
    } catch (error) {
      console.error("Erro ao buscar Brainrot:", error);
      res.status(500).json({ error: "Erro ao buscar Brainrot" });
    }
  }

}
export default new BrainrotController();
