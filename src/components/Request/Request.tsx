export const Request = async (text: string) => {
  const req = await fetch(
    `https://api.github.com/search/users?q=${text}&page=1&per_page=12`
  );

  const users = await req.json();

  return users.items;
};
