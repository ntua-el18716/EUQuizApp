# Use an official Node.js runtime as a parent image
FROM node:16-alpine as development

WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV DATABASE_URL=postgres://euquizdb_user:DXVzpvh44muWV2tdFyHnujmvNjr58M96@dpg-cnfe1n0l6cac73a0s5h0-a.frankfurt-postgres.render.com/euquizdb?ssl=true
# ENV DATABASE_URL=postgres://eu_user:root@localhost:5432/euquizdb

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node","dist/server.js"]