export interface SongResultModel {
  id: string;
  artists: string[];
  title: string;
  length: number;
  imageUrl: string;
  source: "youtube" | "spotify";
  url: string;
}
