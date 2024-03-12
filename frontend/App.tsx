// App.tsx
import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box textAlign="center" pt="40">
        <Heading>Hello, Chakra UI!</Heading>
      </Box>
    </ChakraProvider>
  );
};

export default App;
