import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import { IPivot } from '@balance/api-interfaces';

interface CardPropsInterface {
  pivot: IPivot;
}
const Card = ({ pivot }: CardPropsInterface) => {
  return (
    <Center py={6}>
      <Box
        w={'3xl'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'6xl'} fontWeight={800}>
              {pivot.id}
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}
          >
            {`${pivot.pivot}`}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export function FrontWebsiteFeaturePivotsList(props: { pivots: IPivot[] }) {
  const { pivots } = props;
  return (
    <Container>
      {Array.isArray(pivots) && pivots.map((pivot) => <Card pivot={pivot} />)}
    </Container>
  );
}

export default FrontWebsiteFeaturePivotsList;
