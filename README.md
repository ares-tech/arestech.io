# ARES Website
https://arestech.io

## Develop locally

* run `npm run develop` will open up localhost:8000 with hot reloading

## Build production version

* run `npm run build` will build production version of site under ./public folder. Only need to deploy ./public folder as static site

## Add person in to team section

* edit `src/components/Team/team.js` file
* add person data into the js structure, for user's image store the png/jpg under `static/images/...` to reference it in js file
* the user will show up under the team section

## Change entries of "Latest update"

* edit `src/components/GalleryTeaser/pictures.js`
* first store the photo resource e.g. png/jpg file under `static/images/...` folder
* add new photo in js file
* It support optionally a `title` and `desc`, if supplied they will show up under the picture.

## Add media link
* edit `src/components/Media/index.js`, copy paste a new block and edit it.

## Add social media links
* edit `src/components/Contact/socialMedias.js`
* add new block with information

## Add a new page

* add a example.js under `src/pages/` folder will make available of route
`arestech.io/example`
* and then start hacking

## test jenkins
use ./yarn always!
