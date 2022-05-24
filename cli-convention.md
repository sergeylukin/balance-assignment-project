npm i -D @nrwl/nest
npx nx generate @nrwl/nest:app api
npm i -D @nrwl/react
npx nx g @nrwl/react:app front-website --routing=true --style=@emotion/styled
npm i --save @nestjs/swagger
npx nx g @nrwl/js:library --name=api-interfaces
npx nx g @nrwl/js:library --name=shared/csv
npm i --save ts-transformer-keys
npm i --save swagger-ui-express
npm i --save easy-peasy @chakra-ui/icons @chakra-ui/react framer-motion
npx nx g @nrwl/js:library --name=front-website/api
npx nx g @nrwl/react:library --name=front-website/feature-pivots-list
