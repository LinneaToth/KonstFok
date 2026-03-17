import { KeywordData, Artwork } from "@/types/types";

export const keywordSearch = async (keyword: string, from?: number) => {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${keyword}${
        from ? `&page=${from}&is_public_domain=true` : ""
      }`,
    );

    if (!response.ok)
      throw new Error(
        "Search failed. This seems to be the problem: " + response.status,
      );

    const data: KeywordData = await response.json();

    return data.data.map((data) => data.id);
  } catch (e) {
    if (e instanceof Error && e.message) console.error(e.message);
    return [];
  }
};

export const getArtworkData = async (
  id: number | number[],
): Promise<Artwork[]> => {
  const searchId = Array.isArray(id) ? id.join(",") : id; //If id is a single number, just keep as is. If it is an array, reformat it to a string that can be used to call the api endpoint below

  const artworkDataFetcher = async () => {
    try {
      const imageRes = await fetch(
        `https://api.artic.edu/api/v1/artworks?ids=${searchId}&fields=id,title,image_id,is_public_domain,description,artwork_type_title,artist_title`,
      );
      if (!imageRes.ok)
        throw new Error(
          "Image retrieval failed. This seems to be the problem: " +
            imageRes.status,
        );
      const imageData = await imageRes.json();
      return Array.isArray(id) ? imageData.data : [imageData.data[0]];
    } catch (e) {
      if (e instanceof Error && e.message) console.error(e.message);
      return [];
    }
  };
  return await artworkDataFetcher();
};
