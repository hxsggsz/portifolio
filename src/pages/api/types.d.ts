export type ApiTypes = {
  firstPage: {
    partOne: {
      id: string;
      images: string;
      content: string;
    };
    partTwo: {
      id: string;
      images: string;
      content: string;
    };
    partThree: {
      id: string;
      images: string;
      content: string;
    };
  };

  portifolio: {
    about: {
      id: string;
      text: string;
      translation: string;
      portifolioId: string;
    }[];
    language: {
      id: string;
      name: string;
      images: string;
    }[];
  };
};

// declare module namespace {
//   export interface

//   export interface Project {
//     id: string;
//     url: string;
//     urlRepository: string;
//     name: string;
//     images: string;
//     description: string;
//     translation: string;
//     languages: string;
//     createdAt: Date;
//     portifolioId: string;
//   }

//   export interface Language {
//     id: string;
//     name: string;
//     images: string;
//     translation: string;
//     createdAt: Date;
//     portifolioId: string;
//   }

//   export interface Certificate {
//     id: string;
//     name: string;
//     images: string;
//     description: string;
//     translation: string;
//     createdAt: Date;
//     portifolioId: string;
//   }

//   export interface RootObject {
//     id: string;
//     page: Page[];
//     about: About[];
//     project: Project[];
//     language: Language[];
//     certificate: Certificate[];
//   }
// }
