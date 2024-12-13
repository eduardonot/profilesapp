import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { GoogleLogin } from "@react-oauth/google";
import backgroundImage from "@/mock/images/rebornfighters.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
  const { t } = useTranslation();
  const responseMessage = (response: string) => {
    console.log(response);
  };
  const errorMessage = (response: string) => {
    console.log(response);
  };
  return (
    <main className="bg-black w-full h-full flex items-center justify-center">
      <img
        className="h-full"
        style={{ objectFit: "cover" }}
        src={backgroundImage}
      />
      <Card className="p-4 pb-0 absolute shadow-2xl flex flex-col gap-2 items-center bg-card shadow-black">
        <CardTitle>Member Login</CardTitle>
        <CardContent className="flex w-full flex-col items-center">
          <div className="flex flex-col gap-2 items-center">
            <Input
              name="email"
              type="email"
              placeholder={t("Email")}
              className="bg-background w-full"
            />
            <Input
              name="password"
              type="password"
              placeholder={t("Password")}
              className="bg-background"
            />
            <a className="text-xs underline cursor-pointer">
              {t("forgot password")}
            </a>
            <Button type="submit" className="w-full">
              {t("Submit")}
            </Button>
            <p className="text-xs">{t("or sign in using another method")}</p>
          </div>
          <GoogleLogin
            type="icon"
            shape="circle"
            theme="filled_blue"
            onSuccess={responseMessage}
            onError={errorMessage}
          />
        </CardContent>
      </Card>
    </main>
  );
};
