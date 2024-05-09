import { useRef } from "react";
import Button from "../../atoms/Button/Button";
import { ContainerMain } from "./Home.styles";
import { useReactToPrint } from "react-to-print"

const Home = () => {
  const contentDocument = useRef();

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  })

  console.log(contentDocument)
  return (
    <ContainerMain>
      <div ref={contentDocument}>
        <h1>Comparison</h1>
      </div>
      <Button handlePrint={handlePrint}/>
    </ContainerMain>
  );
};

export default Home;
