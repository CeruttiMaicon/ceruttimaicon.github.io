# Cedilha no Ubuntu

Esta documentação aborda a configuração do teclado para utilizar o "ç" no layout "Inglês (EUA Intern. alt.)" no Ubuntu e sabores do Ubuntu. A configuração é essencialmente útil para teclados como o MX Keys em inglês.

## Problema

Ao configurar o teclado para o layout "Inglês (EUA Intern. alt.)", o caractere "ç" pode não funcionar corretamente de imediato.

## Solução

Para resolver esse problema, siga os passos abaixo:

### 1. Edite o arquivo `/etc/environment`

A maneira mais fácil de editar este arquivo é através do terminal. Abra um terminal e digite o seguinte comando:

```bash
sudo gedit /etc/environment
```

Após digitar o comando, será solicitada a senha do seu usuário. Digite-a (note que nada aparecerá no terminal enquanto digita) e pressione ENTER. O editor gedit será aberto.

### 2. Adicione a linha de configuração

No editor, adicione a seguinte linha no final do arquivo:

```bash
GTK_IM_MODULE=cedilla
```

Salve as alterações no arquivo clicando no botão "Salvar", localizado no canto direito superior da tela, ou utilizando o atalho `CTRL+S`.

Encerre a sessão do seu usuário.

É necessário deslogar e logar novamente para a alteração funcionar. Caso não funcione, reinicie seu computador.

Comportamento esperado

Funcionar o "ç".

::: warning Contexto Adicional
Funciona principalmente no meu teclado inglês MX Keys. Para ubuntu (ou sabores de ubuntu). Não testei em outras distribuições nem em outros teclados. Necessário testar e verificar se funciona.
:::

::: warning Referências
[danielkossmann.com](https://www.danielkossmann.com/ajeitando-cedilha-errado-ubuntu-linux/)
:::
