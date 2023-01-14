export type ApiTypes = {
  api: {
    id: string;
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
    page: [
      {
        id: string;
        images: string;
        content: string;
      }
    ];
  };

  abt: {
    about: [
      {
        id: string;
        text: string;
      }
    ];
  };
};
