import React, { Component } from "react";
import { ThemeProvider, Box, Flex, Card, Text, Heading } from "rimble-ui";

import RimbleWeb3 from "./utilities/RimbleWeb3";
import ConnectionBanner from "@rimble/connection-banner";
import NetworkIndicator from "@rimble/network-indicator";

import Header from "./components/Header";
import WalletBlock from "./components/WalletBlock";
import PrimaryCard from "./components/PrimaryCard";
import Web3Debugger from "./components/Web3Debugger";

class App extends Component {
  state = {
    route: "default"
  };

  // Optional parameters to pass into RimbleWeb3
  config = {
    accountBalanceMinimum: 0.001,
    requiredNetwork: 4
  };

  showRoute = route => {
    this.setState({
      route
    });
  };

  render() {
    return (
      <ThemeProvider>
        <RimbleWeb3 config={this.config}>
          <RimbleWeb3.Consumer>
            {({
              needsPreflight,
              validBrowser,
              userAgent,
              web3,
              account,
              accountBalance,
              accountBalanceLow,
              initAccount,
              rejectAccountConnect,
              userRejectedConnect,
              accountValidated,
              accountValidationPending,
              rejectValidation,
              userRejectedValidation,
              validateAccount,
              connectAndValidateAccount,
              modals,
              network,
              transaction,
              web3Fallback
            }) => (
              <Box>
                <Header
                  account={account}
                  accountBalance={accountBalance}
                  accountBalanceLow={accountBalanceLow}
                  initAccount={initAccount}
                  rejectAccountConnect={rejectAccountConnect}
                  userRejectedConnect={userRejectedConnect}
                  accountValidated={accountValidated}
                  accountValidationPending={accountValidationPending}
                  rejectValidation={rejectValidation}
                  userRejectedValidation={userRejectedValidation}
                  validateAccount={validateAccount}
                  connectAndValidateAccount={connectAndValidateAccount}
                  modals={modals}
                  network={network}
                />

                <Box mx={'auto'} p={3} >
                  <ConnectionBanner
                    currentNetwork={network.current.id}
                    requiredNetwork={this.config.requiredNetwork}
                    onWeb3Fallback={web3Fallback}
                  />
                </Box>

                <WalletBlock
                  account={account}
                  accountBalance={accountBalance}
                  accountBalanceLow={accountBalanceLow}
                  accountValidated={accountValidated}
                  connectAndValidateAccount={connectAndValidateAccount}
                />

                <Card mx={'auto'} p={3} px={4}>
                  <NetworkIndicator
                    currentNetwork={network.current.id}
                    requiredNetwork={network.required.id}
                  />
                </Card>

                {this.state.route === "default" ? <PrimaryCard /> : null}

                {this.state.route === "onboarding" ? (
                  <Web3Debugger
                    validBrowser={validBrowser}
                    userAgent={userAgent}
                    web3={web3}
                    account={account}
                    accountBalance={accountBalance}
                    accountBalanceLow={accountBalanceLow}
                    initAccount={initAccount}
                    rejectAccountConnect={rejectAccountConnect}
                    userRejectedConnect={userRejectedConnect}
                    accountValidated={accountValidated}
                    accountValidationPending={accountValidationPending}
                    rejectValidation={rejectValidation}
                    userRejectedValidation={userRejectedValidation}
                    validateAccount={validateAccount}
                    connectAndValidateAccount={connectAndValidateAccount}
                    modals={modals}
                    network={network}
                    transaction={transaction}
                  />
                ) : null}
              </Box>
            )}
          </RimbleWeb3.Consumer>
        </RimbleWeb3>
      </ThemeProvider>
    );
  }
}

export default App;
