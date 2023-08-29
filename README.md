# Next.js OpenJira app
To run the app, needed a db

```
docker-compose up -d
```

* The -d is = __detached__

MongoDB url Local:

```
mongodb://localhost:27017/entriesdb
```

## Config environment variables
Rename the file __.env__ to __.env.template__

## Fill the db with data test 
```
  http://localhost:3000/api/seed
```