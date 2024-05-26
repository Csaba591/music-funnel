import { SongResultModel } from "../models";

const results: SongResultModel[] = [
  {
    id: "a",
    title: "Scary Monsters And Nice Sprites",
    artists: ["Skrillex"],
    length: 248,
    imageUrl:
      "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe4f4e332134c2b175e59a6c0aa01e214.1000x1000x1.jpg",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=ZBJjOvQqW70",
  },
  {
    id: "b",
    title: "Lies",
    artists: ["MARINA"],
    length: 226,
    imageUrl:
      "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fc65124d356c7af135715b413f4f63f48.1000x1000x1.png",
    source: "spotify",
    url: "https://open.spotify.com/track/64f5bf2jyAkrsucnG9FXot?si=322b2d942dc3440d",
  },
];

export function querySongs(query: string): SongResultModel[] {
  console.log(query);

  return results.filter((result) => {
    const queryLower = query.toLocaleLowerCase();
    return (
      result.title.toLocaleLowerCase().includes(queryLower) ||
      result.artists.some((artist) =>
        artist.toLocaleLowerCase().includes(queryLower)
      )
    );
  });
}
