import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="text-center my-4">Marvel</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
