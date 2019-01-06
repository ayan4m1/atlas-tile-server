# ATLAS Tile Server

This project provides one half of a system for displaying a [slippy map](https://en.wikipedia.org/wiki/Tiled_web_map) of an ATLAS server grid. Its companion project is [ATLAS Map](https://github.com/ayan4m1/atlas-map).

This project requires Node.js version 10 or greater.

## Prerequisites

First, you need to open a project in the [Server Grid Editor](https://github.com/GrapeshotGames/ServerGridEditor). Then, click on `Generate Slippy Map (Optional Tools)` under the `Export` menu bar entry.

Create a new output directory and select it. From this point forward, when this document refers to the "map directory", it is referring to the directory you chose here. The export process will take several minutes.

A message box will pop up at the end telling you that the export is complete. You can move the map directory after the Server Grid Editor is done creating it, but if you want to move it after configuring the tile server, make sure you update the path in the tile server configuration!

## Usage

Now, clone this repository and run:

```sh
npm install
```

Next, copy `.tilerc.default.yml` to a new file named `.tilerc.yml`. Open this file in a text editor. The only entry you need to change is `map.basePath`. Set it to the absolute path to your map directory. On Windows, format the path like `C:/TileServer/Map`. Change `web.address` to an IP/hostname other than `localhost` if you want it to be publicly accessible.

Finally, use:

```sh
npm start
```

To start the tile server. You can use anything from [PM2](https://github.com/Unitech/pm2#managing-applications) to [screen](https://www.gnu.org/software/screen/manual/screen.html#Overview) to keep the server running.

## Troubleshooting

You can validate that your tile server is working by going to `http://localhost:8080/base/0/0/0.webp` in a browser (changing the hostname and port if you did so in your `.tilerc.yml`). If the server is working, you will see a fully zoomed-out image of your grid.

If you see `File not found` then the tile server cannot access the `map.basePath` directory in `.tilerc.yml`. Check that it exists and that permissions allow the server process to access all the files and directories inside.

If you see `Not found` then the tile server is not matching `/base/0/0/0.webp` as a valid tile route.

## Roadmap

* Logging
* ETag support
* More layers - company claims, heatmaps
* Save transcoded .webp tiles back to disk
* Generate map tiles directly from grid editor data

## Dependencies

This project uses the following libraries:

* [sharp](https://www.npmjs.com/package/sharp)
* [TileStrata](https://www.npmjs.com/package/tilestrata)
* [cosmiconfig](https://www.npmjs.com/package/cosmiconfig)

## Development Dependencies

This project uses the following tools:

* [Gulp](https://gulpjs.com/)
* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* [Prettier](https://github.com/prettier/prettier#intro)
* [lint-staged](https://www.npmjs.com/package/lint-staged)
