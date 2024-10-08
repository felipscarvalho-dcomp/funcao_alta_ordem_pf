/**
 * Felipe Carvalho Leal
 * Isaías Cruz Lessa
 * Luan Amaro dos Santos Aragão
 */

/**
 * Dada uma lista com 5 elementos, [100, 80, 60, 120, 90], devolva a soma de todos os elementos, só que usando Map no resultado (O que seria usar map no resultado?)
 * Todas as funções de alta ordem vistas em sala de aula estão liberadas para uso
 * Meio ponto extra para os membros das equipes
 * Além da reposta, enviar o nome da equipe
 * Apenas 1 membro da equipe deve postar a resposta
 */

const list = [100, 80, 60, 120, 90]
const sum = list.map(() => list.reduce((acc, item) => acc + item, 0))

console.log({ "Lista Inicial": list, "Lista Final": sum })
