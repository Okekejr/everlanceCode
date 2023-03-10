import { Flex, Heading, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { SectionContainer } from "../SectionContainer";
import { useQuery } from "@tanstack/react-query";
import { Request } from "../Request/Request";
import { ProfileList } from "../Profiles/ProfileList";
import { ErrorPage } from "./Error";
import { ErrorPage2 } from "./Error2";

const HomePage: FC = () => {
  const [search, setSearch] = useState("");
  const [final, setFinal] = useState("");

  const { data, status, error } = useQuery(
    ["userData", final],
    () => Request(final),

    { enabled: Boolean(final) }
  );

  if (status === "success" && data.length === 0) {
    return <ErrorPage />;
  } else if (status === "error") {
    return <ErrorPage2 data={error} />;
  }

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
    <>
      <SectionContainer>
        <Flex
          justifyContent="space-between"
          w={{ base: "20rem", md: "2xl", lg: "6xl" }}
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
    </>
  );
};

export default HomePage;
