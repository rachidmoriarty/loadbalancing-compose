FROM alpine:3.11

RUN apk add --no-cache gcc musl-dev
COPY . /usr/src/myapp/
WORKDIR /usr/src/myapp
RUN  gcc server.c -o server
EXPOSE 9999
ENV PATH /usr/src/myapp:$PATH
CMD ["./server", "9999"]
