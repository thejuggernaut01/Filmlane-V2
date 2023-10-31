import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-90px)]">
      <hanko-profile />;
    </div>
  );
}
