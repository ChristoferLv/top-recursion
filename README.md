# Recursion

Projeto de algoritmos recursivos desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion), com foco em **recursao**, **divisao e conquista** e comparacao com abordagens iterativas.

## Objetivo do Projeto

O objetivo principal era praticar:
- Implementacao da sequencia de Fibonacci de forma iterativa e recursiva
- Entendimento de casos base e chamadas recursivas
- Implementacao de Merge Sort com estrategia de divisao e conquista
- Validacao das solucoes com testes automatizados

## O que e?

Uma colecao de funcoes e testes para resolver os desafios da licao de Recursion:
- **Fibonacci**: `fibs` (iterativo) e `fibsRec` (recursivo)
- **Merge Sort**: `merge`, `merge2` e `mergeSort`

Conforme a proposta da licao, o projeto e executado via linha de comando (Node.js), sem interface grafica.

## Como usar

1. Entre na pasta do projeto
```bash
cd Javascript/top-recursion
```

2. Instale as dependencias
```bash
npm install
```

3. Rode os testes
```bash
npm test
```

## Funcionalidades

- **`fibs(num)`**: retorna os primeiros `num` numeros da sequencia de Fibonacci (iterativo)
- **`fibsRec(num, arr)`**: retorna os primeiros `num` numeros de Fibonacci usando recursao
- **`merge(arr1, arr2)`**: mescla duas listas ordenadas em uma nova lista ordenada
- **`merge2(arr, start, middle, end)`**: mescla duas particoes ordenadas dentro da mesma lista
- **`mergeSort(arr, start, end)`**: ordena uma lista com Merge Sort de forma recursiva
- **Cobertura de testes**: cenarios com arrays ordenados, invertidos, repetidos, vazios e com negativos

## Estrutura de Arquivos

- `fibonacci.js`: implementacoes de Fibonacci
- `fibonacci.spec.js`: testes das funcoes de Fibonacci
- `merge-sort.js`: implementacoes auxiliares e Merge Sort
- `mergeSort.spec.js`: testes das funcoes de merge e ordenacao
- `package.json`: scripts e dependencias

## Tecnologias Utilizadas

- JavaScript (Node.js / CommonJS)
- Jest

---

Projeto desenvolvido seguindo: [The Odin Project - Recursion](https://www.theodinproject.com/lessons/javascript-recursion)

📍 **Repositorio principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
