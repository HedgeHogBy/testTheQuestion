# TestTheQuestion

#### Task

Нужно создать маленький законченный проект в виде одной страницы с живым поиском вопросов на основе данных thequestion.ru. Страница должна быть сделана на основе Boostrap-сетки и собрана из Boostrap-компонентов. Наверху обычное большое текстовое поле. Ниже карточки (Boostrap Cards) с найденными ответами. Требуется production-ready код, т.е. важно качество кода, а не количество и функциональность.

Технические требования:
- Angular 6.
- Boostrap 4.
- Webpack.
- Код в открытом репозитории на Гитхабе.
- Для запуска проекта достаточно склонировать репозиторий, собрать проект и запустить дев-сервер.
- API для поиска: https://thequestion.ru/search/complex?q=%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80&sort=popularity&limit=3

#### Solution description

Configured with Angular CLI, for specific webpack configuration we can use `ng eject` command and cofigure webpack manually.

## Installation and Run

```
npm install -g @angular/cli
npm install
ng serve
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
