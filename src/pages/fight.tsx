import { MockCharacter } from "@/mock/Character";
import fighter from "@/mock/images/fighter.png";
import villain from "@/mock/images/villain.png";
import background from "@/mock/images/background.jpg";
import { fight } from "@/rules/fight";

interface CharacterAppearanceProps {
  className?: string;
}
const CharacterAppearance = ({ className }: CharacterAppearanceProps) => {
  return <img className={`h-[150px] ${className}`} src={fighter}></img>;
};

const OpponentAppearance = ({ className }: CharacterAppearanceProps) => {
  return (
    <img className={`h-[150px] -scale-x-100  ${className}`} src={villain}></img>
  );
};
const Background = () => {
  return <img className="h-max" src={background}></img>;
};

export const FightPage = () => {
  const character = new MockCharacter();
  const opponent = new MockCharacter();
  fight(character, opponent);
  return (
    <main className="flex flex-col border p-4 items-center">
      {/* <div>{JSON.stringify(character)}</div> */}

      <div className="relative">
        <Background />
        <CharacterAppearance className="absolute bottom-[25%] left-[20%]" />
        <OpponentAppearance className="absolute bottom-[25%] left-[80%]" />
      </div>
    </main>
  );
};
