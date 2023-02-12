import { Button, Table } from 'antd';

const columns = [
    {
        title: '№',
        width: '40px',
        render: (record) => +record.key
    },
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
        width: window.screen.width > 500 ? '400px' : '200px',
        // render: (text) => {text}
    },
    {
        title: '',
        dataIndex: 'value',
        key: 'value',
        // width: '200px',
        render: (text, record) => record.name === 'Электрон харитаси' ? <Button type='link' size='medium' >{text}</Button> : `${text}`,

    },

];

const data = [
    {
        key: '1',
        name: 'Ташкил топган йили*',
        value: '1998 йил',
    },
    {
        key: '2',
        name: 'Майдони',
        value: '383,19 га.'
    },
    {
        key: '3',
        name: 'Электрон харитаси',
        value: 'Электрон харитаси	Lat: 41.026 - Long: 69.405'
    }
];
const BlockOne = () => {
    return (
        <Table
            style={{ minHeight: 800 }}
            bordered
            size='middle'
            title={() => "МФЙ ҳақида қўшимча маълумотлар"}
            scroll={{ x: 1000, y: 800 }}
            columns={columns}
            dataSource={data}
        />);
}
export default BlockOne;