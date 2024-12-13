import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { calculateSubAttributes } from "@/helpers/calculateSubAttributes";
import { MockCharacter } from "@/mock/Character";
import { Character } from "@/types/Character";
import { Maximize2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CharacterStatusShort {
  character: Character;
}

export const CharacterStatusShort = ({ ...props }: CharacterStatusShort) => {
  const character = props.character;
  const mock = new MockCharacter();

  const defaultValues: Character = {
    attributes: character?.attributes ?? mock.attributes,
    experience: character?.experience ?? mock.experience,
    isMage: character?.isMage ?? mock.isMage,
    level: character?.level ?? mock.level,
    name: character?.name ?? mock.name,
    appearance: character?.appearance,
  };

  const sliceName = () =>
    defaultValues.name.length > 20
      ? defaultValues.name.slice(0, 20) + "..."
      : defaultValues.name;

  const charCon = defaultValues.attributes.constitution;
  const charDex = defaultValues.attributes.dexterity;
  const charInt = defaultValues.attributes.intelligence;
  const charStr = defaultValues.attributes.strength;

  const getDecimalValue = (value: number) => value.toFixed(1);

  const {
    criticalRate,
    evasionRate,
    healthPoints,
    magicalDamage,
    magicalResistence,
    physicalDamage,
    physicalResistence,
    recovery,
    speed,
  } = calculateSubAttributes(defaultValues.attributes);
  const { t } = useTranslation();

  return (
    <Card className="p-2">
      <div className="flex justify-between">
        <CardTitle className="flex items-center w-auto text-md">
          {sliceName()}
        </CardTitle>
        <Button className="w-8 h-8" variant="ghost">
          <Maximize2Icon />
        </Button>
      </div>
      <Separator />
      <CardContent className="flex">
        <section className="flex w-[200px]  p-4 items-center justify-center">
          Char Img.
        </section>
        <section className="w-full">
          <div>
            <p>{t("Attributes")}</p>
          </div>
          <section className="flex flex-col">
            <section className="text-xs mb-2 flex flex-col">
              <div className="flex justify-between">
                <p>{t("Constitution")}</p>
                <p>{charCon}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Dexterity")}</p>
                <p>{charDex}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Intelligence")}</p>
                <p>{charInt}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Strength")}</p>
                <p>{charStr}</p>
              </div>
            </section>
            <section className="text-xs">
              <div className="flex justify-between">
                <p>{t("Health Points")}</p>
                <p>{healthPoints}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Recovery")}</p>
                <p>{getDecimalValue(recovery)}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Physical Damage")}</p>
                <p>{physicalDamage}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Physical Resistence")}</p>
                <p>{physicalResistence}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Magic Damage")}</p>
                <p>{magicalDamage}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Magic Resistence")}</p>
                <p>{magicalResistence}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Speed")}</p>
                <p>{speed}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Critical Rate")}</p>
                <p>{getDecimalValue(criticalRate)}</p>
              </div>
              <div className="flex justify-between">
                <p>{t("Evasion Rate")}</p>
                <p>{evasionRate}</p>
              </div>
            </section>
          </section>
        </section>
      </CardContent>
    </Card>
  );
};
