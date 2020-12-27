# generate-placeholder-image

this is a placeholder image generator. An alternative of xgenious.com/placeholder/ or https://lab.csschopper.com/placeholder/
it's a cli tool for generating placeholder image with node.js Follow this step to generate your image.

- clone this repo to your desktop
- then install necessary package by running command `npm install` or `yarn install`
- after that copy your desire images to `source-images/`
- then run `yarn make-images` command again on your terminal
- after that in your `source-images/` will have all generated dummy image with text to width and height.

### packages used (npm)

- [canvas](https://www.npmjs.com/package/canvas)
- [fs-readdir-recursive](https://www.npmjs.com/package/fs-readdir-recursive)
- [image-size](https://www.npmjs.com/package/image-size)
