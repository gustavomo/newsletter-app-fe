// Styles
import {
  Container,
} from './styles';

const ContainerComponent = (props: any) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default ContainerComponent;
