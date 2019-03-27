import React from "react";
import { ThemeProvider } from "styled-components";
import updatedTheme, { defaultTheme } from "./theme.js";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: defaultTheme() };
  }

  componentDidMount() {
    this.setState({
      theme: updatedTheme()
    });
  }

  render() {
    const { theme } = this.state;
    return <ThemeProvider theme={theme} {...this.props} />;
  }
}

export default ({ element }) => <Wrapper>{element}</Wrapper>;
