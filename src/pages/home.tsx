import { CharacterStatusShort } from "@/components/templates/character/character-status-short";
import { Toolbar } from "@/components/templates/toolbar";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export function CardWithForm() {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={() => navigate("/fight")}>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export const HomePage = () => {
  const { colors } = useTheme();

  return (
    <main>
      <Toolbar />
      <div className="container p-2">
        <section className="flex justify-between">
          {Array.from({ length: 11 }).map((_item, index: number) => {
            return (
              <div
                className={`w-[100px] h-[100px]`}
                style={{
                  backgroundColor: `${colors[index]}`,
                }}
                key={index}
              >
                {colors[index]}
              </div>
            );
          })}
        </section>
        <section className="grid grid-cols-4 gap-2">
          <CharacterStatusShort />
          <CardWithForm />
          <CardWithForm />
          <CardWithForm />
        </section>
      </div>
    </main>
  );
};
