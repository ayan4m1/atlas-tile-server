# ATLAS Tile Server

This project provides one half of a simple and flexible system for displaying a [slippy map](https://en.wikipedia.org/wiki/Tiled_web_map) of an ATLAS server grid. Its companion project is [ATLAS Map](https://github.com/ayan4m1/atlas-map).

## Prerequisites

First, you need to open a project in the [Server Grid Editor](https://github.com/GrapeshotGames/ServerGridEditor). Then, click on `Generate Slippy Map (Optional Tools)` under the `Export` menu bar entry.

Create a new output directory and select it. From this point forward, when this document refers to the `map directory`, it is referring to the directory you chose here. The export process will take anywhere from one to _many_ minutes depending mainly on the size and scale of the grid.

A message box will pop up at the end telling you that the export is complete. You can move the map directory after the Server Grid Editor is done exporting to it, but if you want to move it after configuring the tile server, make sure you update the path in the tile server configuration!

## Configuration

Next, copy `.tilerc.default.yml` to a new file named `.tilerc.yml`. Open this file in a text editor and set the `web.port` and `map.basePath` fields.

## Troubleshooting

You can validate that your tile server is working by going to `http://localhost:8080/base/0/0/0.png` in a browser - you should see a fully zoomed-out image of your grid. If you see `File not found` then you have the map `basePath` misconfigured in the tile server. If you see `Not found` then you have entered part of the URL incorrectly or you have customized the URL format in the tile server configuration.
