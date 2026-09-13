FROM debian:bookworm-slim AS build
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates curl git unzip xz-utils libglu1-mesa && rm -rf /var/lib/apt/lists/*
RUN git clone --depth 1 --branch 3.47.4 https://github.com/flutter/flutter.git /opt/flutter
ENV PATH=/opt/flutter/bin:$PATH
RUN flutter --no-version-check config --no-analytics --enable-web
WORKDIR /app
COPY flutter_app/pubspec.yaml flutter_app/pubspec.lock ./
RUN flutter --no-version-check pub get
COPY flutter_app/ ./
RUN flutter --no-version-check build web --release --no-wasm-dry-run --no-web-resources-cdn --dart-define=API_URL=
FROM nginx:stable-alpine
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/web /usr/share/nginx/html
EXPOSE 80
