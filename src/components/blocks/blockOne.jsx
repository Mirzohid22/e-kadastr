import { Button, Table } from 'antd';
const columns = [
    {
        title: 'Ташкил топган йили*',
        dataIndex: 'tashkilTopganYili',
        key: 'tashkilTopganYili',
    },
    {
        title: 'Майдони',
        dataIndex: 'maydoni',
        key: 'maydoni',
    },
    {
        title: 'Электрон харитаси',
        dataIndex: 'eXaritasi',
        key: 'eXaritasi',
        render: (text) => <Button type='link' size='medium' >{text}</Button>,
    },

];
const data = [
    {
        key: '1',
        tashkilTopganYili: '1998 йил',
        maydoni: '383,19 га.',
        eXaritasi: 'Электрон харитаси	Lat: 41.026 - Long: 69.405',
    },
];
const BlockOne = () => {
    return (
        <Table
            size='middle'
            title={() => "МФЙ ҳақида қўшимча маълумотлар"}
            columns={columns}
            dataSource={data}
        />);
}
export default BlockOne;