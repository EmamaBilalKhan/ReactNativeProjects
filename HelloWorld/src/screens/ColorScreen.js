import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";

export default function ColorScreen() {
  const [boxes, setBoxes] = useState([]);

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  const randomSize = () => {
    const width = Math.floor(Math.random() * 200 + 50); // Random width between 50 and 250
    const height = Math.floor(Math.random() * 200 + 50); // Random height between 50 and 250

    return { width, height };
  };

  const generateNewBox = () => {
    const color = randomRGB();
    const size = randomSize();

    setBoxes([...boxes, { color, size }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Generate Random Color Boxes</Text>
      <Button title="Generate New Box" onPress={generateNewBox} />
      <View style={styles.boxContainer}>
        {boxes.map((box, index) => (
          <View
            key={index}
            style={[
              styles.box,
              {
                backgroundColor: box.color,
                width: box.size.width,
                height: box.size.height,
              },
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    margin:10,
},
});