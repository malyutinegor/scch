#!/usr/bin/env node
var path=require("path"),fs=require("fs"),lib=path.join(path.dirname(fs.realpathSync(__filename)),"../lib");require(lib+"/get-ip.js");