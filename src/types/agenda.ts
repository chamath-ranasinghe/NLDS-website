interface AgendaItem {
  time: string;
  title: string;
}

export interface AgendaItemNormal extends AgendaItem {}

export interface AgendaItemParallel extends AgendaItem {
  parallel: {
    title: string;
  }[];
}

export interface AgendaContent {
  day1: (AgendaItemNormal | AgendaItemParallel)[];
  day2: (AgendaItemNormal | AgendaItemParallel)[];
  day3: (AgendaItemNormal | AgendaItemParallel)[];
}
