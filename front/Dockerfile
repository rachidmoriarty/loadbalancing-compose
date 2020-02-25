FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn add react
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 9000
CMD ["serve", "-p", "9000", "-s", "."]

