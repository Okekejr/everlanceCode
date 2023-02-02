export const Request = async (text: string) => {
  const req = await fetch(
    `https://api.github.com/search/users?q=${text}&page=1&per_page=9`
  );

  const users = await req.json();

  return users.items;
};

export const ProfileRequest = async (data: string) => {
  const req = await fetch(`https://api.github.com/users/${data}`);

  const det = await req.json();

  return det;
};
