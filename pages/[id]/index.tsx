import styled from "@emotion/styled";
import { TestArr } from "../../components /TheaterPoster";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RepertoireProps } from "../../components /TheaterPoster/Performance";
import RepertoirePreview from "../../components /RepertoirePreview";

const Repertoire = () => {
  const {
    query: { id },
  } = useRouter();

  const [repertoire, setRepertoire] = useState<RepertoireProps | undefined>(
    undefined
  );

  useEffect(() => {
    setRepertoire(TestArr.find(({ link }) => link === id));
  }, [id]);

  if (!repertoire) return;
  return (
    <Wrap>
      <RepertoirePreview
        title={repertoire.title}
        type={repertoire.type}
        date={repertoire.date}
      />
      <DetailWrap>
        <RedTitle> Репертуар</RedTitle>
        <RepertoireDescription>
          <p>
            -Ну ти ж повернешся, Лесю? -Обовязково повернуся, Андрію..! -А коли?
            -Ох, не знаю..
          </p>
          <p>
            Чому Леся так скоро їде, хоча вони з Андрієм тільки зустрілись?
            Війна змушує частіше розставатись, але палкіше любити. Діти
            виражають почуття чесніше, взаємодіють щиріше. Й ще: наша лялькова
            вистава про це.
          </p>
          <p>
            Маленькі, але сміливі серцем Леся і Андрій хочуть допомогти країні,
            й тому виконують різні завдання, які трапляються на їхньому шляху.
            Вони відчувають свої силу, впевненість дужче, коли знаходяться
            разом.
          </p>
          <p>
            Підтримка, внутрішня радість і бажання допомогти вколисуються у
            душах наших героїв_їнь. Епізодичних або головних.
          </p>
          <p>
            Це наша добра історія Лесі та Андрія, сповнена пригод, взаємності,
            щемливості та надії з порошинками чарівності.
          </p>
          <p>
            *У виставі лунає жива музика <br />
            **Після вистави є можливість придбати її мерч - авторську пєсу
          </p>
        </RepertoireDescription>
      </DetailWrap>
      <TeamInfo>
        <RedText>Режисер:</RedText> <WhiteText> Артем Вусик</WhiteText>
        <RedText>Актори:</RedText>
        <WhiteText>
          Андрій — Антон Репях Леся,
          <br /> бабуся Наталя — Ліза Прасолова Оповідач,
          <br />
          Яким, коти, родина - Артур Слісаренко
        </WhiteText>
        <RedText>Художники:</RedText>{" "}
        <WhiteText>
          Режисер — Артем Вусик <br />
          Андрій — Антон Репях Леся, <br />
          бабуся Наталя — Ліза Прасолова <br />
          Оповідач, Яким, коти, родина - Артур Слісаренко <br />
          Виготовлення декорацій — Антон Репях, <br />
        </WhiteText>
        <DateText>Премєра — 21 травня 2022</DateText>
      </TeamInfo>
    </Wrap>
  );
};

export default Repertoire;

const Wrap = styled.div`
  padding: 9vh 6vw;
  width: 100vw;
`;
const RedTitle = styled.span`
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 10vh;
  color: #b11212;
`;
const DetailWrap = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RepertoireDescription = styled.div`
  font-size: 2.4vh;
  width: 50%;
  border-bottom: 1.6px solid white;
  margin-bottom: 4vh;
`;

const TeamInfo = styled.div`
  margin-left: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const RedText = styled.span`
  font-family: "namu-1400";
  font-size: 3.6vh;
  color: #b11212;
  margin-bottom: 2vh;
`;
const WhiteText = styled.span`
  font-family: "namu-pro";
  font-size: 2.8vh;
  margin-bottom: 2vh;
`;

const DateText = styled.span`
  font-family: "namu-pro";
  font-size: 3.2vh;
  margin-top: 2.8vh;
`;
