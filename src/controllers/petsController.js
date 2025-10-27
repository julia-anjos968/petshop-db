import * as PetsModel from './../models/petsModel.js'

export const listarTodos = async (req, res) => {
    try {
        const pets = await PetsModel.findAll();

        if(!pets || pets.length ===0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Não há pets na lista',
                pets
            })
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'Lista de pets',
            pets
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.menssage,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const pet = await PetsModel.findById(id);

        if(!pet) {
            return res.status(404).json({
                erro: 'Pet não encontrado!',
                mensagem: 'Verifique se o id do pet existe',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'Pet encontrado',
            pet
        })
        
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar pet por id',
            detalhes: error.message
        })
    }
}
export const criar = async (req, res) => {
    try {
      const { nome, especie, idade, dono  } = req.body;
  
      const camposObrigatorios = ['nome', 'especie', 'idade', 'dono'];
      const faltando = camposObrigatorios.filter((campo) => !req.body[campo]);
  
      if (faltando.length > 0) {
        return res.status(400).json({
          erro: `Campos obrigatórios faltando: ${faltando.join(', ')}`,
        });
      }
  
      const novoPet = await petModel.criar({ nome, especie, idade: parseFloat(idade), dono });
  
      res.status(201).json({
        mensagem: 'Pet criado com sucesso!',
        pet: novoPet,
      });
    } catch (error) {
      res.status(500).json({
        erro: 'Erro ao criar pet',
        detalhes: error.message,
      });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const petExiste = await petsModel.listarUm(id);
        if (!petExiste) {
            return res.status(404).json({
                erro: 'Pet nao encontrado',
                id,
            });
        }

        const petAtualizado = await petModel.atualizar(id, dados);

        res.satus(200).json({
            mensagem: 'Pet atualizado com sucesso!',
            pet: petAtualizado,
        });
    } catch (error) {
        res.status(500).json({
            erro: ' Erro ao aualizar pet',
            detalhes: error.message,
        });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const petExiste = await petModel.listarUm(id);
        if (!petExiste) {
            return res.status(404).json({
                erro: 'Pet nao encontrado',
                id,
            });
        }

        await petModel.deletar(id);

        res.status(200).json({
            mensagem: 'pet cadastrado com sucesso!',
            petRemovido: petExiste,
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao deletar pet',
            detalhes: error.message,
        });
    }
};