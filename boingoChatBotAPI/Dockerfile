#pulling node from docker hub
FROM node:latest

#setting current directory in container as working directory
WORKDIR boingoChatBotAPI

#copy package.json to working directory
COPY package.json .

#copy src to working directory
COPY src/ boingoChatBotAPI/src/

#setting the npm registry
RUN npm config set registry http://registry.npmjs.org/

#install all packages from package.json from registry
RUN npm install

#set NODE_ENV variable to production
ENV NODE_ENV=production

#set PORT varibale to 3030
ENV PORT=3030

#open port 3030 to communicate with container
EXPOSE 3030

#running the app through entry file index.js
CMD ["npm","start"]