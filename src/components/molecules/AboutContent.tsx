import Heading from "../atoms/AboutHeading";
import Text from "../atoms/AboutText";

export default function AboutContent() {
  return (
    <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 max-w-xl">
      <Heading>About Digimonk</Heading>

      <Text className="mt-4">
        We at Digimonk Technologies believes in digital transformation and
        building innovative technology solutions.
      </Text>
    </div>
  );
}