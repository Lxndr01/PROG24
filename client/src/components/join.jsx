import * as React from "react";
import {
  Stack,
  Button,
  SimpleGrid,
  Box,
  Text,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import BtnFoodSaverReg from "./regModFoodSaver";
import BtnFoodOffererReg from "./regFoodOfferer";
import BtnCharityReg from "./regCharity";
import MenuNav from "./menuNav";

export default function JoinUs() {
  return (
    <>
      <MenuNav></MenuNav>
      <br />
      <SimpleGrid
        columns={2}
        spacing={10}
        minChildWidth="400px"
        spacingY="20px"
        mb={40}
        px={30}
      >
        <Box maxW="32rem" fontFamily="Georgia">
          <Heading mb={4}>Csatlakozz az ételmentőkhöz</Heading>
          <Text fontSize="m">és segítsük együtt csökkenteni az ételpazarlást, hogy mások asztala se legyen üres</Text>
        </Box>
        <Box>
          <Stack direction="column" spacing={4} align="center">
            <BtnFoodOffererReg></BtnFoodOffererReg>
            <BtnFoodSaverReg></BtnFoodSaverReg>
            <BtnCharityReg></BtnCharityReg>
          </Stack>
        </Box>
      </SimpleGrid>
    </>
  );
}
