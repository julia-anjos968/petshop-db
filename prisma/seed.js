import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const pets = [
  { nome: "Rex", especie: "Cachorro", idade: 5, dono: "João" },
  { nome: "Mimi", especie: "Gato", idade: 3, dono: "Ana" },
  { nome: "Bolt", especie: "Cachorro", idade: 2, dono: "Carlos" },
  { nome: "Luna", especie: "Coelho", idade: 1, dono: "Beatriz" },
  { nome: "Toby", especie: "Cachorro", idade: 4, dono: "Marcos" },
  { nome: "Nina", especie: "Gato", idade: 6, dono: "Larissa" },
  { nome: "Pingo", especie: "Pássaro", idade: 2, dono: "Felipe" },
  { nome: "Mel", especie: "Cachorro", idade: 3, dono: "Júlia" },
  { nome: "Zeca", especie: "Gato", idade: 7, dono: "Rafael" },
  { nome: "Lulu", especie: "Coelho", idade: 1, dono: "Paula" },
  { nome: "Thor", especie: "Cachorro", idade: 8, dono: "André" },
  { nome: "Sushi", especie: "Peixe", idade: 1, dono: "Bruna" },
  { nome: "Fifi", especie: "Gato", idade: 4, dono: "Rodrigo" },
  { nome: "Bob", especie: "Cachorro", idade: 5, dono: "Camila" },
  { nome: "Kira", especie: "Coelho", idade: 2, dono: "Henrique" },
  { nome: "Max", especie: "Cachorro", idade: 6, dono: "Luciana" },
  { nome: "Lola", especie: "Gato", idade: 3, dono: "Pedro" },
  { nome: "Pipoca", especie: "Hamster", idade: 1, dono: "Mariana" },
  { nome: "Fred", especie: "Pássaro", idade: 2, dono: "Vinícius" },
  { nome: "Amora", especie: "Gato", idade: 5, dono: "Sofia" },
  { nome: "Spike", especie: "Cachorro", idade: 7, dono: "Lucas" },
  { nome: "Teca", especie: "Coelho", idade: 3, dono: "Isabela" },
  { nome: "Nick", especie: "Cachorro", idade: 2, dono: "Gustavo" },
  { nome: "Maya", especie: "Gato", idade: 1, dono: "Fernanda" },
  { nome: "Chico", especie: "Pássaro", idade: 4, dono: "Diego" },
  { nome: "Lili", especie: "Gato", idade: 2, dono: "Carla" },
  { nome: "Rafa", especie: "Cachorro", idade: 9, dono: "Eduarda" },
  { nome: "Nico", especie: "Hamster", idade: 1, dono: "Tiago" },
  { nome: "Malu", especie: "Coelho", idade: 2, dono: "Juliana" },
  { nome: "Bidu", especie: "Cachorro", idade: 6, dono: "Roberto" },
  { nome: "Tina", especie: "Gato", idade: 4, dono: "Natália" },
  { nome: "Bento", especie: "Cachorro", idade: 5, dono: "Caio" },
  { nome: "Cacau", especie: "Coelho", idade: 1, dono: "Rita" },
  { nome: "Pluto", especie: "Cachorro", idade: 3, dono: "Mário" },
  { nome: "Mika", especie: "Gato", idade: 2, dono: "Patrícia" },
  { nome: "Simba", especie: "Cachorro", idade: 7, dono: "Renato" },
  { nome: "Nala", especie: "Gato", idade: 5, dono: "Viviane" },
  { nome: "Romeu", especie: "Pássaro", idade: 3, dono: "Fernando" },
  { nome: "Jade", especie: "Coelho", idade: 2, dono: "Tatiana" },
  { nome: "Ozzy", especie: "Cachorro", idade: 4, dono: "Alexandre" },
  { nome: "Lupita", especie: "Gato", idade: 6, dono: "Priscila" },
  { nome: "Apollo", especie: "Cachorro", idade: 2, dono: "Igor" },
  { nome: "Tobby", especie: "Cachorro", idade: 5, dono: "Silvia" },
  { nome: "Pérola", especie: "Gato", idade: 3, dono: "Elisa" },
  { nome: "Frajola", especie: "Gato", idade: 8, dono: "Ricardo" },
  { nome: "Sansão", especie: "Cachorro", idade: 6, dono: "Letícia" },
  { nome: "Estrela", especie: "Pássaro", idade: 1, dono: "Joana" },
  { nome: "Billy", especie: "Cachorro", idade: 4, dono: "Miguel" },
  { nome: "Mel", especie: "Coelho", idade: 3, dono: "Gabriela" },
  { nome: "Zoe", especie: "Gato", idade: 2, dono: "Tatiane" },
  { nome: "Cookie", especie: "Hamster", idade: 1, dono: "Danilo" }
];

async function main() {
    console.log('Iniciando o processo de seed...');

    // Limpa toda a tabela antes de inserir
    await prisma.pets.deleteMany();
    console.log('Tabela pets limpa.');

    // Insere os dados
    const result = await prisma.pets.createMany({
        data: pets,
        skipDuplicates: true, // ignora registros duplicados por nome, não por id
    });

    console.log(`Seed concluído! ${result.count} registros inseridos.`);
}

main()
    .catch((e) => {
        console.error("ERRO ao executar o Seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log("Conexão com o Prisma fechada.");
    });