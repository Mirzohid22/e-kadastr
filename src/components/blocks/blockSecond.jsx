import { Table } from 'antd';
const columns = [
    {
        title: 'Қишлоқ хўжалигига мўлжалланган ерлар',
        dataIndex: 'xujalikYerlar',
        key: 'xujalikYerlar',
    },
    {
        title: 'Аҳоли пунктларининг ерлари',
        dataIndex: 'punktYerlari',
        key: 'punktYerlari',
    },
    {
        title: 'Саноат, транспорт, алоқа, мудофаа ва бошқа мақсадларга мўлжалланган ерлар',
        dataIndex: 'sanoatYerlari',
        key: 'sanoatYerlari',
        // render: (text) => <Button type='link' size='medium' >{text}</Button>,
    },
    {
        title: 'Табиатни муҳофаза қилиш , соғломлаштириш ва рекреация мақсадларига мўлжалланган ерлар',
        dataIndex: 'tabiatYerlari',
        key: 'tabiatYerlari'
    },
    {
        title: 'Тарихий-маданий аҳамиятга молик ерлар',
        dataIndex: 'tarixYerlari',
        key: 'tarixYerlari'
    },
    {
        title: 'Ўрмон фонди ерлари',
        dataIndex: 'urmonYerlari',
        key: 'urmonYerlari'
    },
    {
        title: 'Сув фонди ерлари',
        dataIndex: 'suvYerlari',
        key: 'suvYerlari'
    },
    {
        title: 'Заҳира ерлар',
        dataIndex: 'zaxiraYerlari',
        key: 'zaxiraYerlari'
    }

];
const data = [
    {
        key: '1',
        xujalikYerlar: '267,71',
        punktYerlari: '74,73',
        sanoatYerlari: '14,51',
        tabiatYerlari: 'Мавжуд эмас',
        tarixYerlari: 'Мавжуд эмас',
        urmonYerlari: '0,72',
        suvYerlari: '24,15',
        zaxiraYerlari: '1,47'
    },
];
const BlockSecond = () => {
    return (
        <Table
            size='middle'
            title={() => "МФЙ ер майдонининг ер тоифалари бўйича тақсимоти"}
            columns={columns}
            dataSource={data}
        />);
}
export default BlockSecond;