import { FC } from "react";
import { Grid, GridProps } from "@chakra-ui/react";
import { GitUsers } from "@/types/types";
import { Cards } from "./Cards";

interface Props extends GridProps {
  data: GitUsers["items"];
}

export const ProfileList: FC<Props> = ({ data, ...rest }) => {
  return (
    <Grid
      display="grid"
      m="auto"
      gap={24}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      {...rest}
    >
      {data
        ? data?.map((user) => {
            return <Cards log={user} key={user.id} />;
          })
        : ""}
    </Grid>
  );
};
