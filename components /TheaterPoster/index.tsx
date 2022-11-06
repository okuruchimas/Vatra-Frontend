import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import Performance from "./Performance";

export const TestArr = [
  {
    title: "Леся і Андрій зустрічаються у Львові",
    description:
      "<p>Сміх, взаємопідтримка, блиск в очах і щирість у серцях завжди надихають жити далі, коли здається, що все йде шкереберть і стає догори дриґом.</p>" +
      "<p>Це історія двох дітей - Лесі та Андрія, котрі під час війни опинилися у Львові, який прихистив їх від снарядів, що розриваються у їхніх рідних містах.</p>" +
      "<p>Познайомившись, вони розпочинають свої пригоди та сміливо допомагають країні боротися зі злом.</p>",
    type: "лялькова вистава в жанрі сучасної казки на 1 дію (50 хвилин)",
    date: "22.04",
    imgUrl: "/icons/img1.png",
    link: "meting",
  },
  {
    title: "Перший день війни",
    description:
      "<p>Перфоманс-рефлексія, створений у перші дні становлення театру Варта як такого, митцями й мисткинями з різних міст України, що опинились у Львові під час війни.</p>" +
      "<p>Перфоменс-оповідання історій кожного_ої з нас у русі, слові, світлині чи музиці.</p>" +
      "<p>Перфоменс-надія на те, що кожного дня ми стаємо на крок ближче до перемоги</p>",
    type: "Перфоманс-блуканина на 1 дію (50 хвилин)",
    date: "11.06",
    imgUrl: "/icons/img2.png",
    link: "first-day",
  },
  {
    title: "Як я познайомився з війною і майже вбив путіна",
    description:
      "<p>Сміх, взаємопідтримка, блиск в очах і щирість у серцях завжди надихають жити далі, коли здається, що все йде шкереберть і стає догори дриґом.</p>" +
      "<p>Це історія двох дітей - Лесі та Андрія, котрі під час війни опинилися у Львові, який прихистив їх від снарядів, що розриваються у їхніх рідних містах.</p>" +
      "<p>Познайомившись, вони розпочинають свої пригоди та сміливо допомагають країні боротися зі злом.</p>",
    type: "лялькова вистава в жанрі сучасної казки на 1 дію (50 хвилин)",
    date: "22.04",
    imgUrl:
      "https://images.wallpaperscraft.ru/image/single/vodopad_reka_raznotsvetnyj_kamni_96301_1920x1080.jpg",
    link: "history",
  },
];

const TheaterPoster = () => {
  return (
    <Wrap id="poster">
      <RedTitle text="що ми робимо?" />
      <Title>вистави</Title>
      <Description>
        Зустрівшись під одним дахом, ми зрозуміли, що наші цінності й думки
        збігаються, та через рефлексію створили виставу “Перший День Війни”.
        <br />
        Але на цьому ми не зупинились і створили повноційнний театр, в якому ми
        говоримо про всі важливі думки, що дивуть в наших головах.
      </Description>
      <PerformancesWrap>
        {TestArr.map((performance, index) => (
          <Performance
            key={index}
            title={performance.title}
            description={performance.description}
            type={performance.type}
            date={performance.date}
            imgUrl={performance.imgUrl}
            link={performance.link}
          />
        ))}
      </PerformancesWrap>
    </Wrap>
  );
};

export default TheaterPoster;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14vh 4vw 0;
  width: 100%;
`;
const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2vh;
  color: #909090;
  width: 36vw;
  padding: 8vh 4vw 0 0;
  margin-left: auto;
`;
const PerformancesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12vh;
`;
const Title = styled.span`
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 24vh;
  color: #fff;
`;
