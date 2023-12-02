import Input from './components/input';
import Button from './components/Buttons';

import { Container, Content, Linha } from './style';
import { useState } from 'react';

const App = () => {
  const [currenteNumber, setCurrentNumber] = useState('0');
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  };

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currenteNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currenteNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleRenNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currenteNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currenteNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultiNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currenteNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const sum = Number(firstNumber) * Number(currenteNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleDivisorNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currenteNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currenteNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(!firstNumber !== '0' && operation !== '' && currenteNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRenNumbers();
          break;
        case '*':
            handleMultiNumbers();
            break;    
        case '/':
            handleDivisorNumbers();
            break;  
          default:
            break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value = {currenteNumber} />
        <Linha>
        <Button label="L" onClick={handleOnClear} />
        </Linha>
        <Linha>
        <Button label= "7" onClick={() => handleAddNumber ('7')} />
        <Button label= "8" onClick={() => handleAddNumber ('8')} />
        <Button label= "9" onClick={() => handleAddNumber ('9')} />
        <Button label="÷"  onClick={handleDivisorNumbers} />
        </Linha>
        <Linha>
        <Button label= "4" onClick={() => handleAddNumber ('4')} />
        <Button label= "5" onClick={() => handleAddNumber ('5')} />
        <Button label= "6" onClick={() => handleAddNumber ('6')} />
        <Button label= '×'  onClick={handleMultiNumbers} />
        </Linha>
        <Linha>
        <Button label= "1" onClick={() => handleAddNumber ('1')} />
        <Button label= "2" onClick={() => handleAddNumber ('2')} />
        <Button label= "3" onClick={() => handleAddNumber ('3')} />
        <Button label="-"  onClick={handleRenNumbers} />
        </Linha>
        <Linha>
        <Button label="0" onClick={() => handleAddNumber ('0')} />
        <Button label="." onClick={() => handleAddNumber ('.')} />
        <Button label="=" onClick={handleEquals} />
        <Button label="+" onClick={handleSumNumbers} />
        </Linha>
      </Content>
    </Container>
  );
}

export default App;