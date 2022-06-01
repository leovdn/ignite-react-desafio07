import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent
        bg="pGray.800"
        margin={4}
        w="100%"
        maxWidth={900}
        maxHeight={640}
      >
        <ModalBody p="0">
          <Image src={imgUrl} w="100%" maxWidth={900} maxHeight={600} />
        </ModalBody>

        <ModalFooter display="flex" justifyContent="flex-start" p="8px 10px">
          <Link href={imgUrl} target="_blank" fontSize="14">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
