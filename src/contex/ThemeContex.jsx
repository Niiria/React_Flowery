import React, { createContext, Component } from 'react';

export const ThemeContex = createContext();

class ThemeContexProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTheme: true,
      dark: 'radial-gradient(circle, rgba(137,121,247,0.3) 0%, rgba(190,159,180,0.3) 100%)',
      light: 'radial-gradient(circle, rgba(142, 231, 13, 0.3) 16%,rgba(25, 205, 67, 0.3) 73%)',
    };
  }

  handleTheme = () => {
    const { defaultTheme } = this.state;
    this.setState({
      defaultTheme: !defaultTheme,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeContex.Provider value={{ ...this.state, handleTheme: this.handleTheme }}>
        {children}
      </ThemeContex.Provider>
    );
  }
}

export default ThemeContexProvider;
