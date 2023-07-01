export async function getNotionDb () {
  const data = await fetch(
    "https://api.notion.com/v1/databases/ed3211219e7849e580011cee952e2fec/query",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer secret_TL013X9zUPcnKLrVStAZNlPWYXyd6OECF0KHN26Sp07",
        "Notion-version": "2022-06-28",
        "Content-Type": "application/json",
      },
    }
  );

  const { results } = await data.json();

  return  results.map((res) => {
    const cursos = res.properties.Cursos.number;
    const transparencias = res.properties.Transparencias.number;
    const horas = res.properties["Hs Cátedra"].number;
    const unidad = res.properties.Título.title[0].text.content;
  
    return {
      cursos,
      transparencias,
      horas,
      unidad,
    };
  });
}