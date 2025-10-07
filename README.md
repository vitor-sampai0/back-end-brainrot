# 🧠 Back-end Brainrot API

## 📖 Descrição
O **Back-end Brainrot** é uma API REST robusta e escalável que fornece todos os dados e funcionalidades necessárias para aplicações que gerenciam brainrots. Esta API oferece endpoints seguros e eficientes para consulta, manipulação e organização de dados de brainrots, incluindo sistema de favoritos

---

## 🚀 Funcionalidades da API

### 📊 Endpoints Principais
- **GET /api/brainrots** - Lista todos os brainrots disponíveis
- **GET /api/brainrots/:id** - Detalhes específicos de um brainrot



### 🎨 Classificação por Raridade
- `common` - Brainrots básicos
- `gold` - Raridade dourada
- `diamond` - Extremamente raros
- `candy` - Edição especial doce
- `BloodRot` - Raridade sombria
- `Lava` - Edição vulcânica
- `Rainbow` - Multicoloridos únicos
- `Galaxy` - Raridade cósmica suprema

---

## 🛠️ Stack Tecnológica

### Core
- **Node.js** - Runtime JavaScript para servidor
- **Express.js** - Framework web minimalista e flexível




### Desenvolvimento
- **nodemon** - Auto-reload durante desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente
- **joi** - Validação de esquemas de dados

---

## 📥 Instalação e Configuração

### Pré-requisitos
- Node.js (v16 ou superior)
- npm

### Setup do Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/vitor-sampai0/back-end-brainrot.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo `.env` na raiz do projeto:
   ```properties
   DATABASE_URL="file:./brainrot.db"
   
   PORT = 4000
   ```

4. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   # Desenvolvimento
   npm run dev
   ```

---

## 📡 Documentação da API

### Estrutura de Resposta Padrão
```json
{
  "success": true,
  "data": {},
  "message": "Operação realizada com sucesso",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Exemplo de Brainrot
```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Sigma Chad",
  "image": "https://example.com/sigma-chad.jpg",
  "rarity": "diamond",
  "cost": 1500,
  "income": 250,
  "description": "O mais alpha dos brainrots",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---


## 🚀 Deploy



## 🧩 Como Contribuir

1. **Fork** o repositório
2. **Crie** uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit** suas alterações:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
4. **Push** para a branch:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra** um Pull Request

### Padrões de Commit
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` atualização de documentação
- `refactor:` refatoração de código
- `test:` adição ou correção de testes

---

**Construa APIs poderosas para o universo dos brainrots!** 🌟⚡