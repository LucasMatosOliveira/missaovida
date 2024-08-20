const { sequelize } = require("../models");
const Acolhido = require("../models/acolhido");
const Filhos = require("../models/acolhido_filhos");
const Saude = require("../models/dados_saude")
const Social = require("../models/estado_social")
const Medicamento = require("../models/medicamento")
const Substancia = require("../models/substancia")
const Alta = require("../models/termo_alta")
const Guarda = require("../models/termo_guarda")
const Responsabilidade = require("../models/termo_responsabilidade")
const Juridico = require("../models/vida_juridica")

const createAcolhido = async (req, reply) => {
    const { nome_acolhido, cidade_natural, estado_natural, cidade_origem, estado_origem, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, contato_familiar, filhos_acolhido, religiao_acolhido, acolhidoFilhos, dados_saude, medicamento, vida_juridica, substancia, estado_social, termo_guarda, termo_responsabilidade, termo_alta} = req.body;
    const transaction = await sequelize.transaction()
    try {      
        const acolhido = await Acolhido.create({ nome_acolhido, cidade_natural, estado_natural, cidade_origem, estado_origem, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, contato_familiar, filhos_acolhido, religiao_acolhido  }, {transaction});
        if (acolhidoFilhos && acolhidoFilhos.length > 0) {
            for (const filho of acolhidoFilhos) {
                await Filhos.create({
                    nome_filho: filho.nome_filho, 
                    paga_pensao: filho.paga_pensao, 
                    id_acolhido: acolhido.id_acolhido
                }, { transaction });
            }
        }
        await Saude.create({
            tratamento_psiquiatrico: dados_saude.tratamento_psiquiatrico,
            local_tratamento: dados_saude.local_tratamento,
            lesao_fisica: dados_saude.lesao_fisica,
            local_lesao_fisica: dados_saude.local_lesao_fisica,
            doenca_respiratoria: dados_saude.doenca_respiratoria,
            nome_doenca_respiratoria: dados_saude.nome_doenca_respiratoria,
            alergia_alimentar: dados_saude.alergia_alimentar,
            nome_alimento: dados_saude.nome_alimento,
            alergia_medicamentos: dados_saude.alergia_medicamentos,
            nome_alergia_medicamento: dados_saude.nome_alergia_medicamento,
            outras_doencas: dados_saude.outras_doencas,
            tentativa_suicidio: dados_saude.tentativa_suicidio,
            automutilacao: dados_saude.automutilacao,
            historico_cancer: dados_saude.historico_cancer,
            tipo_cancer: dados_saude.tipo_cancer,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        if (medicamento && medicamento.length > 0) {
            for (const medicamentos of medicamento) {
                await Medicamento.create({
                    medicamento_psicotropico: medicamentos.medicamento_psicotropico, 
                    nome_medicamento: medicamentos.nome_medicamento,
                    motivo_uso: medicamentos.motivo_uso, 
                    id_acolhido: acolhido.id_acolhido
                }, { transaction });
            }
        }
        await Juridico.create({
            historico_prisao: vida_juridica.historico_prisao,
            motivo_prisao: vida_juridica.motivo_prisao,
            processos: vida_juridica.processos,
            cidade_processo: vida_juridica.cidade_processo,
            estado_processo: vida_juridica.estado_processo,
            uso_tornozeleira: vida_juridica.uso_tornozeleira,
            informou_central: vida_juridica.informou_central,
            cumpriu_pena: vida_juridica.cumpriu_pena,
            situacao_legal: vida_juridica.situacao_legal,
            motivo_situacao_legal: vida_juridica.motivo_situacao_legal,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        await Substancia.create({
            uso_alcool: substancia.uso_alcool,
            idade_alcool: substancia.idade_alcool,
            motivo_alcool: substancia.motivo_alcool,
            uso_tabaco: substancia.uso_tabaco,
            idade_tabaco: substancia.idade_tabaco,
            motivo_tabaco: substancia.motivo_tabaco,
            outras_drogas: substancia.outras_drogas,
            motivo_outras_drogas: substancia.motivo_outras_drogas,
            principal_substancia: substancia.principal_substancia,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        await Social.create({
            situacao_rua: estado_social.situacao_rua,
            tempo_rua: estado_social.tempo_rua,
            motivo_rua: estado_social.motivo_rua,
            chegada_missao_vida: estado_social.chegada_missao_vida,
            sentimentos: estado_social.sentimentos,
            objetivos: estado_social.objetivos,
            outros_centros: estado_social.outros_centros,
            nome_outros_centros: estado_social.nome_outros_centros,
            tempo_outros_centros: estado_social.tempo_outros_centros,
            motivo_saida_outros_centros: estado_social.motivo_saida_outros_centros,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        await Guarda.create({
            autorizacao_guarda: termo_guarda.autorizacao_guarda,
            documentos_guardados: termo_guarda.documentos_guardados,
            descricao_carteira: termo_guarda.descricao_carteira,
            recurso_especie: termo_guarda.recurso_especie,
            aparelho_celular: termo_guarda.aparelho_celular,
            outros_objetos: termo_guarda.outros_objetos,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        await Responsabilidade.create({
            pdf_termo_responsabilidade: termo_responsabilidade.pdf_termo_responsabilidade,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        await Alta.create({
            pdf_termo_alta: termo_alta.pdf_termo_alta,
            id_acolhido: acolhido.id_acolhido
        }, { transaction });
        await transaction.commit();
        console.log("Acolhido Cadastrado")
        return reply.status(200).send({ message: 'Acolhido cadastrado!' });  
    } catch (error) {
        await transaction.rollback();
        return reply.status(400).send(error);
    }
};

const updateAcolhido = async (req, reply) => {
    const { nome_acolhido, cidade_natural, estado_natural, cidade_origem, estado_origem, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, contato_familiar, filhos_acolhido, religiao_acolhido, acolhidoFilhos, dados_saude, medicamento, vida_juridica, substancia, estado_social, termo_guarda, termo_responsabilidade, termo_alta } = req.body;
    const transaction = await sequelize.transaction()
    try {
        await Acolhido.update({ nome_acolhido, cidade_natural, estado_natural, cidade_origem, estado_origem, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, contato_familiar, filhos_acolhido, religiao_acolhido  }, 
            {
                where: { rg_acolhido },
                transaction
        });
        const acolhido = await Acolhido.findOne({
            where: { rg_acolhido },
            transaction
        });

        // Buscar todos os filhos do acolhido ordenados por id (ou outra coluna que define a ordem)
        const filhosExistentes = await Filhos.findAll({
            where: {
                id_acolhido: acolhido.id_acolhido
            },
            transaction
        });

        const medicamentosExistentes = await Medicamento.findAll({
            where: {
                id_acolhido: acolhido.id_acolhido
            },
            transaction
        });

        // Atualizar os filhos do acolhido baseados na ordem do array acolhidoFilhos
        for (let i = 0; i < acolhidoFilhos.length; i++) {
            if (filhosExistentes[i]) {
                await Filhos.update(
                    {
                        nome_filho: acolhidoFilhos[i].nome_filho,
                        paga_pensao: acolhidoFilhos[i].paga_pensao
                    },
                    {
                        where: {
                            id_acolhidos_filhos: filhosExistentes[i].id_acolhidos_filhos
                        },
                        transaction
                    }
                );
            }
        }

        for (let i = 0; i < medicamento.length; i++) {
            if (medicamentosExistentes[i]) {
                await Medicamento.update(
                    {
                        medicamento_psicotropico: medicamento[i].medicamento_psicotropico,
                        nome_medicamento: medicamento[i].nome_medicamento,
                        motivo_uso: medicamento[i].motivo_uso
                    },
                    {
                        where: {
                            id_medicamento: medicamentosExistentes[i].id_medicamento
                        },
                        transaction
                    }
                );
            }
        }

        await Saude.update({
            tratamento_psiquiatrico: dados_saude.tratamento_psiquiatrico,
            local_tratamento: dados_saude.local_tratamento,
            lesao_fisica: dados_saude.lesao_fisica,
            local_lesao_fisica: dados_saude.local_lesao_fisica,
            doenca_respiratoria: dados_saude.doenca_respiratoria,
            nome_doenca_respiratoria: dados_saude.nome_doenca_respiratoria,
            alergia_alimentar: dados_saude.alergia_alimentar,
            nome_alimento: dados_saude.nome_alimento,
            alergia_medicamentos: dados_saude.alergia_medicamentos,
            nome_alergia_medicamento: dados_saude.nome_alergia_medicamento,
            outras_doencas: dados_saude.outras_doencas,
            tentativa_suicidio: dados_saude.tentativa_suicidio,
            automutilacao: dados_saude.automutilacao,
            historico_cancer: dados_saude.historico_cancer,
            tipo_cancer: dados_saude.tipo_cancer
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );

        await Juridico.update({
            historico_prisao: vida_juridica.historico_prisao,
            motivo_prisao: vida_juridica.motivo_prisao,
            processos: vida_juridica.processos,
            cidade_processo: vida_juridica.cidade_processo,
            estado_processo: vida_juridica.estado_processo,
            uso_tornozeleira: vida_juridica.uso_tornozeleira,
            informou_central: vida_juridica.informou_central,
            cumpriu_pena: vida_juridica.cumpriu_pena,
            situacao_legal: vida_juridica.situacao_legal,
            motivo_situacao_legal: vida_juridica.motivo_situacao_legal
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );

        await Substancia.update({
            uso_alcool: substancia.uso_alcool,
            idade_alcool: substancia.idade_alcool,
            motivo_alcool: substancia.motivo_alcool,
            uso_tabaco: substancia.uso_tabaco,
            idade_tabaco: substancia.idade_tabaco,
            motivo_tabaco: substancia.motivo_tabaco,
            outras_drogas: substancia.outras_drogas,
            motivo_outras_drogas: substancia.motivo_outras_drogas,
            principal_substancia: substancia.principal_substancia
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );


        await Social.update({
            situacao_rua: estado_social.situacao_rua,
            tempo_rua: estado_social.tempo_rua,
            motivo_rua: estado_social.motivo_rua,
            chegada_missao_vida: estado_social.chegada_missao_vida,
            sentimentos: estado_social.sentimentos,
            objetivos: estado_social.objetivos,
            outros_centros: estado_social.outros_centros,
            nome_outros_centros: estado_social.nome_outros_centros,
            tempo_outros_centros: estado_social.tempo_outros_centros,
            motivo_saida_outros_centros: estado_social.motivo_saida_outros_centros
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );

        await Guarda.update({
            autorizacao_guarda: termo_guarda.autorizacao_guarda,
            documentos_guardados: termo_guarda.documentos_guardados,
            descricao_carteira: termo_guarda.descricao_carteira,
            recurso_especie: termo_guarda.recurso_especie,
            aparelho_celular: termo_guarda.aparelho_celular,
            outros_objetos: termo_guarda.outros_objetos
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );

        await Responsabilidade.update({
            pdf_termo_responsabilidade: termo_responsabilidade.pdf_termo_responsabilidade
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );

        await Alta.update({
            pdf_termo_alta: termo_alta.pdf_termo_alta
        }, {where:{id_acolhido: acolhido.id_acolhido}, transaction}
        );

        await transaction.commit();
        return reply.status(200).send();
    } catch (error) {
        await transaction.rollback();
        return reply.status(400).send(error);
    }
};

const getAcolhidos = async (req, reply) => {
    try {
        const acolhidos = await Acolhido.findAll(
            {
          include: [Filhos, Saude, Medicamento, Social, Substancia, Alta, Guarda, Responsabilidade, Juridico]
            }
        );
        return reply.send(acolhidos);
      } catch (error) {
        return reply.status(400).send(error);
      }
};

const getAcolhidoById = async (req, reply) => {
    try {
        const { id } = req.params;
        const acolhido = await Acolhido.findByPk(id,
            {
                include: [Filhos, Saude, Medicamento, Social, Substancia, Alta, Guarda, Responsabilidade, Juridico]
            }
        );
        
        if (!acolhido) {
            return reply.status(404).send({ message: "Acolhido não encontrado" });
        }

        return reply.send(acolhido);
    } catch (error) {
        return reply.status(400).send(error);
    }
};



module.exports = {
    createAcolhido,
    updateAcolhido,
    getAcolhidos,
    getAcolhidoById
};