import { useEffect } from 'react';
import {
  Container,
  useColorModeValue,
  Box,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { FrontWebsiteFeaturePivotsList as Pivots } from '@balance/front-website/feature-pivots-list';
import { useStoreState, useStoreActions } from '../store/hooks';

export function Home() {
  const { pivots } = useStoreState((store) => store['pivotModel']);

  const fetchPivots = useStoreActions(
    (actions) => actions['pivotModel'].fetchAll
  );
  useEffect(() => {
    fetchPivots();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
        >
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              display={'flex'}
              alignItems="center"
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              PivotBalance
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Container maxW={'7xl'}>
        <ul>
          <Pivots pivots={pivots} />
        </ul>
      </Container>
    </>
  );
}

export default Home;
