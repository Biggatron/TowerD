// ======
// MAPGRID
// ======

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

/*
0        1         2         3         4         5         6         7         8
12345678901234567890123456789012345678901234567890123456789012345678901234567890
*/

// Array with multiple mapGrids, one for each lvl.
var g_mapGrids;

var mapGrid = {
    // Initialise g_mapGrids with grids.
    init : function () {
        g_mapGrids = [mapGrid.generateMapGrid1(),
                      mapGrid.generateMapGrid2(),
                      mapGrid.generateMapGrid3()];
  },

// MapGrid for lvl 1
generateMapGrid1 : function () {
  var grid = [1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
           1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
           1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,
           1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,
           1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,
           1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,
           1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,
           1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,
           1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,
           1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
           1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
           1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
           1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
           1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
           1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
    return grid;
},

// MapGrid for lvl 2
generateMapGrid2 : function () {
  var grid = [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,
           1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,
           1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
           1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
           1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,
           1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,
           1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,
           1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,
           1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,
           1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,
           1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,
           1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,
           1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,
           1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,
           1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
    return grid;
},

// MapGrid for lvl 3
generateMapGrid3 : function () {
  var grid = [1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
           1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
           1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,
           1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,
           1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,
           1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,
           1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
           1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,
           1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,
           1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,
           1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,
           1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,
           1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,]
    return grid;
},

};
