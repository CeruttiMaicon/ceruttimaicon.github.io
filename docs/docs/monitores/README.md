# Monitores no GDM

Este guia passo a passo mostra como configurar os monitores usando o GDM no Linux, ajustando suas orientações e definindo um monitor como primário. Para start inicial.

## Pré-requisitos

- Acesso ao terminal.
- Permissões de superusuário (sudo).

## Passos

### 1. Listar os dispositivos de exibição

Execute o comando `xrandr` para visualizar todos os monitores conectados e seus nomes de dispositivo.

```bash
xrandr
```

### 2. Criar ou modificar o arquivo de configuração do Xorg

Abra o arquivo de configuração com um editor de texto usando o comando:

```bash
sudo nano /etc/X11/xorg.conf.d/10-monitor.conf
```

### 3. Adicionar configurações ao arquivo

Copie e cole o seguinte conteúdo no arquivo, ajustando para os nomes dos dispositivos que você identificou:

**/etc/X11/xorg.conf.d/10-monitor.conf**

```code
Section "Monitor"
    Identifier "HDMI-0"
    Option "Rotate" "right"
EndSection

Section "Monitor"
    Identifier "DP-0"
    Option "Primary" "true"
EndSection

Section "Monitor"
    Identifier "HDMI-1"
    Option "Rotate" "left"
EndSection
```
::: warning Minha Configuração Pessoal para 3 Monitores no GDM do PC de Casa
Essa configuração é um exemplo de como você pode configurar os monitores. No meu caso, o HDMI-0 está à direita, o DP-0 é o monitor principal e central, e o HDMI-1 está à esquerda. Você deve ajustar as configurações de acordo com a sua configuração de monitores. **Mas é a minha configuração pessoal, que eu anotei aqui para meu próprio conforto e reutilização em futuras formatações.**
:::

### 4. Salvar e sair do editor

Salve o arquivo e saia do editor (CTRL+X + Y + Enter).

### 5. Reinicie o GDM para aplicar as configurações:

```bash
sudo systemctl restart gdm
```

Se tudo der certo, ao iniciar o GDM, os monitores devem estar configurados de acordo com as especificações fornecidas no arquivo de configuração. Na orientação e ordem desejadas.

::: tip Anotação final
Esse arquivo configura o HDMI-0 para a direita, o DP-0 como monitor principal e central, e o HDMI-1 para a esquerda. Se precisar de mais ajustes ou tiver alguma dificuldade, mande esse pront para o ChatGPT para ele lhe ajudar a criar as configurações corretas.
:::