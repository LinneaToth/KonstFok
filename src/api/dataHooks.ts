//custom hook, to avoid repetitive use of useEffect with the exact same functionality and pattern in different places (timersetup & imagetimer)

import { useState, useEffect } from "react";
import { getImgUrl } from "@/api/dataUtils";
import { getArtworkData } from "@/api/dataFetcher";

export const useArtworkImageUrl = (
  artworkId: number,
  setError: (arg: boolean) => void,
) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    const getArtwork = async () => {
      if (artworkId) {
        setError(false);
        const [artworkData] = await getArtworkData(artworkId);
        if (artworkData?.image_id) {
          setImgUrl(getImgUrl(artworkData.image_id));
        }
      } else {
        setError(true);
      }
    };
    getArtwork();
  }, [artworkId]);

  return imgUrl;
};
