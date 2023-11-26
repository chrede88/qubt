# Qubt - Simple Personal Blog Hugo Theme

<p align="center">
  <img src="https://raw.githubusercontent.com/chrede88/qubt/main/images/screenshot.png" alt="Qubt - Simple Personal Blog Hugo Theme">
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/chrede88/qubt?color=blue" alt="Release">
  <img src="https://img.shields.io/badge/min_Hugo-v0.119.0-blue" alt="Hugo version">
  <img src="https://github.com/Chrede88/qubt/actions/workflows/testBuild.yml/badge.svg" alt="Main Branch Build">
  <img src="https://github.com/Chrede88/qubt/actions/workflows/buildDeploy.yml/badge.svg" alt="Main Branch Build">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/chrede88/qubt/main/lighthouse/lighthouse_performance.svg" alt="Performace">
  <img src="https://raw.githubusercontent.com/chrede88/qubt/main/lighthouse/lighthouse_accessibility.svg" alt="Accessibility">
  <img src="https://raw.githubusercontent.com/chrede88/qubt/main/lighthouse/lighthouse_best-practices.svg" alt="Best Practices">
  <img src="https://raw.githubusercontent.com/chrede88/qubt/main/lighthouse/lighthouse_seo.svg" alt="SEO">
</p>

Qubt is a simple personal blog theme for [Hugo](https://gohugo.io). The theme is designed mobile-first, with a very intuitive interface. Get your Qubt blog up and running quickly by using the [Qubt template](https://github.com/Chrede88/qubtTemplate).

## Screen Dumps

<p align="center">
  <img src="https://raw.githubusercontent.com/chrede88/qubt/main/images/screendump.png" alt="Qubt - Simple Personal Blog Hugo Theme">
</p>

--

## Features

- Simple personal blog theme, designed for mobile-first.
- Automatic dark mode (based on system setttings).
- Emoji support for a fun design.
- Healthcheck endpoint (/healthcheck.json).

---

## Installation

1) Make sure you have Hugo and Go installed on your local machine. Read the instructions [here](https://gohugo.io/installation/).
2) Follow this link to the theme [template](https://github.com/Chrede88/qubtTemplate).
3) Follow the installation instructions in the template repo. They are listed below for reference.

### Template installation instructions (Only for reference) 
1) Use this template by pressing `Use this template`.
2) Clone your version of the template to your local computer:
```shell
git clone https://github.com/<username>/<reponame>
```
3) Change the module name to match your github repo in `go.mod`.
4) Modify `config/_default/hugo.yaml`, `config/_default/params.yaml` and `config/_default/menus.yaml` according to the configuration below.
5) Add your blog posts to `content/blog/`. See example posts for reference.
6) Modify `content/about.md` so it matches your preferences.
7) All images are stored in the `assets/` folder. You can group in subfolders if you like.
8) In a terminal/commandline window, move to the newly created folder using `cd`.
9) Build a local version of your site by executing `hugo server`. You can see the site by navigating to `localhost:1313` (actual URL will be outputted in the CLI) in a browser.
10) Add a new `icon.png` file to update the favicon. The png file should be 512px by 512px in size.

---

## Configuration

All configuration is done in the four configuration files under `config/_default/`. The URL and site title can be set in `hugo.yaml`. The navbar settings are set in `menus.yaml`. All other parameters are set in `params.yaml`.

`hugo.yaml`:
```yaml
baseURL: 'https://username.github.io/qubt'
title: 'Qubt Theme'
```

`menus.yaml`:
```yaml
main:
- name: Home
  url: /
  weight: 10
- name: Blog
  url: /blog/
  weight: 20
- name: About
  url: /about/
  weight: 30
```

`params.yaml`:
```yaml
############################
## Author
############################

author:
  name: "Qubt"
  image: author.jpeg
  greeting: "A personal blog theme for Hugo :evergreen_tree:"
  icon: ":wave:"

############################
## Links
############################

links:
  - github: https://github.com/username
  - facebook: https://facebook.com/me
 

###############################
## OpenGraph & Twitter Cards
###############################

title: "Qubt Theme"
description: "Demo site build with Qubt & Hugo"
images:
  - thumbnail.jpeg
```

Links are defined by the name (i.e. "github" or "facebook"). The names must match one of the supported link icons, see list below.

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
Users can provide their own icons by placing a `.svg` image in `./assets/icons/` in their own repo. Creating folders when necessary. The image should be as circular as possible for the best result. Don't use spaces in the filename! Find all current icons [here](https://github.com/chrede88/qubt/tree/main/assets/icons).

---

## Update the Theme Version

This guide is left here for reference. Please check the [template](https://github.com/Chrede88/qubtTemplate#readme) repo for the most up-to-date documentation.

The theme version used to build the site is defined in `go.mod` file.

The best practice is to update to released and tested versions. To update to a specific version execute the following command in a terminal/commandline (at the root path of your site repo):

```shell
  hugo mod get github.com/Chrede88/qubt@vX.Y.Z
```
Replace X,Y & Z with the corresponding version numbers. You can find the releases [here](https://github.com/Chrede88/qubt/releases). Please check if any breaking changes are listed under the release you want to update to, before proceeding.