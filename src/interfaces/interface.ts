export interface IMenu {
  id: number;
  icon: any;
  title: string;
  link: string;
}

export interface INavigation {
  menu: IMenu[];
}
