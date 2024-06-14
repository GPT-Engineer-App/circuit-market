import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@chakra-ui/react";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    category: "Electronics",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: 999,
    category: "Electronics",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: 199,
    category: "Wearables",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 299,
    category: "Accessories",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter(product =>
    (product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery)) &&
    (selectedCategory === "" || product.category === selectedCategory) &&
    (product.price >= priceRange[0] && product.price <= priceRange[1])
  );

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={4}
        />
        <Select placeholder="Select category" onChange={handleCategoryChange} mb={4}>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <Box mb={4}>
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            min={0}
            max={1000}
            step={50}
            defaultValue={[0, 1000]}
            onChangeEnd={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0}>
              <Box color="tomato" />
            </SliderThumb>
            <SliderThumb boxSize={6} index={1}>
              <Box color="tomato" />
            </SliderThumb>
          </Slider>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.imageUrl} alt={product.name} mb={4} />
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold" mb={4}>${product.price}</Text>
              <Button colorScheme="teal">Add to Cart</Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;