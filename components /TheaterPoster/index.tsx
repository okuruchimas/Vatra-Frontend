import styled from "@emotion/styled";
import BigTitle from "../layout/BigTitle";
import Performance from "./Performance";

const TestArr = [
  {
    title: "Леся і Андрій зустрічаються у Львові",
    description:
      "<p>Сміх, взаємопідтримка, блиск в очах і щирість у серцях завжди надихають жити далі, коли здається, що все йде шкереберть і стає догори дриґом.</p>" +
      "<p>Це історія двох дітей - Лесі та Андрія, котрі під час війни опинилися у Львові, який прихистив їх від снарядів, що розриваються у їхніх рідних містах.</p>" +
      "<p>Познайомившись, вони розпочинають свої пригоди та сміливо допомагають країні боротися зі злом.</p>",
    type: "лялькова вистава в жанрі сучасної казки на 1 дію (50 хвилин)",
    date: "22.04",
    imgUrl: "/icons/img1.png",
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
  },
];

const TheaterPoster = () => {
  return (
    <Wrap id="poster">
      <BigTitle textBefore="Наші" textAfter="вистави" />
      <Description>
        Зустрівшись під одним дахом, ми зрозуміли, що наші цінности й думки
        збігаються, та через рефлексію створили першу перфомативну виставу.
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
  padding: 0 6vw;
  width: 100%;
`;
const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2vh;
  color: #909090;
  width: 48vw;
  padding-top: 2vh;
`;
const PerformancesWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #ffffff;
  margin-top: 12vh;
`;
