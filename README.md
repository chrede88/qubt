# L1nkr - Simple LinkTree Hugo Theme

Qubt is a simple personal blog theme for [Hugo](https://gohugo.io). The theme is designed mobile-first, with a very intuitive interface. Get your Qubt blog up and running quickly by using the [Qubt template](https://github.com/Chrede88/qubtTemplate).

## Features

- Simple personal blog theme, designed for mobile-first.
- Automatic dark mode (based on system setttings).
- Emoji support for a fun design.
- Healthcheck endpoint (/healthcheck.json).

---

## Installation

---

## Configuration

### Supported Social Icons
| **Supported Icons** | **Supported Icons** | **Supported Icons** | **Supported Icons** |
| --- | --- | --- | --- |
| amazon | apple | bandcamp | bitbucket | 
| bluesky | check-mark | codepen | dev |
| discord | dribbble | email | etsy |
| facebook | flickr | foursquare | github |
| gitlab | google | instagram | keybase |
| kickstarter | link | linkedin | mastodon |
| medium | orcid | patreon | paypal | pinterest |
| reddit | signal | skype | slack |
| snapchat | soundcloud | spotify | stack-exchange |
| stack-overflow | strava | telegram | tiktok |
| tumblr | twitch | untappd | website |
| whatsapp | windows | x-twitter | youtube |


### Custom Social Icons
Users can provide their own icons by placing a `.svg` image in `./assets/icons/` in their own repo. Creating folders when necessary. The image should be as square as possible for the best result. Don't use spaces in the filename! Find all current icons [here](https://github.com/chrede88/L1nkr/tree/main/assets/icons).
The background color will be the tailwind color `bg-indigo-500` (#6366f1) unless another color is specified. This can be done by placing the following css snippet in `./assets/css/custom.css`:

```css
.link-nameOfIcon {
  background-color: #6366f1; /* Hex color code */
}
```
Where `nameOfIcon` is be the name of the custom `.svg` file.

---

## Update the Theme Version

This guide is left here for reference. Please check the [template](https://github.com/Chrede88/qubtTemplate#readme) repo for the most up-to-date documentation.

The theme version used to build the site is defined in `go.mod` file.

The best practice is to update to released and tested versions. To update to a specific version execute the following command in a terminal/commandline (at the root path of your site repo):

```shell
  hugo mod get github.com/Chrede88/qubt@vX.Y.Z
```
Replace X,Y & Z with the corresponding version numbers. You can find the releases [here](https://github.com/Chrede88/qubt/releases). Please check if any breaking changes are listed under the release you want to update to, before proceeding.