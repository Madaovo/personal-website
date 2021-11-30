import "./App.css";
import { Canvas } from "@views/canvas";
import { Editor } from "@views/editor";
import { Layout } from "@views/layout-component";
import { Col, Row } from "antd";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(248,247,241)" }}>
      <Row>
        <Col span="6">
          <Layout />
        </Col>
        <Col span="12">
          <Canvas />
        </Col>
        <Col span="6">
          <Editor />
        </Col>
      </Row>
    </div>
  );
}

export default App;
