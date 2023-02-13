import React from 'react';
import { Button, Tabs } from 'antd';
import { DownloadOutlined } from "@ant-design/icons"
import BlockOne from './blocks/blockOne';
import BlockSecond from './blocks/blockSecond';
import BlockThird from './blocks/blockThird';

const ShowData = () => {
    const resources = [
        {
            label: window.screen.width > 500 ? 'МФЙ ҳақида қўшимча маълумотлар' : 'блок 1',
            key: '1',
            children: <BlockOne />
        },
        {
            label: window.screen.width > 500 ? 'МФЙ даги ер тоифалари бўйича тақсимоти' : 'блок 2',
            key: '2',
            children: <BlockSecond />
        },
        {
            label: window.screen.width > 500 ? 'МФЙ даги ердан фойдаланувчи субьектлар тўғрисида маълумотлар' : 'блок 3',
            key: '3',
            children: <BlockThird />
        },
    ]
    return (
        <Tabs
            defaultActiveKey="1"
            type="card"
            size='medium'
            tabBarExtraContent={<Button shape='round' size='medium' type='primary' icon={<DownloadOutlined />} >{window.screen.width > 500 ? 'Эски версия' : ''}</Button>}
            items={resources}
        />
    );
};

export default ShowData;