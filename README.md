# Geovistory.org
This repostitory contains the source code of the website geovistory.org.

## Technology

The website is developed with [Next.js](https://nextjs.org/) using [react components from geovistory design system](https://www.npmjs.com/package/@geovistory/design-system-react).

## Development
Clone the repo:

```bash
git clone https://github.com/geovistory/website
```

Install dependencies

```bash
cd website

npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Docker

### Local build and run:

```bash
# build image with tag `geovistory-website`
docker build -t geovistory-website .

# run container of `geovistory-website` 
# -d in background
# -p exposing port 3000
# --name named `geov-web``
docker run -d -p 3000:3000 --name geov-web geovistory-website

# list running containers
docker ps

# should print output similar to:
752abeb48c41   geovistory-website   "docker-entrypoint.s…"   4 seconds ago   Up 3 seconds   0.0.0.0:3000->3000/tcp   geov-web

# open localhost:3000
```

### Offical images
Official docker images are automatically created and published [here](https://github.com/geovistory/geovistory-public-poc/pkgs/container/website).  
