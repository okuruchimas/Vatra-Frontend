import { Dispatch, SetStateAction, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export class Pagination {
  firstCardId = 0;
  lastCardId = 6;

  public paginate(
    members: Person[],
    setPostsToShow: Dispatch<SetStateAction<Person[]>>
  ) {
    const postsLength = members.length;
    this.firstCardId += 3;
    if (this.firstCardId >= postsLength) {
      this.firstCardId = this.firstCardId - postsLength;
    }
    if (this.firstCardId + 6 <= postsLength) {
      setPostsToShow(members.slice(this.firstCardId, this.firstCardId + 6));
    } else {
      this.lastCardId =
        postsLength - (postsLength - 6 + (postsLength - this.firstCardId));
      setPostsToShow([
        ...members.slice(this.firstCardId, postsLength),
        ...members.slice(0, this.lastCardId),
      ]);
    }
  }
}

export const OurTeamArray = [
  {
    name: "Артур Рожицький",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/9.png",
  },
  {
    name: "Тарас Волох",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/7.png",
  },
  {
    name: "Акім Драгомирецький",
    role: "Актор",
    superPower: "Фотограф",
    url: "/icons/ourTeam/10.png",
  },
  {
    name: "Дробот Іван",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/2.png",
  },
  {
    name: "Артем Вусик",
    role: "Режисер",
    superPower: "Актор",
    url: "/icons/ourTeam/3.png",
  },
  {
    name: "Ліза Прасолова",
    role: "Акторка-лялькарка",
    superPower: "",
    url: "/icons/ourTeam/6.png",
  },

  {
    name: "Артур Слісаренко",
    role: "Актор-лялькар",
    superPower: "",
    url: "/icons/ourTeam/5.png",
  },

  {
    name: "Світлана Мельник",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/8.png",
  },
  {
    name: "Олеся Стрельбіцька",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/11.png",
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
