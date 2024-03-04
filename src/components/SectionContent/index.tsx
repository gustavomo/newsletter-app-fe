// Styles
import {
  Content,
} from './styles';

const ContentComponent = (props: any) => {
  return (
    <Content>
      {props.children}
    </Content>
  );
};

export default ContentComponent;
