module.exports = () => {
  const data = { superheroes: [], todos: [] };
  for (let i = 1; i <= 100; i++) {
    data.superheroes.push({
      id: i,
      name: `superHero ${i}`,
      alterEgo: `No${i}`,
    });
    data.todos.push({ id: i, name: `todo ${i}`, comment: `todo_${i}` });
  }
  return data;
};
