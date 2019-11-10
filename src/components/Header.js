import React from "react";
import { Box, Heading } from "rimble-ui";

class Header extends React.Component {
  render() {
    return (
      <Box bg="primary" p={3} justifyContent="center" flexDirection="row">
        <Heading fontSize={4} color={"white"}>
        <img alt="" src="../assets/logo.png" />CRE8
        </Heading>
      </Box>
    );
  }
}

export default Header;
