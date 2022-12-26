---
sidebar: auto
---

# Terminal ZSH com Powerlevel10k e plugins

## Após instalado o ZSH

Faça a instalação do Powerlevel10k conforme a documentação do repositório.

[Powerlevel10k](https://github.com/romkatv/powerlevel10k)

## Instalação dos plugins

Instale os seguintes plugins:

[ZSH Autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

[ZSH Syntax Highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

## Ativação dos plugins

Edite o arquivo `~/.zshrc` e adicione as seguintes linhas:

```zshrc
...
plugins=(
    sudo
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
)
...
```

> Pelo menos até o momento só utilizo esses plugins, mas caso queira mais plugins, basta pesquisar no github.