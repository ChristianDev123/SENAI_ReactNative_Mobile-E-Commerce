import { View, StyleSheet, Text } from "react-native";

export default function Size() {
  return (
    <View style={styles.size}>
      <Text style={styles.nSize}>34</Text>
      <Text style={styles.nSize}>35</Text>
      <Text style={styles.nSize}>36</Text>
      <Text style={styles.nSize}>37</Text>
      <Text style={styles.nSize}>38</Text>
      <Text style={styles.nSize}>39</Text>
      <Text style={styles.nSize}>40</Text>
      <Text style={styles.nSize}>41</Text>
      <Text style={styles.nSize}>42</Text>
      <Text style={styles.nSize}>43</Text>
      <Text style={styles.nSize}>44</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   
    size: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: "auto",
        flexWrap: "wrap"
    },
    nSize: {
        padding: 5,
        fontSize: 16,
        backgroundColor: '#e3e3e3',
        width: 50,
        marginTop: 5,
        textAlign: "center",
        borderColor: 'black',
        marginLeft: 10
    }
})