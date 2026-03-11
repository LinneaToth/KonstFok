type ArtworkData = {
  _score: number;
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  timestamp: string;
};

type KeywordData = {
  data: ArtworkData[];
};

type Artwork = {
  id: number;
  title: string;
  image_id: string;
  is_public_domain: boolean;
  iiif_url: string;
  website_url: string;
  description: string;
};

export const keywordSearch = async (keyword: string) => {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${keyword}`,
    );

    if (!response.ok)
      throw new Error(
        "Search failed. This seems to be the problem: " + response.status,
      );

    const data: KeywordData = await response.json();

    return data.data.map((data) => data.id);
  } catch (e) {
    if (e instanceof Error && e.message) return e.message;
    return "Something went wrong";
  }
};

export const imageSearch = async (idArr: number[]) => {
  //2do if time, refactor do it all simultanously with promise.all
  const imgArr: Artwork[] = [];

  const getImg = async (id: number): Promise<Artwork | null> => {
    try {
      const imageRes = await fetch(
        `https://api.artic.edu/api/v1/artworks?ids=${id}&fields=id,title,image_id,is_public_domain,iiif_url,website_url,description`,
      );
      if (!imageRes.ok)
        throw new Error(
          "Image retrieval failed. This seems to be the problem: " +
            imageRes.status,
        );
      const imageData = await imageRes.json();
      return imageData.data;
    } catch (e) {
      if (e instanceof Error && e.message) console.error(e.message);
      return null;
    }
  };

  for (let i = 0; i < idArr.length; i++) {
    //Add the fields I need for my image type objects
    const img: Artwork | null = await getImg(idArr[i]);
    if (img && img.is_public_domain) imgArr.push(img);
  }

  return imgArr;
};
