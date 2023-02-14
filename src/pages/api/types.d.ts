export type ApiTypes = {
  about: {
    id: string;
    text: string;
    image: string;
    translation: string;
    portifolioId: string;
  }[];

  language: {
    id: string;
    name: string;
    images: string;
  }[];
  project: {
    id: string;
    name: string;
    images: string;
    icon: string;
    languages: string;
    description: string;
    url: string;
    urlRepository: string;
  }[];
  certificate: {
    id: string;
    name: string;
    images: string;
    description: string;
  }[];
  contact: {
    text: string;
    curriculum: string;
  };
};
