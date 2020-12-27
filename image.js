const fs = require('fs');
var read = require('fs-readdir-recursive');
var sizeOf = require('image-size');
const {
    createCanvas,
    loadImage
} = require('canvas');
const srcDirectory = './source-images';
filenames = read(srcDirectory);

filenames.forEach(file => {
    let dimentions = sizeOf(srcDirectory + '/' + file);
    const {
        width,
        height
    } = dimentions;


    loadImage(srcDirectory + '/' + file).then(image => {
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');
        const text = width + 'X' + height;

        context.fillStyle = '#e3e3e3';
        context.fillRect(0, 0, width, height);

        context.font = (width / 3) / 3 + 'px sans-serif'
        context.textAlign = 'center';
        context.fillStyle = '#000'
        context.fillText(text, (width / 2), (height / 2))

        context.drawImage(image, width, height);
        const buffer = canvas.toBuffer();
        fs.writeFileSync(srcDirectory + '/' + file, buffer)
    })
});