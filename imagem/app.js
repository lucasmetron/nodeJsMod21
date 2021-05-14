const sharp = require('sharp');
const compress_images = require('compress-images');
const fs = require('fs');

let path = process.argv[2];
let width = Number(process.argv[3]);
let outputPath = 'C:/Users/dell/Desktop/ProgWeb/mod21NodeJS/imagem/temp/output_resize.png';

function resize(inputPath, outputPath, width) {

    sharp(inputPath).resize({ width: width })
        .toFile(outputPath, (erro) => {
            if (erro) {
                console.log("Deu ruim " + erro)
            } else {
                console.log("imagem redimensionada com sucesso!")
                compress(outputPath, 'C:/Users/dell/Desktop/ProgWeb/mod21NodeJS/imagem/compressed/')
            }
        })

}

function compress(pathInput, outputPath) {

    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");


            fs.unlink(pathInput, function (erro) {
                if (erro) {
                    throw erro;
                } else {
                    console.log("Imagem temporária deletada com sucesso")
                }
            })
        },


    );

}


resize(path, outputPath, width);


