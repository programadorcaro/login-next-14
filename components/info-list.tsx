export default async function InfoList() {
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const result = await fetch(
      "https://rickandmortyapi.com/api/character/205",
      {
        next: {
          revalidate: 3,
        },
      }
    );
    return await result.json();
  }

  const data = await getData();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
