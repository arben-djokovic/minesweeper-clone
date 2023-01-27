
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const svakiDeseti = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const svakiPrvi = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
  const deset = [1,2,3,4,5,6,7,8,9,10]
  const sto = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
  let [bombe, setBombe] = useState([])
  let [flags, setFlags] = useState(0)
  let [popped, setPopped] = useState(0)
  let [otvorenaPolja, setOtvorenaPolja] = useState(0)
  let gridRef = useRef()
  let restartRef = useRef()

  let interval = setInterval(() => {
    checkFinished()
  }, 700);

  function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  let getBombs = () => {
    let bombeTest = []
    deset.forEach(br => {
      let randomBr = getRandomNumberBetween(1,100)
      while(bombeTest.includes(randomBr)){
        randomBr = getRandomNumberBetween(1,100)
      }
        bombeTest = [...bombeTest, randomBr]
    })
    setTimeout(() => {
      setBombe(bombeTest)
    }, 200);
  }
  let checkFinished = () => {
    if(otvorenaPolja > 89){
      clearInterval(interval)
      if(popped == 0){
        toast.success('Nice Job!')
      }
      else{
        toast.warning(`Finished but ${popped} bombs were popped!`)
      }
    }
  }

  let otvorenaNula = async(kocka) => {
    let otvorenaPoljaTest = 0
    if(!deset.includes(kocka) && document.querySelector('.kocka'+(kocka-10)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka-10)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka-10)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka-10)).innerHTML == '0'){
        await otvorenaNula(kocka-10)
      }
    }
    if(kocka < 90 && document.querySelector('.kocka'+(kocka+10)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka+10)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka+10)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka+10)).innerHTML == '0'){
        await otvorenaNula(kocka+10)
      }
    }
    if(!svakiPrvi.includes(kocka) && document.querySelector('.kocka'+(kocka-1)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka-1)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka-1)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka-1)).innerHTML == '0'){
        await otvorenaNula(kocka-1)
      }
    }
    if(!svakiDeseti.includes(kocka) && document.querySelector('.kocka'+(kocka+1)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka+1)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka+1)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka+1)).innerHTML == '0'){
        await otvorenaNula(kocka+1)
      }
    }
    if(!svakiPrvi.includes(kocka) && kocka < 92 && document.querySelector('.kocka'+(kocka+9)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka+9)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka+9)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka+9)).innerHTML == '0'){
        await otvorenaNula(kocka+9)
      }
    }
    if(!svakiDeseti.includes(kocka) && kocka < 90 && document.querySelector('.kocka'+(kocka+11)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka+11)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka+11)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka+11)).innerHTML == '0'){
        await otvorenaNula(kocka+11)
      }
    }
    if(!svakiDeseti.includes(kocka) && !deset.includes(kocka) && document.querySelector('.kocka'+(kocka-9)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka-9)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka-9)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka-9)).innerHTML == '0'){
        await otvorenaNula(kocka-9)
      }
    }
    if(!svakiPrvi.includes(kocka) && !deset.includes(kocka) && document.querySelector('.kocka'+(kocka-11)).style.backgroundColor != 'lightseagreen'){
      if(document.querySelector('.kocka'+(kocka-11)).style.backgroundColor == 'yellow'){
        setFlags(flags => flags - 1)
      }
      document.querySelector('.kocka'+(kocka-11)).style.cssText = 'color: white; background-color: lightseagreen'
      otvorenaPoljaTest = otvorenaPoljaTest + 1
      if(document.querySelector('.kocka'+(kocka-11)).innerHTML == '0'){
        await otvorenaNula(kocka-11)
      }
    }
    setOtvorenaPolja(otvorenaPolja => otvorenaPolja + otvorenaPoljaTest)
  }
  
  useEffect(()=>{
    getBombs()
  },[])
 


  return (
    <div className="App">
      <ToastContainer />
      <div className="start">
        <button onClick={(e)=>{
          setTimeout(() => {
            gridRef.current.style.cssText = 'display: grid'
            restartRef.current.style.cssText = 'display: flex'
            e.target.style.cssText = 'display: none'
          }, 300);
        }}>Start</button>
      </div>
      <div ref={restartRef} className="restart">
        <button onClick={()=>{window.location.reload()}}>Restart</button>
        <p className='flags'>Flags: <span>{flags}</span></p>
        <p className='openFields'>Opened fields: <span>{otvorenaPolja}</span>/90</p>
      </div>
      <div ref={gridRef} className="grid">
        {sto.map(kocka => {
          if(bombe.includes(kocka)){
            return(<div key={kocka} onContextMenu={(e)=>{
              console.log(bombe)
              e.preventDefault()
              if(e.target.style.backgroundColor == "yellow"){
                setFlags(flags - 1)
                e.target.style.cssText = 'background-color: blue'
              }
              else if(e.target.style.color != 'white' && e.target.style.backgroundColor != 'red'){
                setFlags(flags + 1)
                e.target.style.cssText = 'background-color: yellow'
              }
            }} onClick={(e)=>{
              if(e.target.style.backgroundColor != 'yellow' && e.target.style.backgroundColor != 'red'){
                e.target.style.cssText += 'background-color: red !important'
                setPopped(popped => popped + 1)
                setTimeout(() => {
                  toast.error('Ohh no! There was a bomb !!!')
                }, 200);
              }
            }}  className={'kocka kocka' + kocka + ' bomba'}></div>)
          }
          else{
            let broj = 0
            if(bombe.includes(kocka+10)){broj = broj + 1}
            if(bombe.includes(kocka-10)){broj = broj + 1}
            if(bombe.includes(kocka-1) && !svakiPrvi.includes(kocka)){broj = broj + 1}
            if(bombe.includes(kocka+1) && !svakiDeseti.includes(kocka)){broj = broj + 1}
            if(bombe.includes(kocka+9) && !svakiPrvi.includes(kocka)){broj = broj + 1}
            if(bombe.includes(kocka+11) && !svakiDeseti.includes(kocka)){broj = broj + 1}
            if(bombe.includes(kocka-9)  && !svakiDeseti.includes(kocka)){broj = broj + 1}
            if(bombe.includes(kocka-11) && !svakiPrvi.includes(kocka)){broj = broj + 1}
            return(<div key={kocka} onContextMenu={(e)=>{
              e.preventDefault()
              if(e.target.style.backgroundColor == "yellow"){
                setFlags(flags - 1)
                e.target.style.cssText = 'background-color: blue'
              }
              else if(e.target.style.color != 'white' ){
                setFlags(flags + 1)
                e.target.style.cssText = 'background-color: yellow'
              }
            }} 
            onClick={(e)=>{
              if(e.target.style.backgroundColor != 'yellow' && e.target.style.backgroundColor != 'lightseagreen'){
                e.target.style.cssText += 'color: white; background-color: lightseagreen'
                setOtvorenaPolja(otvorenaPolja + 1)
                if(e.target.innerHTML == '0'){
                  otvorenaNula(kocka)
                }
                else{
                  checkFinished()
                }
              }
            }} className={'kocka kocka' + kocka} id={broj ? 'nije 0' : 'nula'}>{broj}</div>)
          }
        })}
      </div>
    </div>
  );
}

export default App;
