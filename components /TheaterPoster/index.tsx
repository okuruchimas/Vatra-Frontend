import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import Performance from "./Performance";

export const TestArr = [
  {
    title: "Лютий",
    description:
      "«ЛЮТИЙ» — це простір, де не тільки словами вивільняється внутрішня боротьба, а й — рухами, музикою, звуком і світлом. Це перформований діалог і безпечне місця для кожного_ї, хто потребує бути не в самоті зі своїми почуттями. Це спільний пошук власної ідентичності в контексті війни, що є нашою реальністю нині.",
    type: "Перформативна вистава",
    date: "12.04",
    imgUrl: "/icons/poster/img1.png",
    link: "war",
  },
  {
    title: "Леся і Андрій зустрічаються у Львові",
    description:
      "Це історія двох дітей - Лесі та Андрія, котрі під час війни опинилися у Львові, який прихистив \n" +
      "їх від снарядів, що розриваються у їхніх рідних містах.\n" +
      "Познайомившись, вони розпочинають свої пригоди та сміливо допомагають країні боротися зі злом.",
    type: "лялькова вистава",
    date: "14.08",
    imgUrl: "/icons/poster/img2.png",
    link: "meting",
  },
  {
    title: "Як я познайомився з війною і майже вбив путіна",
    description:
      "\n" +
      "Вистава, є автобіографічною історією від першої особи, що поєднується із сюреалістично фантазійною лінією спроби вбивства путіна. \n" +
      "Це симбіоз аудіального театру з музичним \n" +
      "перфо-концертом; історія пригод і пошуків свого нового місця через втрату попереднього життя.\n" +
      "\n",
    type: "вистава–концерт",
    date: "11.06",
    imgUrl: "/icons/poster/img3.png",
    link: "kill-pupin",
  },
  {
    title: "Херсон Незламний",
    description:
      "Події розгортаються ніби в партизанському штабі, де оповідачі_ка ведуть дію, використовуючи історії людей, які жили_вуть у Херсонській області. Обшуки, знущання, вбивства, викрадення, зґвалтування, сльози на очах і в серці — це реалії нині, які щоденно кояться армією рф.",
    type: "вистава–читка",
    date: "04.22",
    imgUrl: "/icons/poster/img4.png",
    link: "herson",
  },
  {
    title: "Вона Війна",
    description:
      "Яким є жіночий досвід війни? Досвід кожної із нас, яку ви бачите в трамваї або в стрічці новин. Один\n" +
      " і той самий біль, один і той самий жах, нещадно встромлений у спину. Кожна з нас носить цей ніж \n" +
      "у спині та скільки є сил, можливостей бореться \n" +
      "за кожну спокійну хвилину",
    type: "моно–вистава ",
    date: "05.09",
    imgUrl: "/icons/poster/img5.png",
    link: "she-is-war",
  },
  {
    title: "Перший День Війни",
    description:
      "Перфоменс-рефлексія, створений у перші дні становлення театру Варта. Перфоменс-оповідання історій кожного_ої з нас у русі, слові, світлині чи музиці. Перфоменс-надія на те, що кожного дня ми стаємо на крок ближче до перемоги.",
    type: "лялькова вистава",
    date: "23.07",
    imgUrl: "/icons/poster/img6.png",
    link: "first-day",
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
            left={(index + 1) % 2}
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
  width: 100vw;
`;
const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2.4vh;
  color: #b5b5b5;
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
  margin-left: -1vw;
  color: #fff;
`;
