---
sidebar: auto
---
# Criação de Ambiente

## Git Flow

Inicialmente, o [Git Flow](https://git-scm.com/book/pt-br/v2/Git-Flow-Basico) foi utilizado para organizar o projeto.

Ao fazer o clone do projeto, o Git Flow foi instalado.

Tudo o que for publicado na branch `main` será automaticamente feito deploy no [Github Pages](https://pages.github.com/).

## GitHub Actions

Conseguimos consultar a documentação oficial do vuepress para configurar o [GitHub Actions](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages).

É com base nessas instruções que o vuepress foi configurado para o deploy no [Github Pages](https://pages.github.com/).

Na minha implementação, como eu utilizo um dominio personalizado (que é muito comum), é necessário criar o arquivo `CNAME` na raiz do projeto.

Para isso eu utilizo da seguinte implementação:

```yml
...
# run build script
- name: Build VuePress site
run: yarn docs:build

# run build script create file CNAME
- name: Create file CNAME
run: echo 'ceruttimaicon.js.org' > docs/.vuepress/dist/CNAME
...
```

::: warning
É importante que o arquivo `CNAME` esteja na raiz do projeto e que seja executado apenas após o comando `yarn docs:build`, dentro do diretório `docs/.vuepress/dist`, que fará com que o arquivo apareça na branch `gh-pages`.
:::

:::danger
Caso seu projeto não tenha esta implementação a cada deploy na branch `gh-pages` será necessário criar o arquivo manualmente ou o configura-lo manualmente no GitHub.
:::

Acredito que esta anotação poupará muito tempo no futuro.

:)