# Aditti

Simple clothes online-shop.

## Running of application
1. Create settings in `.env` file.
2. Start project and launch one of the scripts:
    -   `npm build` - build production bundles.
    -   `npm start` - launch client and server part of app in one terminal in dev mode.
    -   `npm run start:frontend` - run frontend application, using `webpack-dev-server`.
    -   `npm run start:server` - run `express` server in watch mode.
    -   `npm test` - run `jest` tests.

## Code style

Rules of code style for JavaScript are described in `.eslintrc`. BEM methodology is applied to styles. To format code all code I use `prettier`; settings are available in `.prettierrc`.
