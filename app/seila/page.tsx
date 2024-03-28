import { revalidateTag, unstable_cache } from "next/cache";
import InfoList from "@/components/info-list";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

const getCurrentDate = unstable_cache(
  async () => {
    return new Date().toISOString();
  },
  [],
  {
    revalidate: false,
    tags: ["current-date"],
  }
);

export default async function Seila() {
  const currentDate = await getCurrentDate();

  async function refreshCurrentDate() {
    "use server";
    revalidateTag("current-date");
  }

  return (
    <div>
      {currentDate}
      <form action={refreshCurrentDate}>
        <Button type="submit">refresh current date</Button>
      </form>
      <p>Parte estática</p>
      <Suspense fallback={<p>CARREGANDO</p>}>
        <InfoList />
      </Suspense>
    </div>
  );
}
