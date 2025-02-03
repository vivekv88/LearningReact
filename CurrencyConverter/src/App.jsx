import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setAmount(convertedAmount)

  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
      <div className='flex gap-x-0 justify-between items-center'>
      <div>
        <img className='w-[102vw] h-[100vh] border-2 border-blue-50' src="https://images.pexels.com/photos/29857218/pexels-photo-29857218/free-photo-of-golden-bitcoin-coin-with-blue-abstract-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <div className="w-full text-3xl border-2 bg-gray-600 border-amber-100 h-screen">
            <div className="w-full max-w-md mx-auto mt-44 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className='text-5xl px-5 py-4 text-center font-bold font-mono text-gray'>Currency Converter</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
      </div>
        
    </div>
);
}

export default App
