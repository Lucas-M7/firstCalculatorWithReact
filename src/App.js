import Input from './components/input';
import Button from './components/Buttons';

import { Container, Content, Linha, Coluna } from './style';

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Linha>
        <Button label={7} />
        <Button label={8} />
        <Button label={9} />
        <Button label="÷" />
        </Linha>
        <Linha>
        <Button label={4} />
        <Button label={5} />
        <Button label={6} />
        <Button label="×" />
        </Linha>
        <Linha>
        <Button label={1} />
        <Button label={2} />
        <Button label={3} />
        <Button label="-" />
        </Linha>
        <Linha>
        <Button label={0} />
        <Button label={","} />
        <Button label={"="} />
        <Button label="+" />
        </Linha>
      </Content>
    </Container>
  );
}

export default App;