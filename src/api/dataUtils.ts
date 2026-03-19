import { fallBackImg } from "@/constants/fallbacks";
import { keywordSearch, getArtworkData } from "./dataFetcher";
import { Artwork } from "@/types/types";

export function getImgUrl(imgId: string) {
  return `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`;
}

export const getRandomImgByCategories = async (categories: string[]) => {
  const randomImgArr = categories.map(async (category) => {
    let randomImg = undefined;
    let amtTries = 0;
    while (!randomImg && amtTries < 3) {
      amtTries++;
      const idArr = await keywordSearch(
        category,
        Math.ceil(Math.random() * 50),
      );
      const imgArr: Artwork[] = await getArtworkData(idArr);
      randomImg = imgArr.find(
        (img) =>
          img.is_public_domain === true &&
          img.artwork_type_title === "Painting",
      );
      if (!randomImg && amtTries === 3) return fallBackImg();
    }

    if (amtTries < 3) return randomImg;
    return fallBackImg();
  });
  return await Promise.all(randomImgArr);
};

export const getOnlyPaintings = (artworks: Artwork[]) => {
  return artworks.filter(
    (artwork) => artwork.artwork_type_title === "Painting",
  );
};

export const removeTags = (str: string) => {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
  //Copied the regexp from https://dev.to/dailydevtips1/javascript-removing-html-tags-4ila
};
