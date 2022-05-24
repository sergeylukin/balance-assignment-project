npm i -D @nrwl/nest
npx nx generate @nrwl/nest:app api
npm i -D @nrwl/react
npx nx g @nrwl/react:app front-website --routing=true --style=@emotion/styled
npm i --save @nestjs/swagger
npx nx g @nrwl/js:library --name=api-interfaces
npx nx g @nrwl/js:library --name=shared/csv
npm i --save ts-transformer-keys
npm i --save swagger-ui-express
