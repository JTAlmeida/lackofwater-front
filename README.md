# Lack of Water RPG

Front-end for Lack of Water RPG, a text based game.

## About

Lack of Water is a text based RPG, it's on initial stages of development and hopefully more content will be added in the near future.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env` file based on `.env.example`. `REACT_APP_API_BASE_URL` should point to your API server (lackofwater-back)

4. Run the back-end in a development environment:

```bash
npm run start
```

## Building and starting for production

```bash
npm run build
npm start
```

## Using github login

To use github login function you'll need to utilize the keys provided by creating a project on firebase console (https://console.firebase.google.com/).