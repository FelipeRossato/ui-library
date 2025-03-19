# ui-library

## Description

Esse projeto é composto por:

Pasta: `/library`
Uma bibliotéca de componentes de UI, desenvolvida através de WebComponents e seus respectivos componentes de demonstração, desenvolvidos com Storybook.

Pasta: `/demo`
Três aplicações de diferentes frameworks: React, Vue e Angular. Em cada um deles os componentes de UI são importados e renderizados, para demonstração.

## 1) Biblioteca: '/library' 

### Para rodar localmente:

#### Prérequisitos

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) >= v22.14.0

#### Instalação

```bash
# vá para a pasta /library
$ cd library/

# instale as dependências
$ nvm use && yarn install

# rode o projeto
$ npm run start
```

Os componentes poderão ser visualizados e alterados em tempo real, acessando `http://localhost:3000/`.

### Storybook:

```bash
$ npm run storybook
```

A interface do Storybook e os componentes estarão disponíveis através do `http://localhost:6006/`.

### Para deployar a biblioteca:

```bash
$ npm run release
```


This project uses a GitHub Package and to install dependencies it's necessary to generate a [personal-access-token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with write/read permission(s) and add a new line into `hosting/.npmrc` with the content:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

Add the following credentials on the `hosting/.env` file and ask an admin to get the values for these variables:

```
VITE_PROJECT_NAME=AICourseStudio
VITE_PROJECT_ID=ai-course-studio-staging
VITE_SITE_URL=staging.learning.rocks
VITE_PAGE_TITLE=Create courses with AI-powered authoring tool
VITE_PAGE_DESCRIPTION=Transform any subject into a stunning online course with AICourseStudio. Our AI-powered authoring tool makes course creation effortless, so you can focus on what matters most - building engaging content. Enjoy seamless scaling across all devices, with magical-feeling features that delight learners. Already have your own platform? CourseAI provides best-in-class quality of service learning analytics to help you optimize your teaching. Get started today and unleash the power of AI in education.
VITE_ADMIN_EMAILS=rames@uolinc.com

VITE_FIREBASE_STAGING_API_KEY=******
VITE_FIREBASE_STAGING_AUTH_DOMAIN=ai-course-studio-staging.firebaseapp.com
VITE_FIREBASE_STAGING_PROJECT_ID=ai-course-studio-staging
VITE_FIREBASE_STAGING_STORAGE_BUCKET=ai-course-studio-staging.appspot.com
VITE_FIREBASE_STAGING_MESSAGING_SENDER_ID=422223619348
VITE_FIREBASE_STAGING_APP_ID=1:422223619348:web:335ac5518978cdec364e01
VITE_UNLEASH_URL=https://unleash.skore.ai/staging/proxy
VITE_UNLEASH_KEY=***
VITE_UNLEASH_ENV=***
VITE_AI_COURSE_STUDIO_BASE_URL=https://ai-course-studio-staging.plugins.learning.rocks
VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID=G-88FCP8CT63
```

> If you have access, you can find the Firebase related variables from the Firebase project console page (on webapp credentials).

then follow this steps:

```bash
# go to the 'hosting' folder
$ cd hosting/

# install dependencies
$ nvm use && yarn install

# run project
$ npm run start:staging
```

Once the project is running, go to `http://localhost:{PORT}/sso/learningrocks/token`. It will throw an error and show an input field asking for the token. Paste the staging token and you should be autenticated and redirected to the courses page.

Note: If you want your local run for `hosting` pointing to functions emulator, edit the file `hosting/src/constants.ts`

#### Running locally as a 'skore-front' plugin

To run the project locally as a 'skore-front' plugin, follow the process above to run the 'hosting' folder and then, in the 'skore-front' project, change the following env:

https://github.com/skore-io/skore-front/blob/develop/config/env/staging.js#L7

```bash
  AI_COURSE_STUDIO_PLUGIN_URL: 'http://localhost:3006/sso/learningrocks/',
```

and run the 'skore-front' locally. Now the changes made in the AICS 'hosting' code will be reflected instantly in the plugin page.

## 2) Backend: 'functions' folder

### Running locally

#### Prerequisites

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) >= 18.19.0 (We recommend you install using [NVM](https://github.com/nvm-sh/nvm))
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) = 1.22.19

#### Installation

This project uses a GitHub Package and to install dependencies it's necessary to generate a [personal-access-token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with write/read permission(s) and add a new line into `functions/.npmrc` with the content:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

Add the following credentials on the `functions/.env` file:

```
OPENAI_API_KEY=***
OPENAI_BASE_URL=https://chat-gpt-learningrocks.openai.azure.com/openai/deployments/AiCourseStudio
OPENAI_API_VERSION=2023-08-01-preview
PIXABAY_API_KEY=***
PROJECT_NAME_PROD=AI Course Studio Production
PROJECT_NAME_STAGING=AI Course Studio Staging
PROJECT_ID_PROD=ai-course-studio-production
PROJECT_ID_STAGING=ai-course-studio-staging
ADMIN_EMAILS=admin1@email.com,admin2@email.com
AWS_ACCESS_KEY_ID=***
AWS_SECRET_ACCESS_KEY=***
AWS_REGION=***
AWS_S3_BUCKET_NAME=***
AWS_LR_ACCESS_KEY_ID=***
AWS_LR_SECRET_ACCESS_KEY=***
YOUTUBE_API_KEY=***
GOOGLE_AUTH_AUDIENCE=***
```

then follow this steps:

```bash
# go to the 'functions' folder
$ cd functions/

# install dependencies
$ nvm use && yarn install

# run project
$ npm run serve
```

## 3) @skore-io/ai-course-studio-react library: 'shared_react' folder

### Running locally

#### Prerequisites

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) >= 18.19.0 (We recommend you install using [NVM](https://github.com/nvm-sh/nvm))
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) = 1.22.19

#### Installation

This project uses a GitHub Package and to install dependencies it's necessary to generate a [personal-access-token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with write/read permission(s) and add a new line into `shared_react/.npmrc` with the content:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

then follow this steps:

```bash
# go to the 'shared_react' folder
$ cd shared_react/

# install dependencies
$ nvm use && yarn install

# run project
$ npm run dev
```

Once the project is running, go to `http://localhost:PORT` and you will see the course from `shared_react/public/course.json` rendered, utilizing the library components and reflecting changes locally.

if you wanna see the changes made in this library in the main Frontend (`hosting/`) follow this steps:

```bash
# go to the 'shared_react' folder
$ cd shared_react/

# build the project
$ yarn dev:build

# go to the 'hosting' folder
$ cd .. && cd hosting/

# add the library locally
$ yarn add ../shared_react
# output in package.json: "@skore-io/ai-course-studio-react": "../shared_react",

# run 'hosting' project
$ npm run start:staging
```

Now you can see the changes made in the components library on the main project.

If you wish to change what course you see you can go to `services/loadCourse` and change the `const url` constant to the value you wish. The available values are: course-classic.json, course-legacy.json, course-onepage.json, course.json.

**Just keep in mind to not send teh changes you make to the file.**

### Mimicking some /hosting behavior
**BE CAREFUL: some of these changes are breaking changes to the app ALWAYS change them back to the way they were.**

- If you need the classic type you can go to ```src/services/loadCorses``` and change the url to ```./course-classic.json```.
- If you need to use the non-edit mode you can go to ```/src/App.tsx``` and change the editable property inside the Providers tag to ```editable={false}```.
- If you need another section you can check what they are in ```shared_react/src/constants/insertBlockButtons.ts``` and you can add them to the .json files inside the ```public``` folder.

### Deploying

In summary, the shared_react folder has 2 deploys:

- To generate the npm lib;
- And another to generate the compiled versions to download the scorm

It has an environment variable called BUILD_MODE:

- If `BUILD_MODE=lib`, it will be built as an npm package;
- If `BUILD_MODE=default` it will be built like scorm files.

Whenever there was an update in the `shared_react` folder:

1. Deploy to shared_react for lib/package (it will generate a new version) - deploy with BUILD_MODE=lib;

```bash
cd shared_react
yarn deploy:react:package
```

2. Run a yarn upgrade `@skore-io/ai-course-studio-react` in the /hosting folder (to update the courseplayer display in the webapp);

```bash
cd hosting
yarn upgrade @skore-io/learningstudioai-react@latest
```

3. Deploy shared_react in storage mode (BUILD_MODE=default)

```bash
cd shared_react
yarn deploy:react:storage:staging
```

## 4) @skore-io/ai-course-studio-utils library: 'shared_utils' folder

### Running locally

#### Prerequisites

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) >= 18.19.0 (We recommend you install using [NVM](https://github.com/nvm-sh/nvm))
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) = 1.22.19

#### Installation

This project uses a GitHub Package and to install dependencies it's necessary to generate a [personal-access-token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with write/read permission(s) and add a new line into `shared_utils/.npmrc` with the content:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

This library runs only through the main Frontend (`hosting/`) project. Run the following steps to see the changes reflecting there:

```bash
# go to the 'shared_utils' folder
$ cd shared_utils/

# install dependencies
$ nvm use && yarn install

# build the project
$ yarn build

# go to the 'hosting' folder
$ cd .. && cd hosting/

# add the library locally
$ yarn add ../shared_utils
# output in package.json: "@skore-io/ai-course-studio-utils": "../shared_utils",

# run 'hosting' project
$ npm run start:staging
```

Now you can see the changes made in the utils library on the main project.

## Development

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for message commits.
For more information and usage examples, please read the [ADR](https://github.com/skore-io/adrs/blob/main/doc/adr/0005-padroes-de-commits.md) about this pattern.

Information about the complete development process [here](https://github.com/skore-io/adrs/blob/main/doc/adr/0006-processo-de-desenvolvimento.md).

## Manually Deploy

It's only possible manually deploy to the staging environment.

Manual deploy uses Github Actions. Go to dispatch action and run workflow.

Frontend: (https://github.com/skore-io/ai-course-studio/actions/workflows/dispatch-hosting.yml)
Backend: (https://github.com/skore-io/ai-course-studio/actions/workflows/dispatch-functions.yml)

## Changing .env for CI/CD

https://vimeo.com/814753272/62a67cbee4
