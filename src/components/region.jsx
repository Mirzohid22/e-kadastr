import { useState } from 'react';
import { Divider, Form, Select } from 'antd';
import ShowData from './showData';


const Region = () => {
    const [componentDisabled, setComponentDisabled] = useState(true)
    const [componentDisabledMassive, setComponentDisabledMassive] = useState(true)
    const [componentDisabledMFY, setComponentDisabledMFY] = useState(true)
    const [choosen, setChoosen] = useState(null)
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const regions = [
        {
            value: 'Қорақалпоғистон Республикаси',
            label: 'Қорақалпоғистон Республикаси',
        },
        {
            value: 'Андижон',
            label: 'Андижон',
        },
        {
            value: 'Бухоро',
            label: 'Бухоро',
        },
        {
            value: 'Жиззах',
            label: 'Жиззах',
        },
        {
            value: 'Қашқадарё',
            label: 'Қашқадарё',
        },
        {
            value: 'Навоий',
            label: 'Навоий',
        },
        {
            value: 'Наманган ',
            label: 'Наманган ',
        },
        {
            value: 'Самарқанд',
            label: 'Самарқанд',
        },
        {
            value: 'Сурхондарё',
            label: 'Сурхондарё',
        },
        {
            value: 'Сирдарё',
            label: 'Сирдарё',
        },
        {
            value: 'Тошкент',
            label: 'Тошкент',
        },
        {
            value: 'Фарғона',
            label: 'Фарғона',
        },
        {
            value: 'Хоразм',
            label: 'Хоразм',
        },
        {
            value: 'Тошкент шаҳри',
            label: 'Тошкент шаҳри',
        },

    ]
    const districts = [
        {
            value: 'Оққўрғон',
            label: 'Оққўрғон'
        },
        {
            value: 'Охангарон',
            label: 'Охангарон'
        },
        {
            value: 'Бекобод',
            label: 'Бекобод'
        },
        {
            value: 'Бўстонлиқ',
            label: 'Бўстонлиқ'
        },
        {
            value: 'Бўка',
            label: 'Бўка'
        },
        {
            value: 'Зангиота',
            label: 'Зангиота'
        },
        {
            value: 'Қибрай',
            label: 'Қибрай'
        },
        {
            value: 'Қуйи чирчиқ',
            label: 'Қуйи чирчиқ'
        },
        {
            value: 'Паркент',
            label: 'Паркент'
        },
        {
            value: 'Пскент',
            label: 'Пскент'
        },
        {
            value: 'Ўрта Чирчиқ',
            label: 'Ўрта Чирчиқ'
        },
        {
            value: 'Чиноз',
            label: 'Чиноз'
        },
        {
            value: 'Юқори чирчиқ',
            label: 'Юқори чирчиқ'
        },
        {
            value: 'Янгийўл',
            label: 'Янгийўл'
        },
        {
            value: 'Тошкент',
            label: 'Тошкент'
        },
        {
            value: 'Олмалиқ ш.',
            label: 'Олмалиқ ш.'
        },
        {
            value: 'Ангрен ш.',
            label: 'Ангрен ш.'
        },
        {
            value: 'Охангарон ш.',
            label: 'Охангарон ш.'
        },
        {
            value: 'Бекобод ш.',
            label: 'Бекобод ш.'
        },
        {
            value: 'Чирчиқ ш.',
            label: 'Чирчиқ ш.'
        },
        {
            value: 'Янгийўл ш.',
            label: 'Янгийўл ш.'
        },
        {
            value: 'Нурафшон ш.',
            label: 'Нурафшон ш.'
        },
    ]
    const massives = [
        {
            value: 'Ўрта чирчиқ',
            label: 'Ўрта чирчиқ'
        },
        {
            value: 'Ким пен хва',
            label: 'Ким пен хва'
        },
        {
            value: 'Бахт',
            label: 'Бахт'
        },
        {
            value: 'Охунбобоев',
            label: 'Охунбобоев'
        },
        {
            value: 'Дўстлик',
            label: 'Дўстлик'
        },
        {
            value: 'Ўртасарой',
            label: 'Ўртасарой'
        },
        {
            value: 'Қорасув',
            label: 'Қорасув'
        },
        {
            value: 'Янги турмуш',
            label: 'Янги турмуш'
        },
        {
            value: 'Кончи',
            label: 'Кончи'
        },
        {
            value: 'А.Навоий',
            label: 'А.Навоий'
        },
        {
            value: 'Тош ДАУ',
            label: 'Тош ДАУ'
        },
        {
            value: 'Гулистон',
            label: 'Гулистон'
        },
        {
            value: 'Роватак',
            label: 'Роватак'
        },
        {
            value: 'Истиқбол',
            label: 'Истиқбол'
        },
        {
            value: 'Ўзбекистон',
            label: 'Ўзбекистон'
        },
        {
            value: 'Ҳақиқат йўли',
            label: 'Ҳақиқат йўли'
        },
        {
            value: 'А.Икромов',
            label: 'А.Икромов'
        },
        {
            value: 'Қайтмас',
            label: 'Қайтмас'
        },
        {
            value: 'Соф оқолтин',
            label: 'Соф оқолтин'
        },
        {
            value: 'Янги тўлқин',
            label: 'Янги тўлқин'
        },
    ]
    const mfys = [
        {
            value: 'Қайтмас МФЙ',
            label: 'Қайтмас МФЙ'
        },
        {
            value: 'Байрамкўл МФЙ',
            label: 'Байрамкўл МФЙ'
        },
        {
            value: 'Тожиковул МФЙ',
            label: 'Тожиковул МФЙ'
        }
    ]
    return (
        <div>

            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                // onValuesChange={onFormLayoutChange}
                // disabled={componentDisabled}
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Вилоят">
                    <Select
                        showSearch
                        placeholder="Вилоятни танланг"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        onSelect={() => setComponentDisabled(false)}
                        options={regions}
                    />
                </Form.Item>
                <Form.Item label="Туман">
                    <Select
                        showSearch
                        placeholder="Туманни танланг"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        disabled={componentDisabled}
                        onSelect={() => setComponentDisabledMassive(false)}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={districts}
                    />
                </Form.Item>
                <Form.Item label="Массив">
                    <Select
                        showSearch
                        placeholder="Массивни танланг"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        onSelect={() => setComponentDisabledMFY(false)}
                        disabled={componentDisabledMassive}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={massives}
                    />
                </Form.Item>
                <Form.Item label="МФЙ">
                    <Select
                        showSearch
                        placeholder="Массивни танланг"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        onSelect={(target) => setChoosen(target)}
                        disabled={componentDisabledMFY}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={mfys}
                    />
                </Form.Item>
            </Form>
            <Divider />
            {choosen === "Қайтмас МФЙ" && < ShowData />}
        </div>
    );
}
export default Region;