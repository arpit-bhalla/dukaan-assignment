import { slogans } from "../data";

export const sloganAPI = (pageNumber?: number) =>
  new Promise<string[]>((resolve, reject) => {
    const arr: string[] = Array.from({ length: 18 });
    resolve(
      arr.map(() => {
        return slogans[Math.floor(Math.random() * slogans.length)];
      })
    );
  });
