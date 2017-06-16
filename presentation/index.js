// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Link,
  Text,
  Image,
  Table,
  TableRow,
  TableItem,
  TableHeaderItem,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  featureBranching: require("../assets/feature-branching.png"),
  integration: require("../assets/continuous-integration.png"),
  tests: require("../assets/passing-tests.jpeg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading >
            Continous integration in development
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            <Text>@ilavriv</Text>
            <Link href="http://lavriv92.github.io/ci-slides" target="_blank" textColor="tertiary">lavriv92.github.io/ci-slides</Link>
          </Text>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} fit lineHeight={1}>whoami</Heading>
          <List>
            <ListItem>Software maniac (Lohika, the Ukrainians)</ListItem>
            <ListItem>Coordinator PLLUG</ListItem>
            <ListItem>Lviv Rust meetups organizer</ListItem>
            <ListItem>LvivJS organizer</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500} >
          <Heading size={1} fit lineHeight={1}>Common problems of development process</Heading>
          <List>
            <ListItem lineHeight={2}>Too match time to build releases</ListItem>
            <ListItem lineHeight={2}>Code quality can be better than we have now every time</ListItem>
            <ListItem lineHeight={2}>A lot of developers is forget about infrnpm sastructure cases (sourse code linting, write actual tests, small refactoring work)</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>How we can resolve it?</Heading>
          <List>
            <ListItem>Feature branching</ListItem>
            <ListItem>Continous integration</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500} >
          <Heading size={1} fit lineHeight={1}>Feature branching</Heading>
          <Image src={images.featureBranching.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500} >
          <Heading size={1} fit lineHeight={1}>Continous integration</Heading>
          <Image src={images.integration.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500} >
          <Heading size={1} lineHeight={1}>CI</Heading>
          <BlockQuote fit lineHeight={1}>
            <Quote textColor="secondary" >
              Continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500} >
          <Heading size={1} fit lineHeight={1}>CI servises overview</Heading>
          <Table fit>
            <TableRow>
              <TableHeaderItem fit >Servise name</TableHeaderItem>
              <TableHeaderItem fit >Repositories</TableHeaderItem>
              <TableHeaderItem fit >Prising</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem bold>
                <Link href="https://travis-ci.org/">Travis.ci</Link>
              </TableItem>
              <TableItem>GitHub</TableItem>
              <TableItem italic >Free</TableItem>
            </TableRow>
            <TableRow>
              <TableItem bold>CircleCI</TableItem>
              <TableItem>GitHub</TableItem>
              <TableItem italic>Prising</TableItem>
            </TableRow>
            <TableRow>
              <TableItem bold>
                <Link href="https://houndci.com/">HoundCI</Link>
              </TableItem>
              <TableItem>GitHub</TableItem>
              <TableItem italic>Free for public repositories</TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>TravisCI example</Heading>
          <CodePane lang="YAML" source={require("./examples/ci.example")} textSize="0.5em" />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1}>CI pipeline</Heading>
          <List>
            <ListItem lineHeight={2}>Testing</ListItem>
            <ListItem lineHeight={2}>Sourse code linting</ListItem>
            <ListItem lineHeight={2}>Static code analyze</ListItem>
            <ListItem lineHeight={2}>Code smells</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1}>Unit testing</Heading>
          <Image src={images.tests.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1}>Testing practices</Heading>
          <List>
            <ListItem>Mocking external resources</ListItem>
            <ListItem>Running tests (mocha, karma, ets)</ListItem>
            <ListItem>Code coverage ( istanbul, JSCover, BlaknetJS )</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>Coverage example</Heading>
          <CodePane lang="javascript" source={require("./examples/istanbul.example")} textSize="0.5em" />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1}>Linting tools</Heading>
          <List>
            <ListItem>JSHint(<Link href="http://jshint.com/">http://jshint.com/</Link>)</ListItem>
            <ListItem>ESLint (<Link href="http://eslint.org/">http://eslint.org/</Link>)</ListItem>
            <ListItem>TSLint (<Link href="https://palantir.github.io/tslint/">https://palantir.github.io/tslint/</Link>)</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>eslint example</Heading>
          <CodePane lang="javascript" source={require("./examples/eslint.example")} textSize="0.5em" />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>Type checking</Heading>
          <List>
            <ListItem><Link href="https://www.typescriptlang.org/">TypeScript</Link></ListItem>
            <ListItem><Link href="https://flow.org/">Flow</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>Using flow</Heading>
          <CodePane lang="js" source={require("./examples/flow.example")} textSize="0.5em" />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>Code smells tooling</Heading>
            <ListItem><Link href="https://github.com/saltlab/JSNose">https://github.com/saltlab/JSNose</Link></ListItem>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>Code smells</Heading>
          <List>
            <ListItem>Convoluted Code Smell</ListItem>
            <ListItem>Copy Paste Code Smell</ListItem>
            <ListItem>Switch Statement Smell</ListItem>
            <ListItem>The This Abyss Smell</ListItem>
            <ListItem>Crisp Concatenation Smell</ListItem>
            <ListItem>jQuery Inquiry</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading fit>Question time</Heading>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading>Thank you</Heading>
          <List>
            <ListItem>Twitter: <Link href="http://twitter.com/ilavriv">ilavriv</Link></ListItem>
            <ListItem>GitHub: <Link href="http://github.com/lavriv92">lavriv92</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
