import React from 'react/addons';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './interactive';

const images = {
  city: require('./city.jpg'),
  kat: require('./kat.png'),
  logo: require('./formidable-logo.svg'),
  github: require('./img/github.png'),
  twitter: require('./img/twitter.png'),
  subversion: require('./img/subversion.jpg'),
  git: require('./img/git.jpg'),
  whatIsVcs: require('./img/what-is-vcs.png'),
  oneContext: require('./img/1-one-context.png'),
  multipleContexts: require('./img/2- multiple-contexts.png'),
  fastForwardStart: require('./img/3-starting-situation-fast-forward.gif'),
  fastForwardEnd: require('./img/4-end-situation-fast-forward.gif'),
  mergeStart: require('./img/5-starting-situation-merge-commit.gif'),
  mergeEnd: require('./img/6-end-situation-merge-commit.gif'),
  rebaseStart: require('./img/7-starting-situation-rebase.gif'),
  rebaseStep1: require('./img/8-rebase-step-1.gif'),
  rebaseStep2: require('./img/9-rebase-step-2.gif'),
  rebaseStep3: require('./img/10-rebase-step-3.gif'),
  tower: require('./img/tower_icon.png'),
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={400}>

        <Slide bgColor="#1B3612">
          <Heading size={1} fit caps textColor="#E3DBAB">
            Understanding Git
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps textColor="black">
            Who am I?
          </Heading>
          <Appear>
            <Heading size={1} fit caps textColor="grey">
              Mordy Tikotzky
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} fit caps textColor="white">
              developer at qualitybath.com
            </Heading>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Link href="https://twitter.com/tikotzky"><Text bold textColor="black"><Image src={images.twitter.replace('/','')} margin="0px 5px" height="35px" display="inline" verticalAlign="middle"/>@tikotzky</Text></Link>
              </Fill>
              <Fill>
                <Link href="https://github.com/tikotzky"><Text bold textColor="black"><Image src={images.github.replace('/','')} margin="0px 5px" height="35px" display="inline" verticalAlign="middle"/>github.com/tikotzky</Text></Link>
              </Fill>
            </Layout>
          </Appear>
        </Slide>

        <Slide bgColor="#ABACA5">
          <Heading textColor="#223211">What is Git?</Heading>
          <Appear>
            <BlockQuote>
              <Quote textColor="#334b1a">Git is an open source, distributed version control system designed for speed and efficiency</Quote>
              <Cite>https://git-scm.com/</Cite>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide bgColor="#1E6EBD">
          <Heading fit caps textColor="#DBE7B6">version control</Heading>
          <BlockQuote>
            <Quote textColor="#dcc195">A version control system is a kind of "database" that tracks incremental versions of files and, directories over time.</Quote>
          </BlockQuote>
        </Slide>

        <Slide bgColor="white">
          <Image src={images.whatIsVcs.replace('/','')} width="100%"/>
        </Slide>

        <Slide bgColor="white">
          <Heading size={4} textColor="black">before git</Heading>
          <Appear>
            <Image src={images.subversion.replace('/','')}/>
          </Appear>
          <Appear>
            <Heading size={4} textColor="black">distributed</Heading>
            <Image src={images.git.replace('/','')}/>
          </Appear>
        </Slide>

        <Slide bgColor="#2E0F1D">
          <Heading fit caps textColor="#C0FFEE">distributed</Heading>
          <List textColor="#8dffe0">
            <ListItem><Appear>entire repo is cloned to local disk</Appear></ListItem>
            <ListItem><Appear>each user works on their own copy of repo</Appear></ListItem>
            <ListItem><Appear>every clone is a full backup of the <Link href="https://github.com/dspinellis/unix-history-repo">repo</Link></Appear></ListItem>
            <ListItem><Appear>you can work <Link href="https://github.com/nzakas/understandinges6">fully</Link> <Link href="https://github.com/getify/You-Dont-Know-JS">offline</Link></Appear></ListItem>
            <ListItem><Appear>everything is fast 🚀</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgColor="#DEEDED">
          <Heading fit caps textColor="#1F3A5C">terminology</Heading>
          <List textColor="#1B2A50">
            <ListItem>repository - "database" of commits</ListItem>
            <ListItem><Appear>commit - state of project at a certain point in time</Appear></ListItem>
            <ListItem><Appear>clone - copy a repo to your local disk</Appear></ListItem>
            <ListItem><Appear>remote - a copy of your repo hosted online (github)</Appear></ListItem>
            <ListItem><Appear>branch - named pointer to a specific commit</Appear></ListItem>
            <ListItem><Appear>upstream - the remote repo that you cloned from</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgColor="#DEEDED">
          <Heading fit caps textColor="#1F3A5C">more terminology</Heading>
          <List textColor="#1B2A50">
            <ListItem><Appear>checkout - select a branch to set as your working copy</Appear></ListItem>
            <ListItem><Appear>HEAD - currently checked out commit</Appear></ListItem>
            <ListItem><Appear>stash - saves all changes to the working copy</Appear></ListItem>
            <ListItem><Appear>merge - bring 2 branches by creating a commit with 2 parents</Appear></ListItem>
            <ListItem><Appear>rebase - replays current commits on top of specified branch</Appear></ListItem>
          </List>
        </Slide>


        <Slide bgColor="white">
          <Heading size={4} textColor="black">commits</Heading>
          <Image src={images.oneContext.replace('/','')}/>
          <Appear>
            <Heading size={4} textColor="black">branches</Heading>
            <Image src={images.multipleContexts.replace('/','')}/>
          </Appear>
        </Slide>


        <Slide bgColor="white">
          <Heading size={4} textColor="black">merge</Heading>
          <Image src={images.mergeStart.replace('/','')} width="100%"/>
          <Appear>
            <Image src={images.mergeEnd.replace('/','')} width="100%"/>
          </Appear>
        </Slide>


        <Slide bgColor="white">
          <Heading size={4} textColor="black">fast forward</Heading>
          <Appear>
            <Image src={images.fastForwardStart.replace('/','')} width="100%"/>
          </Appear>
          <Appear>
            <Image src={images.fastForwardEnd.replace('/','')} width="100%"/>
          </Appear>
        </Slide>


        <Slide bgColor="white">
          <Heading size={4} textColor="black">rebase</Heading>
          <Layout>
            <Fill>
              <Appear>
                <Image src={images.rebaseStart.replace('/','')} width="100%"/>
              </Appear>
              <Appear>
                <Image src={images.rebaseStep1.replace('/','')} width="100%"/>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image src={images.rebaseStep2.replace('/','')} width="100%"/>
              </Appear>
              <Appear>
                <Image src={images.rebaseStep3.replace('/','')} width="100%"/>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading caps fit>rebase</Heading>
          <List>
            <ListItem><Appear>rewrites history!</Appear></ListItem>
            <ListItem><Appear>allows "squashing" commits</Appear></ListItem>
            <ListItem><Appear>and editing previous commits</Appear></ListItem>
            <ListItem><Appear>very powerful 💪</Appear></ListItem>
            <ListItem><Appear>very dangerous 💣</Appear></ListItem>
            <ListItem><Appear>NEVER REBASE A BRANCH THAT WAS PUSHED TO A REMOTE</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgColor="#C3BEE9">
          <Heading textColor="#764414">GUIs</Heading>
          <Appear><Text textColor="#764414">Use one :)</Text></Appear>
          <Appear>
            <Text textColor="#764414">I use <Link href="http://www.git-tower.com/">tower app</Link></Text>
            <Image src={images.tower.replace('/','')}/>
          </Appear>
        </Slide>

        <Slide bgColor="#2B2163">
          <Heading size={1} caps textColor="#D6E3AB">commands</Heading>
          <List textColor="#D6E3AB">
            <ListItem><Appear>git init - create a new repo on your local machine</Appear></ListItem>
            <ListItem><Appear>git clone - copy a remote repo to your local machine</Appear></ListItem>
            <ListItem><Appear>git branch - create a new local branch</Appear></ListItem>
            <ListItem><Appear>git add - stages changed files to be included in the next commit</Appear></ListItem>
            <ListItem><Appear>git commit - save changes to the repo</Appear></ListItem>
            <ListItem><Appear>git stash - Stash the changes in your working directory away</Appear></ListItem>
            <ListItem><Appear>git push - upload local commits to a remote repo</Appear></ListItem>
            <ListItem><Appear>git pull - download remote commits to your local repo</Appear></ListItem>
            <ListItem><Appear>git merge - merge two branches</Appear></ListItem>
            <ListItem><Appear>git rebase - replays current commits on top of specified branch</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgColor="#DEEDED">
          <Heading size={1} caps textColor="#1F3A5C">aliases</Heading>
          <Appear>
            <CodePane
              lang="bash"
              source={require("raw!./code/aliases.code")}
              margin="20px auto"/>
          </Appear>
        </Slide>

        <Slide bgColor="#DEEDED">
          <Heading fit caps textColor="#1F3A5C">Creating a local repo</Heading>
          <CodePane
            lang="bash"
            source={require("raw!./code/local.code")}
            margin="20px auto"/>
        </Slide>

        <Slide bgColor="#Deeded">
          <Heading fit caps textColor="#1F3A5C">Cloning a remote repo</Heading>
          <CodePane
            lang="bash"
            source={require("raw!./code/remote.code")}
            margin="20px auto"/>
        </Slide>

        <Slide bgColor="#F0E0D1">
          <Heading size={1} caps textColor="#0D2614">resources</Heading>
          <List textColor="#0D2614">
            <ListItem><Appear><Link href="http://rogerdudler.github.io/git-guide/">Simple Git Guide</Link></Appear></ListItem>
            <ListItem><Appear><Link href="http://durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/">Git Aliases</Link></Appear></ListItem>
            <ListItem><Appear><Link href="http://www.git-tower.com/learn/git/ebook/command-line/introduction">Learn Version Control with Git</Link></Appear></ListItem>
            <ListItem><Appear><Link href="https://git-scm.com/book/en/v2">Pro Git</Link></Appear></ListItem>
          </List>
        </Slide>
        
        <Slide bgColor="black">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Thanks!
          </Heading>
        </Slide>

        <Slide bgColor="black">
          <Heading size={2} fit textColor="primary">
            One last thing....
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">We're Hiring :)</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">mordyt@qualitybath.com</Heading>
          </Appear>
        </Slide>





      {
        // <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
        //   <Appear>
        //     <Heading size={1} caps fit textColor="primary">
        //       Full Width
        //     </Heading>
        //   </Appear>
        //   <Appear>
        //     <Heading size={1} caps fit textColor="tertiary">
        //       Adjustable Darkness
        //     </Heading>
        //   </Appear>
        //   <Appear>
        //     <Heading size={1} caps fit textColor="primary">
        //       Background Imagery
        //     </Heading>
        //   </Appear>
        // </Slide>
        // <Slide transition={['fade']} bgColor="primary">
        //   <Heading caps fit>Flexible Layouts</Heading>
        //   <Layout>
        //     <Fill>
        //       <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
        //         Left
        //       </Heading>
        //     </Fill>
        //     <Fill>
        //       <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
        //         Right
        //       </Heading>
        //     </Fill>
        //   </Layout>
        // </Slide>
        // <Slide transition={['slide']} bgColor="black">
        //   <BlockQuote>
        //     <Quote>Wonderfully formatted quotes</Quote>
        //     <Cite>Ken Wheeler</Cite>
        //   </BlockQuote>
        // </Slide>
        // <Slide transition={['slide', 'spin']} bgColor="primary">
        //   <Heading caps fit size={1} textColor="tertiary">
        //     Smooth
        //   </Heading>
        //   <Heading caps fit size={1} textColor="secondary">
        //     Combinable Transitions
        //   </Heading>
        // </Slide>
        // <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
        //   <List>
        //     <ListItem><Appear>Inline style based theme system</Appear></ListItem>
        //     <ListItem><Appear>Autofit text</Appear></ListItem>
        //     <ListItem><Appear>Flexbox layout system</Appear></ListItem>
        //     <ListItem><Appear>React-Router navigation</Appear></ListItem>
        //     <ListItem><Appear>PDF export</Appear></ListItem>
        //     <ListItem><Appear>And...</Appear></ListItem>
        //   </List>
        // </Slide>
        // <Slide transition={['slide']} bgColor="primary">
        //   <Heading size={1} caps fit textColor="tertiary">
        //     Your presentations are interactive
        //   </Heading>
        //   <Interactive/>
        // </Slide>
        // <Slide transition={['spin','slide']} bgColor="tertiary">
        //   <Heading size={1} caps fit textColor="primary">
        //     Made with love in Seattle by
        //   </Heading>
        //   <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        // </Slide>
      }
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
      </Deck>
    )
  }
}