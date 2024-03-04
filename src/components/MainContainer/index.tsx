// Styles
import {
  Container,
} from './styles';

const ContainerComponent = (props: TContainerComponentProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default ContainerComponent;
