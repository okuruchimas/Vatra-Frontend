import { Dispatch, SetStateAction } from "react";

export class Pagination {
  firstCardId = 0;

  public paginate(
    members: Person[],
    setPostsToShow: Dispatch<SetStateAction<Person[]>>,
    isDesktop: boolean
  ) {
    const postsLength = members.length;
    const step = isDesktop ? 6 : 4;
    let lastCardId = isDesktop ? 6 : 4;

    if (isDesktop) {
      this.firstCardId += 3;
    } else {
      this.firstCardId += 2;
    }

    if (this.firstCardId >= postsLength) {
      this.firstCardId = this.firstCardId - postsLength;
    }

    if (this.firstCardId + step <= postsLength) {
      setPostsToShow(members.slice(this.firstCardId, this.firstCardId + step));
    } else {
      lastCardId =
        postsLength - (postsLength - step + (postsLength - this.firstCardId));
      setPostsToShow([
        ...members.slice(this.firstCardId, postsLength),
        ...members.slice(0, lastCardId),
      ]);
    }
  }
}

export const OurTeamArray = [
  {
    name: "Артур Рожицький",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/9.webp",
  },
  {
    name: "Тарас Волох",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/7.webp",
  },
  {
    name: "Акім Драгомирецький",
    role: "Актор",
    superPower: "Фотограф",
    url: "/icons/ourTeam/10.webp",
  },
  {
    name: "Дробот Іван",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/2.webp",
  },
  {
    name: "Артем Вусик",
    role: "Режисер",
    superPower: "Актор",
    url: "/icons/ourTeam/3.webp",
  },
  {
    name: "Ліза Прасолова",
    role: "Акторка-лялькарка",
    superPower: "",
    url: "/icons/ourTeam/6.webp",
  },

  {
    name: "Артур Слісаренко",
    role: "Актор-лялькар",
    superPower: "",
    url: "/icons/ourTeam/5.webp",
  },

  {
    name: "Світлана Мельник",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/8.webp",
  },
  {
    name: "Олеся Стрельбіцька",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/11.webp",
  },
];

export interface Person {
  name: string;
  role: string;
  superPower: string;
  url: string;
}

export interface OurTeamProps {
  members: Person[];
}
