import { Flex } from "@chakra-ui/layout";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";

export const BasicLayout = ({ children }:any) => {
  return (
    <Flex minH="100vh" direction="column">
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};
