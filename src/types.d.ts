export interface ParamsLng {
  lng: string;
}

export interface CardProjectprops {
  title: string;
  description: string;
  libraries: ILibrary[];
  links: ILinks;
  t?: any;
}

export interface ILibrary {
  icon?: JSX.Element;
  iconLinkImage?: string;
  libraryName: string;
}

export interface ILinks {
  gitHubLink?: string;
  livelink: string;
}
