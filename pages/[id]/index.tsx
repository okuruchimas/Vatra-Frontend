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

  console.log(repertoire, 1);
  if (!repertoire) return;
  return (
    <Wrap>
      <RepertoirePreview
        title={repertoire.title}
        type={repertoire.type}
        date={repertoire.date}
      />
      {repertoire.title}
    </Wrap>
  );
};

export default Repertoire;

const Wrap = styled.div`
  padding: 10vh 6vw;
  width: 100vw;
`;
