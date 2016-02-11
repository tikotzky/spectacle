import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),

  webpack: require("./img/webpack.png"),

  brocolli: require("./img/compare/brocolli.png"),
  browserify: require("./img/compare/browserify.png"),
  grunt: require("./img/compare/grunt.jpg"),
  gulp: require("./img/compare/gulp.jpg"),
  requirejs: require("./img/compare/requirejs.jpg"),
  whatIsWebpack: require("./img/what-is-webpack.png")
};

preloader(images);

const theme = createTheme({
  primary: "#769bde"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary" id="title">
            <Heading size={1} fit caps>
              thinking small with
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              webpack
            </Heading>
            <Heading size={6} caps lineHeight={1} textColor="#eee">
              02/10/16
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.webpack.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is webpack?
            </Heading>
          </Slide>

          <Slide>
            <Heading fit>
              module bundler
            </Heading>
            <Appear>
              <Text>What does that mean??</Text>
            </Appear>
          </Slide>

          <Slide>
            <Image width="100%" src={images.whatIsWebpack.replace("/", "")} />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="white">
            <Heading caps textColor="primary" textFont="primary">Similiar To:</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <Image height="100px" src={images.browserify.replace("/", "")}/>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Image height="100px" src={images.brocolli.replace("/", "")}/>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Image height="100px" src={images.requirejs.replace("/", "")}/>
                </Appear>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Appear>
                  <Image height="100px" src={images.grunt.replace("/", "")}/>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Image height="100px" src={images.gulp.replace("/", "")}/>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading caps>benefits</Heading>
            <List>
              <Appear><ListItem>enables you to write small modules</ListItem></Appear>
              <Appear><ListItem>use (almost) anything from npm</ListItem></Appear>
              <Appear><ListItem>package static assests other than JS (css, images, fonts)</ListItem></Appear>
              <Appear><ListItem>🔥bundle splitting</ListItem></Appear>
              <Appear><ListItem>🔥async (on demand) bundle loading</ListItem></Appear>
              <Appear><ListItem>🔥🔥hot loading🔥🔥</ListItem></Appear>
              <Appear><ListItem>many more that we wont have time to cover 😞😞</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="white" notes="<ul><li><pre>npm init -f</pre></li><li><pre>npm i -D webpack</pre></li></ul>">
            <Heading textColor="primary" textFont="primary" margin="0 0 50px">Getting Started</Heading>

            <Markdown>
            {"`npm install --save-dev webpack`"}
            </Markdown>
          </Slide>

          <Slide>
            <Heading fit caps>Demo Time</Heading>
            <List>
              <Appear><ListItem>basics - module bundling</ListItem></Appear>
              <Appear><ListItem>config - creating a configuration file</ListItem></Appear>
              <Appear><ListItem>watching - rebuild on change</ListItem></Appear>
              <Appear><ListItem>loaders - processing files</ListItem></Appear>
              <Appear><ListItem>bundle splitting</ListItem></Appear>
              <Appear><ListItem>hot loading</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit caps>Resources</Heading>
            <List>
              <ListItem><a href="https://github.com/petehunt/webpack-howto">https://github.com/petehunt/webpack-howto</a></ListItem>
              <ListItem><a href="https://github.com/AriaFallah/WebpackTutorial">https://github.com/AriaFallah/WebpackTutorial</a></ListItem>
              <ListItem><a href="http://www.pro-react.com/materials/appendixA/">http://www.pro-react.com/materials/appendixA/</a></ListItem>
              <ListItem><a href="http://www.pro-react.com/materials/appendixA/">http://www.pro-react.com/materials/appendixA/</a></ListItem>
              <ListItem><a href="http://webpack.github.io/docs/">http://webpack.github.io/docs/</a></ListItem>
            </List>
          </Slide>

          <Slide bgColor="white">
            <Heading fit caps textColor="primary" textFont="primary" >Thanks!</Heading>
            <Appear><Heading fit caps textColor="primary" >Who's volunteering for next month?</Heading></Appear>
          </Slide>
{
//           <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
//             <CodePane
//               lang="jsx"
//               source={require("raw!../assets/deck.example")}
//               margin="20px auto"
//             />
//           </Slide>

//           <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>

//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>

//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>

//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})

// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And let's not forget **bold**
//               `}
//             </Markdown>
//           </Slide>

//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>

//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>

//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive/>
//           </Slide>

//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
//           </Slide>
}
        </Deck>
      </Spectacle>
    );
  }
}
