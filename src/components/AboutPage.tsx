import React from "react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";


const AboutPage : React.FC = (props) => {
    return <Container>
      <ReactMarkdown source={raw('../articles/Miscellaneous/about-us.md')} />
    </Container>
}

export default AboutPage;