import tw from "twrnc";

import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../lib/navigation";

import { usePeopleStore } from "../lib/stores/usePeopleStore";

type Props = NativeStackScreenProps<RootStackParamList, "People">;

export default function PeopleScreen({ navigation }: Props) {
  const { people, loading, error, getPeople } = usePeopleStore();

  useEffect(() => {
    getPeople();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={tw`mt-5`} />;
  }

  if (error) {
    return <Text style={tw`text-sm text-red-500`}>{error}</Text>;
  }

  const listHeaderComponent = () => (
    <Text style={tw`font-bold px-3 py-5`}>Star Wars Characters</Text>
  );

  const renderItemComponent = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          person: item,
        })
      }
    >
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooterComponent = () => (
    <View style={tw`flex-col items-center w-full p-5 gap-y-3`}>
      <Text style={tw`text-center`}>End of List</Text>
      <Text style={tw`text-center text-sm`}>Created by: Jerome Villaruel</Text>
    </View>
  );

  return (
    <FlatList
      data={people}
      keyExtractor={(item) => item.url}
      ListHeaderComponent={listHeaderComponent}
      renderItem={renderItemComponent}
      ListFooterComponent={renderFooterComponent}
      refreshing={loading}
      onRefresh={getPeople}
    />
  );
}
