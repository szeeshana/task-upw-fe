import React from 'react';
import { Form, Input, Button, Radio } from 'antd';


class FormC extends React.Component {
    state = {
        userData: []
    }
    onFinish = (values) => {
        const stringData = JSON.stringify(values);
        localStorage.setItem("userData", stringData);
        this.state.userData.push(values);
        const temp = this.state.userData;
        this.setState(({ userData }) => ({
            userData: temp
        }));
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return <><Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: "email", message: "Please add a valid email" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Mobile"
                name="mobile"
                rules={[{ required: true, message: 'Please input your mobile!' }, { pattern: "^([0|\+[0-9]{1,5})?([0-9]{10})$", message: "Please enter valid mobile numbers" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: "Please select gender" }]} name="gender" label="Radio.Group">
                <Radio.Group>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
            <table width="100%">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                </tr>
                {this.state.userData.map(res => {
                    return <tr>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.gender}</td>
                        <td>{res.mobile}</td>
                    </tr>
                })}
            </table>
        </>;
    }

}
export default FormC;