import { PrismaClient } from '@prisma/client';
import { List, ListItem, Heading } from '@chakra-ui/core';
import Version from "../components/version"

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const outdated = await prisma.version.findMany({
    where: {status: "outdated"}
  })
  const stable = await prisma.version.findMany({
    where: {status: "stable"}
  })
  const soon = await prisma.version.findMany({
    where: {status: "coming soon"}
  })
  return {
    props: {
      outdated,
      stable,
      soon,
    }
  };
}

export default ({ outdated, stable, soon }) => (
  <>
    <Heading mt={8} mb={4} fontWeight="800">
      coming soon versions
    </Heading>
    <List>
      {soon.map((elem, i) => (
        <ListItem key={i}>{elem.name}</ListItem>
      ))}
    </List>
    <Heading mt={8} mb={4} fontWeight="800">
      Stable versions
    </Heading>
    <List>
      {stable.map((elem, i) => (
        <ListItem key={i}>{elem.name}</ListItem>
      ))}
    </List>
    <Heading mt={8} mb={4} fontWeight="800">
      Outdated versions
    </Heading>
    <List>
      {outdated.map((elem, i) => (
        <ListItem key={i}>{elem.name}</ListItem>
      ))}
    </List>
    <Version />
  </>
);
