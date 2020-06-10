FROM node
WORKDIR /src
COPY . /src
RUN npm install
RUN npm run test
EXPOSE 3000
CMD ["npm", "start"]