import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon, PaletteIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../misc/btn-toggle-mode";
import { ColorPicker } from "../misc/color-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { generateGradientFromColor } from "@/helper/colorGradient";
import { useTheme } from "../theme-provider";

export const Toolbar = () => {
  const { setColors } = useTheme();

  const setColorTheme = (hexColor: string) => {
    const colors = generateGradientFromColor(hexColor);
    // settings.setColors(colors);
    setColors(colors);
  };

  return (
    <div className="flex w-full justify-between p-4 shadow-md">
      <section>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
      <section>
        <h1 className="">3LO</h1>
      </section>
      <section className="flex gap-2">
        <Popover>
          <PopoverTrigger>
            <Button>
              <PaletteIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-transparent border-none w-auto">
            <ColorPicker
              onChange={(hexColor: string) => setColorTheme(hexColor)}
            />
          </PopoverContent>
        </Popover>
        <ModeToggle />
        <Button>
          <LogOutIcon />
        </Button>
      </section>
    </div>
  );
};
