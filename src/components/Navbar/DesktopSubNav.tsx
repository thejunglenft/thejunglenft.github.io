import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Stack,
  Link,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { NavItem } from "./types";

const DesktopSubNav = ({ label, href, subLabel, newTab }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.300", "pink.50") }}
      target={newTab ? "_blank" : undefined}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
