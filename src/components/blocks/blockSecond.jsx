import { Table, Tag } from 'antd';
const columns = [
    {
        title: '№',
        width: '40px',
        // fixed: 'left',
        render: (record) => +record.key
    },
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
        width: window.screen.width > 400 ? '700px' : '200px',
        // render: (text) => {text}
    },
    {
        title: 'Майдони, га.',
        dataIndex: 'value',
        key: 'value',
        // width: 25,
        // fixed: 'right',
        render: (text) => text === 'Мавжуд эмас' ? <Tag color={'error'} >{text}</Tag> : text
        // render: (text, record) => record.name === 'Электрон харитаси' ? <Button type='link' size='medium' >{text}</Button> : `${text}`,
    },
]
const data = [
    {
        key: '1',
        name: 'Қишлоқ хўжалигига мўлжалланган ерлар',
        value: '267,71',
    },
    {
        key: '2',
        name: 'Аҳоли пунктларининг ерлари',
        value: '74,73',
    },
    {
        key: '3',
        name: 'Саноат, транспорт, алоқа, мудофаа ва бошқа мақсадларга мўлжалланган ерлар',
        value: '14,51',
    },
    {
        key: '4',
        name: 'Табиатни муҳофаза қилиш , соғломлаштириш ва рекреация мақсадларига мўлжалланган ерлар',
        value: 'Мавжуд эмас',
    },
    {
        key: '5',
        name: 'Тарихий-маданий аҳамиятга молик ерлар',
        value: 'Мавжуд эмас',
    },
    {
        key: '6',
        name: 'Ўрмон фонди ерлари',
        value: '0,72',
    },
    {
        key: '7',
        name: 'Сув фонди ерлари',
        value: '24,15',
    },
    {
        key: '8',
        name: 'Заҳира ерлар',
        value: '1,47',
    },
];

const BlockSecond = () => {
    return (
        <Table
            bordered
            scroll={{ x: 800, y: 400 }}
            size='middle'
            title={() => "МФЙ ер майдонининг ер тоифалари бўйича тақсимоти"}
            columns={columns}
            dataSource={data}
        />);
}
export default BlockSecond;