import {
  ContainerView,
  CloseContainer,
} from "../../modules/home/styles/sobre.styles";
import { Close } from "../Icons/IconClose";

interface ContainerProps {
  light: boolean;
  onClose?: () => void; 
  children?: React.ReactNode; 
}

function Container({ light, onClose, children }: ContainerProps) {
  return (
    <ContainerView
      style={{ backgroundColor: light ? "#434343" : "#EDEDED" }}
    >
      {children}
      
      <CloseContainer onClick={onClose}>
        <Close color={light ? "white" : "black"} />
      </CloseContainer>
    </ContainerView>
  );
}

export default Container;
