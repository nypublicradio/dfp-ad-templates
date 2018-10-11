# DFP Templates

Repo containing code to render templates/ads/splashes with variables provided
from within DFP. This repo is designed so that the template code is version
controlled while allowing DFP to manage only the variables passed into the
templates.

## Building

To build:

```
npx webpack

# or

yarn build
```

To serve:

```
npx webpack-dev-server -w --disable-host-check --host=0.0.0.0 --mode development --open --hot --history-api-fallback

# or

yarn serve
```

## Templates

The `/src/templates` directory contains the top-level templates. These will map
one-to-one with "creative templates" that exist in DFP. Currently there are two
templates:

* Desktop and Mobile Splash
* Desktop Splash, Mobile Inset

Also coming soon is a *Desktop and Mobile Inset* template.

### Desktop and Mobile Splash

This displays an 800x600 overlay/splash on desktop widths (> 840px), and a
240x400 overlay/splash on mobile devices.

### Desktop Splash, Mobile Inset

This also displays an 800x600 overlay/splash on desktop widths, but on mobile
devices it displays an inset (i.e. a 100% width block that typically will be
appended to the top of the page).

This particular inset uses a 400x240 image and has a background color for
widths lower than 840px but higher than 400px, where the background behind the
image will be visible.

## Components

The `/src/components` directory contains the building blocks for the various
templates; all React (or Preact) components should go here.
