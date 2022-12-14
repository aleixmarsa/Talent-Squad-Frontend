import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  Text,
  HStack,
  Box,
  Circle,
  VStack,
} from "@chakra-ui/react";
import FavoriteButton from "../components/FavoriteButton";

import {Character} from "../types"


interface Props {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
}


const CharacterModal = ({
  isOpen,
  onClose,
  character,
}: Props) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          bg="customGreen.100"
          color="customGreen.50"
          border="2px"
          borderColor="customGreen.50"
          mx={{ base: 8, md: 0 }}
          borderRadius="8px"
        >
          <ModalCloseButton _hover={{ borderColor: "customGreen.50" }} />
          <ModalBody pt={12} px={12}>
            <HStack display={{ base: "none", md: "flex" }}>
              <Image
                src={character.image}
                alt={character.name + "Image"}
                maxW={44}
                borderRadius="8px"
              />
              <Box pl={4}>
                <HStack>
                  <Text pt={0} pl={0} fontSize="2xl" fontWeight="extrabold">
                    {character.name}
                  </Text>
                  <Box>
                  <FavoriteButton
                    character={character}
                  />
                  </Box>
                </HStack>

                <HStack>
                  {character.status === "Alive" ? (
                    <Circle size="10px" bg="green.400" />
                  ) : character.status === "Dead" ? (
                    <Circle size="10px" bg="red" />
                  ) : (
                    <Circle size="10px" bg="yellow.500" />
                  )}

                  <Text>
                    {character.status} - {character.gender} -{" "}
                    {character.species}
                  </Text>
                </HStack>
                <Box pt={4}>
                  <Text color="gray.400">Origin:</Text>

                  <Text>{character.origin?.name}</Text>
                </Box>
                <Box pt={4}>
                  <Text color="gray.400">Last known location:</Text>

                  <Text>{character.location?.name}</Text>
                </Box>
              </Box>
            </HStack>
            <VStack display={{ base: "flex", md: "none" }}>
              <Image
                src={character.image}
                alt={character.name + "Image"}
                maxW={44}
                borderRadius={4}
              />
              <Box pl={4}>
                <ModalHeader
                  pt={0}
                  pl={0}
                  fontSize="2xl"
                  fontWeight="extrabold"
                >
                  {character.name}
                </ModalHeader>
                <HStack>
                  {character.status === "Alive" ? (
                    <Circle size="10px" bg="green.400" />
                  ) : character.status === "Dead" ? (
                    <Circle size="10px" bg="red" />
                  ) : (
                    <Circle size="10px" bg="yellow.500" />
                  )}

                  <Text>
                    {character.status} - {character.gender} -{" "}
                    {character.species}
                  </Text>
                </HStack>
                <Box pt={4}>
                  <Text color="gray.400">Origin:</Text>

                  <Text>{character.origin?.name}</Text>
                </Box>
                <Box pt={4}>
                  <Text color="gray.400">Last known location:</Text>

                  <Text>{character.location?.name}</Text>
                </Box>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter pt={0}>
            <Button
              color="customGreen.100"
              bg="customGreen.50"
              _hover={{
                bg: "customGreen.100",
                borderColor: "customGreen.50",
                color: "customGreen.50",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CharacterModal;
