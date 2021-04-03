import React, { Component } from "react";
// import nextPersist from "../../next-persist.js";
import TotalsDisplay from "../components/TotalsDisplay.jsx";
import MarketsContainer from "./MarketsContainer.jsx";
import nextPersist from 'next-persist-test'

const persistConfig = {
  allowList: [
    "lastMarketId",
    "marketList",
    "totalCards",
    "totalMarkets",
  ],
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMarkets: 0,
      totalCards: 0,
      marketList: props.testState,
      // marketList: [{,
      //   marketId : 1,
      //   location : 'new yuk',
      //   cards : 0,
      //   totalCards : 0
      // }],
      lastMarketId: 10000,
      newLocation: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((state) => {
      return {
        ...state,
        newLocation: e.target.value,
      };
    });
  }

  handleClick(e) {
    this.setState(
      (state) => {
        // increment totalMarkets and lastMarketId
        const lastMarketId = this.state.lastMarketId + 1;
        const totalMarkets = this.state.totalMarkets + 1;
        const newMarket = {
          // what goes in here? a new market card element
          marketId: lastMarketId,
          location: state.newLocation,
          cards: 0,
          totalCards: state.totalCards,
        };
        let marketList = state.marketList.slice();
        marketList.push(newMarket);

        return {
          ...state,
          marketList,
          lastMarketId,
          totalMarkets,
          newLocation: this.state.newLocation,
        };

        // create a newMarket object and insert into marketList
      },
      () => {
        nextPersist.writeStorage(persistConfig, this.state);
      }
    );
  }

  componentDidMount() {
    this.setState(
      // returns state object
      nextPersist.getStorage(persistConfig, this.state)
    );
    //   const clientState = localStorage.getItem("key");
    //   console.log("hello?", clientState);

    //   if (clientState) {
    //     const {
    //       lastMarketId,
    //       marketList,
    //       newLocation,
    //       totalCards,
    //       totalMarkets,
    //     } = JSON.parse(clientState);
    //     console.log("clientState exists", marketList);
    //     this.setState((state) => {
    //       return {
    //         ...state,
    //         marketList,
    //         lastMarketId,
    //         totalMarkets,
    //         newLocation,
    //         totalCards,
    //       };
    //     });
    //   }
    // else return { state };
  }

  render() {
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay
            totalCards={this.state.totalCards}
            totalMarkets={this.state.totalMarkets}
          />
          <MarketsContainer
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            marketList={this.state.marketList}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
