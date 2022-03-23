import {useCallback, useRef, useState} from 'react'

import {Checkbox} from '../../components/Checkbox'
import {RoundedButton} from '../../components/RoundedButton'

import './styles.css'

interface Technology {
  name: string;
  isChecked: boolean;
}

function App() {
  const textAreaRef = useRef({} as HTMLTextAreaElement)
  const [count, setCount] = useState(0)
  const [technologies, setTechnologies] = useState<Technology[]>([
    {
      name: "react",
      isChecked: false,
    },
    {
      name: "vue",
      isChecked: false,
    },
    {
      name: "angular",
      isChecked: false,
    }
  ])



  const handleChange = useCallback((tecnology) => {    
    setTechnologies(oldState => oldState.map(item => item.name === tecnology ? {...item, isChecked: !item.isChecked} : item))
  }, [])

  const handleCountChange = useCallback((operation) => {
    setCount(oldState => operation.includes("+") ? oldState += 1 : oldState -= 1)
  }, [])

  const handleSubmit = useCallback(() => {
    const technologiesSelected = technologies.filter(item => item.isChecked).map(item => item.name)

    const data = {
      ...(technologiesSelected.length && {technologies: technologiesSelected, count}), 
      ...(textAreaRef.current.value && {observation: textAreaRef.current.value.trim()})  
    }

    console.log('data to send =>', data)
  }, [technologies, count])

  return (
    <div className="container">
      <header>
        <div>
          <h1>
            Formulário
            para compra de
          </h1>
          <h2>Pacote de adesivos</h2>
        </div>
      </header>
      <div className="wrapper">
        <section className="section">
          <p>Quais adesivos</p>
  
          {technologies.map(item => (
            <Checkbox 
              key={item.name} 
              name={item.name} 
              label={item.name}
              defaultChecked={item.isChecked}           
              onChange={() => handleChange(item.name)}
            />
          ))} 
        </section>
        <section className="section">
          <p>Quantos adesivos de cada?</p>

          <div className="increment-decrement">
            <RoundedButton disabled={count <= 0} text="-" onClick={() => handleCountChange("-")}/>
            <p>{count}</p>  
            <RoundedButton text="+" onClick={() => handleCountChange("+")}/> 
          </div>  
        </section>

        <section className="section">
          <p>Observações:</p>
          <textarea ref={textAreaRef} name="observation"  rows={10} placeholder="Alguma dúvida? Recado?"></textarea>
        </section>
        
      </div>
      <footer>
          <button type='button' onClick={() => handleSubmit()}>enviar</button>
      </footer>   
    </div>
  )
}

export default App
