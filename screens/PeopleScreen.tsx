import tw from "twrnc";

import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PeopleScreen() {
  const listHeaderComponent = () => (
    <View>
      <Text>Tauga AI - Mobile Developer Entrance Task</Text>
    </View>
  );

  const renderItemComponent = () => (
    <View>
      <Text>Tauga AI - Mobile Developer Entrance Task</Text>
    </View>
  );

  const listFooterComponent = () => (
    <View>
      <Text>Created by: Jerome Villaruel</Text>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white px-5`}>
      <FlatList
        style={{ flex: 1 }}
        data={[]}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderItemComponent}
        ListFooterComponent={listFooterComponent}
      />
    </SafeAreaView>
  );
}
