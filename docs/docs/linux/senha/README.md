---
sidebar: auto
---
# Como fazer o terminal exibir asteriscos ao digitar uma senha

Para configurar o sistema para fazer o terminal exibir asteriscos ao digitar uma senha, você deve fazer o seguinte:

```bash
sudo gedit /etc/sudoers
```

Procure a linha que contém o valor `Defaults env_reset` e adicione outra linha abaixo dela, com o conteúdo seguinte conteúdo:

```text
Defaults pwfeedback
```

Salve e feche o arquivo. Depois, feche o Terminal.

Pronto! Com essa mudança, na próxima vez em que você usar o sudo no terminal, a cada tecla digitada, será exibido um asterisco.

:)

### Referências

[Blog do Edivaldo - Como fazer o terminal exibir asteriscos ao digitar uma senha](https://www.edivaldobrito.com.br/exibir-asteriscos-ao-digitar-uma-senha/)