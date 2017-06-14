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
  Image
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
  integration: require("../assets/continuous-integration.png")
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
        <Slide transition={["zoom", "slide"]} transitionDuration={500} >
          <Heading size={1} fit lineHeight={1}>Common problems of development process</Heading>
          <List>
            <ListItem lineHeight={2}>Too match time to build releases</ListItem>
            <ListItem lineHeight={2}>Code quality can be better than we have now every time</ListItem>
            <ListItem lineHeight={2}>A lot of developers is forget about infrastructure cases (sourse code linting, write actual tests, small refactoring work)</ListItem>
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
          <Heading size={1} fit lineHeight={1}>What is CI</Heading>
          <BlockQuote fit lineHeight={1}>
            <Quote textColor="secondary" >
              Continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
