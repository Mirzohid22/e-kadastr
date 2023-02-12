import { Typography, Divider } from "antd"

const { Title, Paragraph, Text } = Typography

const About = () => {
    return (
        <Typography>
            <Title level={2}>МЭП иловаси ҳақида маълумот</Title>
            <Paragraph style={{ fontSize: 16 }} >
                <Text strong style={{ fontSize: 16 }}>“Маҳалла электрон паспорти”</Text> веб ахборот тизими доирасида жисмоний ва юридик шахсларга масофадан туриб электрон хизматларни кўрсатиш назарда тутилган.
                <Divider />
                {/* <br /> */}
                Иқтисодиёт ва молия вазирлиги ҳузуридаги Кадастр агентлиги томонидан <Text strong style={{ fontSize: 16 }} >“Маҳалла электрон паспорти”</Text> нинг йўлга қўйилиши натижасида маҳалла фуқаролар йиғинлари кесимида ер ахборот тизимининг вилоятдаги мавжуд ер ресурслардан фойдаланишнинг назорат қилиш, аҳолига тегишли ер участкалари ҳақидаги маълумотларни шакллантиришга хизмат қилади.
                {/* <br /> */}
                <Divider />
                Шу билан бирга, маълумотлар актуаллигини таъминлаш мақсадида <Text strong style={{ fontSize: 16 }}>“Маҳалла электрон паспорти”</Text> мобил ахборот тизими Давлат кадастрлари палатасининг ахборот тизимлари билан интеграция қилиш тавсия этилади.
                {/* <br /> */}
                <Divider />
                Мазкур <Text strong style={{ fontSize: 16 }}>“Маҳалла электрон паспорти”</Text> веб иловасининг ишлаш тамойили очиқлик сиёсатини юритишга, ердан фойдаланишга оид жараёнларни максимал тарзда рақамлаштиришга қаратилган.
            </Paragraph>
        </Typography >
    )
}
export default About   