import { ContainerButton, ExportText, IconExport } from "./Button.styles";

// eslint-disable-next-line react/prop-types
const Button = ({handlePrint}) => {
    return (
      <ContainerButton onClick={handlePrint}>
        <IconExport className="fa-solid fa-download" />
        <ExportText>Export</ExportText>
      </ContainerButton>
    );
}
 
export default Button;