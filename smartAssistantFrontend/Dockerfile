#pulling node from docker hub
FROM node:latest

#set working directory at container as /tmp
WORKDIR .

#copy package.json to working directory
COPY package.json .

#copy package.json to working directory
COPY webpack.config.js .

#copy src to working directory
COPY src/ .

#copy public to working directory
COPY public .

#setting the npm registry
RUN npm config set registry http://registry.npmjs.org/

#install all packages from package.json from registry
RUN npm install

#set NODE_ENV variable to production
ENV NODE_ENV=production

#set PORT varibale to 8080
ENV PORT=8080

#open port 4000 to communicate with container
EXPOSE 8080

#running the app through entry file index.js from where node is installed
CMD ["npm","start"]
