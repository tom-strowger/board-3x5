# My keyboard

## Overview
A keyboard built using ergogen etc.  36 keys wireless using the Seeed studio Xiao nRF52840 module.

## Guides
### Prerequisites
`node` is setup to be run on the system

### How to build
`./build`
or
`./build once`

### How to convert the case to STL
The generated case is in a [JSCAD](https://github.com/jscad/OpenJSCAD.org) format however it uses an old/outdated API that is no longer supported. "V1" of JSCAD must be used to convert it to STL
#### Setup
`npm install @jscad/csg` (this is a deprecated package so must be installed explicitly)
#### Run
`npx @jscad/cli@1 output/cases/top_case.jscad -of stla -o top_case.stl`