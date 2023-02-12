import React from 'react';
import { Button, Tabs } from 'antd';
import { DownloadOutlined } from "@ant-design/icons"
import BlockOne from './blocks/blockOne';
import BlockSecond from './blocks/blockSecond';
import BlockThird from './blocks/blockThird';

const ShowData = () => {
    const resources = [
        {
            label: 'МФЙ ҳақида қўшимча маълумотлар',
            key: '1',
            children: <BlockOne />
        },
        {
            label: 'МФЙ даги ер тоифалари бўйича тақсимоти',
            key: '2',
            children: <BlockSecond />
        },
        {
            label: 'МФЙ даги ердан фойдаланувчи субьектлар тўғрисида маълумотлар ',
            key: '3',
            children: <BlockThird />
        },
    ]
    return (
        <Tabs
            defaultActiveKey="1"
            type="card"
            size='medium'
            tabBarExtraContent={<Button shape='round' size='medium' type='primary' icon={<DownloadOutlined />} >Эски версия</Button>}
            items={resources}
        />
    );
};

export default ShowData;