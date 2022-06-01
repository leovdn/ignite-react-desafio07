import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [image, setImage] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleViewImage(imageUrl: string) {
    setImage(imageUrl);
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid onClick={onOpen} gridTemplateColumns="1fr 1fr 1fr" gap={40}>
        {cards.map(card => (
          <Card
            data={card}
            key={card.id}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={image} />
    </>
  );
}
