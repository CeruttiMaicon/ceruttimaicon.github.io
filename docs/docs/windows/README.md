# Formatações Windows 10/11

## Objetivo
Automatizar a instalação do Windows com o uso de arquivos `unattended.xml`, eliminando etapas manuais e otimizando o sistema para diferentes finalidades.

---

## 1. Versão MERCURIO

### Objetivo:
Criar uma instalação otimizada para performance, adequada tanto para trabalho quanto para jogos. Elimina ferramentas desnecessárias e propagandas do Windows, garantindo um sistema leve e eficiente.

**Minha versão pessoal do Windows 10/11 favorita.**

### Configurações principais:
- Nome de usuário: Maicon Cerutti
- Senha padrão: **(password)** (trocar a senha após a instalação).
- Sem chave de ativação pré-configurada.
- Remover ferramentas e propagandas desnecessárias.
- Foco em uma instalação leve e simplificada
- Otimizações para performance de jogos e trabalho.

### Arquivo Unattended:
O arquivo `unattended.xml` pode ser baixado [neste link](/xml/windows/mercurio/autounattend-mercurio.xml).

---

## 2. Versão Generic

### Objetivo:
Uma instalação mais limpa, removendo o máximo possível de ferramentas e programas desnecessários, criando um sistema minimalista para uso geral.

### Configurações principais:
- Nome de usuário: Administrador
- Senha padrão: **(password)** (trocar a senha após a instalação)
- Sem chave de ativação pré-configurada.
- Remover propagandas e softwares desnecessários.
- Foco em uma instalação leve e simplificada.

### Arquivo Unattended:
O arquivo `unattended.xml` pode ser baixado [neste link](/xml/windows/generic/autounattend-generic.xml).

---

Essas versões oferecem diferentes níveis de personalização de acordo com as suas necessidades. Cada arquivo `unattended.xml` pode ser baixado e utilizado para configurar automaticamente cada tipo de instalação.

::: warning Ativação Windows
Essa versão não inclui uma chave de ativação do Windows. Você precisará de uma chave válida para ativar o sistema.
:::

---

## 3. Instruções de Uso

### Como Utilizar:
1. Coloque o arquivo `unattended.xml` na raiz do dispositivo de instalação do Windows (pendrive, por exemplo).

::: tip Pendrive
Para criar um pendrive de instalação do Windows, você pode usar a ferramenta [Ventoy](https://github.com/ventoy/Ventoy/releases) para adicionar vários arquivos de instalação em um único pendrive.

Edite a ISO do Windows e adicione o arquivo `unattended.xml` na raiz dos arquivos da ISO. Você consegue fazer isso com o programa [PowerISO](https://www.poweriso.com/).
:::

1. Inicie a instalação do Windows normalmente e o processo será automatizado conforme as configurações especificadas.
2. Se houver diferentes versões de instalação, escolha o arquivo adequado à sua necessidade.

---

## Considerações Finais:

::: warning Aviso
Esses arquivos `unattended.xml` são fornecidos gratuitamente e sem garantias. A criação desses arquivos foi criada com base em experiências pessoais e podem não ser adequadas para todas as situações. 
:::

::: tip Backup
Sempre faça backup dos seus dados antes de realizar qualquer instalação ou formatação do sistema.
:::

::: warning Ativação Windows
Essa versão não inclui uma chave de ativação do Windows. Você precisará de uma chave válida para ativar o sistema.
:::

::: danger ATENÇÃO
Caso queira criar uma ISO que seja ativada automaticamente, com a chave de ativação embutida, edite o arquivo `unattended.xml` e adicione a chave de ativação no campo `<Key>` dentro de `<ProductKey>`.

**TENHA EXTREMO CUIDADO PARA NÃO PUBLICAR SUA CHAVE DE ATIVAÇÃO EM LUGAR ALGUM. NEM EMPRESTAR PARA NINGUÉM. ESSA CHAVE É ÚNICA E PESSOAL.**
:::

::: tip Dúvidas
Se esta se perguntando da chave de ativação, que já vem configurada no arquivo `unattended.xml`, a resposta é que esta ativação é temporária e não é a chave de ativação do Windows. A chave de ativação do Windows é a que você comprou ou adquiriu de forma legal.
:::

Isso é tudo! Espero que esses arquivos sejam úteis no futuro. Se tiver alguma dúvida ou sugestão, entre em contato. 

Maicon Cerutti - 2024

