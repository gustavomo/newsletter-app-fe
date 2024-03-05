import {
  Content,
} from './styles';

const ContentComponent = (props: TContentComponentProps) => {
  return (
    <Content>
      {props.children}
    </Content>
  );
};

export default ContentComponent;
