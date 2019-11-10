import React, { Component } from 'react';
import { Box, Button } from 'rimble-ui';

import AccountOverview from "../utilities/components/AccountOverview";


class WalletBlock extends Component {

  handleConnectAccount = () => {
    this.props.connectAndValidateAccount(result => {
      if (result === "success") {
        // success
        console.log("Callback SUCCESS");
      } else if (result === "error") {
        // error
        console.log("Callback ERROR");
      }
    })
  }

  renderContent = () => {
    if (this.props.account && this.props.accountValidated) {
      return (
        <AccountOverview
          account={this.props.account}
          accountBalanceLow={this.props.accountBalanceLow}
          accountBalance={this.props.accountBalance}
        />
      )
    } else {
      return (
        <Button color="secondary" onClick={this.handleConnectAccount} width={1}>
          Connect your wallet
        </Button>
      )
    }
  }

  render() {
    return (
      <Box mx={'auto'} p={4} >
        {this.renderContent()}
      </Box>
    );
  }

}

export default WalletBlock;
