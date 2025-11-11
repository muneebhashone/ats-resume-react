import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./resume/Document";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default App;
