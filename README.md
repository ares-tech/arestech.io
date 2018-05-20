# ARES website

## develop locally

* run `npm run develop` will open up localhost:8000 with hot reloading

## build production version

* run `npm run build` will build production version of site under ./public folder. Only need to deploy ./public folder as static site

## add person in to team section

* edit `src/components/Team/team.json` file
* add person data into the json structure, for user's image store the png/jpg under `static/images/...` to reference it in json file
* the user will show up under the team section

## change photo for "Latest update"

* edit `src/components/GalleryTeaser/pictures.json`
* first store the photo resource e.g. png/jpg file under `static/images/...` folder
* add new photo in json file
* It support optionally a `title` and `desc`, if supplied they will show up under the picture.

## how to add a new page

* add a example.js under `src/pages/` folder will make available of route
`arestech.io/example`
* and then start hacking

## Todos
* [x] profile read more
* [x] picture lightbox
* [x] Roadmap
* [x] Media
* [x] Partners
* [x] Token Detail
* [x] Token Sale
* [x] Use of Funds
* [x] Contact us
* [x] Footer
* [x] custom shapes
* [x] custom layout for token sections
* [x] other static pages
* [ ] top navigation transition
* [ ] top navigation style
* [x] full team
* [x] link section
* [x] press kit


## missing
* [ ] pictures and its title and description (optionally)
* [x] google analytic tracking
* [ ] presskit download link
* [ ] team may be incomplete
