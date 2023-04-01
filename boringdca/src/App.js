import './App.css';
import ConnectToMetamask from './connecttometamask.js';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Boring DCA.</h1>
      <p>Blockchain is exciting, but investing should be boring.</p>
      <p>So we found a way to make investing in blockchain boring.</p>
      <p id="dcadef">"Dollar cost averaging is an investment strategy in which an investor buys a fixed dollar amount of a particular investment, such as a stock or a cryptocurrency, on a regular schedule, regardless of the price. The goal of dollar cost averaging is to reduce the impact of volatility on the overall cost of the investment by buying more shares when prices are low and fewer shares when prices are high. This strategy is designed to help investors avoid the pitfalls of trying to time the market and can be an effective way to build a long-term investment portfolio."</p>

      <ConnectToMetamask />
    </div>
  );
}

export default App;
