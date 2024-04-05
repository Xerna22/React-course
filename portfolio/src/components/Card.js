import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="md"
      borderWidth="1px"
      maxW="320px"
      w="100%"
      alignItems="start"
      spacing={4}
      boxShadow="md"
      background="white"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" w="100%" />
      <VStack alignItems="start" spacing={2} w="100%" p={2}>
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack w="100%" p={2}>
        <Text color="black">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
