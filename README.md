# generative-xyz-template-webpack

## Supported JS Libs

- [x] p5js@1.5.0
- [x] web3js@1.2.7
- [ ] threejs@r124
- [x] tonejs@14.8.49
- [x] c2.min.js@1.0.0
- [x] chromajs@2.4.2
- [x] p5.grain.js@0.6.1

# How to use

## Install

```git clone https://github.com/generative-xyz/generative-xyz-template-webpack.git```

```cd path_to_project```

```npm install``` or ```yarn```

## Structure

- ```public/```  contain index.html and styles.css
- ```src/``` contain index.js and more

## Start local

```npm run start``` or ```yarn start```

to run on local server http://localhost:3000

## Build

```npm run build``` or ```yarn build```

Will build your code into ```/dist``` with ```index.html, index.js, styles.css``` and zip all to ```project.zip```

## NOTICE

**_Current limited size for built all things is only 20kB. Webpack should notice some error if we reach limit of size_**
