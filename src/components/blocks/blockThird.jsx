import { Table } from 'antd';
const columns = [
    {
        title: '№',
        render: (record) => +record.key
    },
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'сони',
        dataIndex: 'soni',
        key: 'soni',
    },
    {
        title: 'Майдони, га',
        dataIndex: 'maydoni',
        key: 'maydoni',
    },

];
const data = [
    {
        key: '1',
        name: 'Томорқа ЕФСлар',
        soni: '465',
        maydoni: '74,63'
    },
    {
        key: '2',
        name: 'Деҳқон хўжаликлари',
        soni: '3',
        maydoni: '25,50'
    },
    {
        key: '3',
        name: 'Фермер хўжаликлари',
        soni: '5',
        maydoni: '242,21'
    },
    {
        key: '4',
        name: 'Савдо объектлари ЕФСлари',
        soni: '1',
        maydoni: '0,0046'
    },
    {
        key: '5',
        name: 'Тиббиёт муассасалри ЕФСлари',
        soni: '1',
        maydoni: '0,50'
    },
    {
        key: '6',
        name: 'Ижтимоий объектлар ЕФСлари',
        soni: '5',
        maydoni: '4,10'
    },
    {
        key: '7',
        name: 'МФЙ идораси',
        soni: '1',
        maydoni: '0,0046'
    },
    {
        key: '8',
        name: 'Ўзга ЕФСлар',
        soni: '65',
        maydoni: '34,77'
    },
    {
        key: '9',
        name: 'Туман заҳира ер участкалари',
        soni: '2',
        maydoni: '1,47'
    },
    {
        key: '10',
        name: 'Давлат заҳира ерлари',
        soni: '-',
        maydoni: '-'
    },
];
const BlockThird = () => {
    return (
        <Table
            bordered
            size='middle'
            title={() => "МФЙ даги ердан фойдаланувчи субьектлар тўғрисида маълумотлар "}
            columns={columns}
            dataSource={data}
        />);
}
export default BlockThird;