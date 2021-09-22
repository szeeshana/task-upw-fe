import logo from './logo.svg';
import './App.css';
import FormC from './pages/form';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <FormC></FormC>
        </Col>
        <Col span={8}></Col>
      </Row>

    </div>
  );
}

export default App;
