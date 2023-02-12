import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Button, Checkbox, Form, Input, Spin } from 'antd';
import { setAdmin } from '../app/features/admin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true)
        dispatch(setAdmin({ ...values }))
        setLoading(false)
        history('/about')
    };

    const onFinishFailed = (fail) => {
        console.log('Failed', fail);
    };

    return (
        <Layout style={{ minHeight: '100vh', width: '100vw', display: 'flex', verticalAlign: 'center', justifyContent: 'center' }}>
            <Spin spinning={loading}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{
                        width: "400px",
                        margin: '0 auto'
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
        </Layout>
    );
};

export default Login;