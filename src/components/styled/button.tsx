import Link from 'next/link';
import { Button } from '@chakra-ui/react';

export default function StyledButton({ href="/", text=""}) {
  return (
    <Link href={href} passHref>
      <Button colorScheme="blue"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md">
        {text}
      </Button>
    </Link>
  );
}