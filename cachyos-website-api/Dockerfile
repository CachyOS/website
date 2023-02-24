###### Builder Image
FROM rust as builder

RUN apt update
RUN apt install -y sqlite3

RUN cargo install diesel_cli --no-default-features --features sqlite

WORKDIR /app
COPY . .

ENV DATABASE_URL=website-api.db
RUN diesel setup

ARG ARCH
RUN __ARCH="$(dpkg --print-architecture)"; \
    [ -z  $ARCH ] || __ARCH=$ARCH; \
    case "$__ARCH" in \
        arm64) \
            export __TARGET='aarch64-unknown-linux-gnu'; \
            apt update && apt upgrade -y; \
            apt install -y gcc-aarch64-linux-gnu; \
            rustup target add aarch64-unknown-linux-gnu; \
            ;; \
        amd64) export __TARGET='x86_64-unknown-linux-gnu' ;; \
    esac; \
    cargo install --target $__TARGET --path .;

RUN cargo clean


###### Runner Image
#FROM scratch as runner
#COPY --from=builder /app/website-api.db .
#COPY --from=builder /usr/local/cargo/bin/cachyos-website-api .

ENV RUNNING_ADDRESS=0.0.0.0
ENV DATABASE_URL=website-api.db
EXPOSE 39764

CMD ["/usr/local/cargo/bin/cachyos-website-api"]
#CMD diesel setup && /usr/local/cargo/bin/cachyos-website-api
