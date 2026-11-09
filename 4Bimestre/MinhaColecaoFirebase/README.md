# Minha Coleção — Expo + Firebase

Aplicativo acadêmico em React Native/Expo com Firebase Authentication e Cloud Firestore.

## Funcionalidades
- Cadastro e login com e-mail e senha.
- Create: cria registros no Firestore.
- Read: consulta e lista os registros em tempo real.
- Update: altera registros já cadastrados.
- Perfil do usuário, tela Sobre e logout.

> O enunciado e o material de orientação listam Create, Read e Update. Por isso, esta versão implementa essas três operações; não inclui exclusão (Delete).

## 1. Requisitos
- Node.js LTS instalado.
- Conta Google para acessar o Firebase.
- Expo Go no celular (opcional) ou navegador.

## 2. Instalar dependências
Extraia o ZIP, abra a pasta `MinhaColecaoFirebase` no VS Code e execute no terminal:

```bash
npm install
```

## 3. Configurar Firebase
1. Acesse https://console.firebase.google.com/
2. Clique em **Adicionar projeto** e crie um projeto.
3. No projeto, clique no ícone `</>` para adicionar um aplicativo Web.
4. Dê um apelido, registre o app e copie os dados do objeto `firebaseConfig`.
5. Na raiz do projeto, crie um arquivo chamado `.env` (na mesma pasta do `package.json`).
6. Preencha o `.env` usando o modelo abaixo, substituindo pelos dados do seu projeto:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=sua_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=seu-project-id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-projeto.firebasestorage.app
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=seu_app_id
```

Não coloque aspas nos valores. Não compartilhe o arquivo `.env` publicamente. O `.env.example` é apenas um modelo.

## 4. Ativar autenticação
1. No menu do Firebase, abra **Authentication**.
2. Clique em **Começar**.
3. Abra a aba **Sign-in method**.
4. Ative **E-mail/senha** e salve.

## 5. Criar o banco Firestore
1. No menu do Firebase, abra **Firestore Database**.
2. Clique em **Criar banco de dados**.
3. Para a atividade, escolha iniciar em **modo de produção**.
4. Escolha a localização sugerida mais próxima e conclua.

### Regras do Firestore
Abra a aba **Regras** e publique estas regras. Elas permitem que cada usuário autenticado leia e altere somente seus próprios dados:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      match /registros/{registroId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

## 6. Executar
Depois de salvar o `.env`, execute:

```bash
npx expo start
```

- Para abrir no celular: instale o **Expo Go**, escaneie o QR Code e mantenha computador e celular na mesma rede Wi-Fi.
- Para abrir no navegador: pressione `w` no terminal. Se necessário, instale as dependências web:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

Se o Expo já estava aberto quando você criou ou alterou o `.env`, pare o servidor e inicie novamente com:

```bash
npx expo start -c
```

## 7. Testar o CRUD (Create, Read e Update)
1. Abra o app e toque em **Cadastre-se**.
2. Crie uma conta com nome, e-mail e senha (mínimo de 6 caracteres).
3. Depois do cadastro, o app abre a tela principal.
4. Toque em **Novo registro**, preencha título e descrição e salve (**Create**).
5. O registro aparece na lista principal; essa consulta é atualizada em tempo real (**Read**).
6. Toque em um registro, altere os dados e salve (**Update**).
7. No Firebase Console, abra Firestore Database e confira a estrutura `usuarios > UID_DO_USUARIO > registros`.

## Estrutura do banco
```text
usuarios (coleção)
  UID_DO_USUARIO (documento)
    nome
    email
    criadoEm
    registros (subcoleção)
      ID_DO_REGISTRO (documento)
        titulo
        descricao
        categoria
        criadoEm
        atualizadoEm
```

## Observações
- O arquivo `src/firebase/firebase.js` lê as configurações do arquivo `.env`.
- O arquivo `.env` não deve ser enviado ao GitHub.
- As chaves de configuração do Firebase para aplicativos Web identificam o projeto, mas a segurança dos dados depende das regras do Firestore e da autenticação.
- Se aparecer erro de configuração, confira se o `projectId`, `apiKey` e os demais valores foram copiados corretamente.
