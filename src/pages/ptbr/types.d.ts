export type ApiTypes = {
  api: {
    id: string;
    page: [
      {
        id: string;
        images: string;
        content: string;
      }
    ];
    about: [
      {
        id: string;
        text: string;
      }
    ];
  };
};
