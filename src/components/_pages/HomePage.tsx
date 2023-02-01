import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SectionContainer } from "../SectionContainer";
import { useQuery } from "@tanstack/react-query";
import { Request } from "../Request/Request";
import { ProfileList } from "../Profiles/ProfileList";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [final, setFinal] = useState("");

  const { data, error } = useQuery(
    ["userData", final],
    () => Request(final),

    { enabled: Boolean(final) }
  );

  console.log(data);

  if (error) return "An error has occurred: " + error;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setFinal(search);
    setSearch("");
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearch(value);
  };

  return (
    <SectionContainer>
      <Flex
        justifyContent="space-between"
        w={{ base: "fit-content", md: "2xl", lg: "6xl" }}
        mb={8}
      >
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "2rem" }}
          fontWeight="700"
        >
          GitHub Users
        </Heading>

        <form onSubmit={submitHandler}>
          <input
            className="input-form"
            type="text"
            value={search}
            placeholder="Enter username or Email"
            onChange={onChangeHandler}
          />
        </form>
      </Flex>
      {data ? (
        <ProfileList data={data} />
      ) : (
        <Text>Looks Like you haven't searched yet </Text>
      )}
    </SectionContainer>
  );
};

export default HomePage;
