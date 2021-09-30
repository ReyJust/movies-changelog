# movies-changelog
This is my small project for classifying movies inside my hdd.

## Project setup
```
npm i
```
### Development
```
npm run serve
```

# Usage
You will need:
-Supabase account with "Movies" table created.
-RapidApi account with access key to IMDB API.

INSERT credential in a fresh .env file as follow:
```
VUE_APP_SUPABASE_URL=myURL
VUE_APP_SUPABASE_ANON_KEY=myKEY

VUE_APP_IMDB_API=myAPI
VUE_APP_RAPID_API_HOST=myHOST
VUE_APP_RAPID_API_KEY=myKEY
```
This project is also deployed on a Netlify website.

## TODOS
-Add user login
-Add search along movies
-Add Genre to DB
-Add filter by 'Genre' / 'Date' / 'Type'
-Add synopsis