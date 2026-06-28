import tw from "twrnc";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../lib/navigation";

import { View, Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function PersonDetailScreen({ route }: Props) {
  const { person } = route.params;

  return (
    <View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Name: <Text style={tw`font-bold`}>{person.name}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Gender: <Text style={tw`font-bold`}>{person.gender}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Height: <Text style={tw`font-bold`}>{person.height}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Mass: <Text style={tw`font-bold`}>{person.mass}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Birth Year: <Text style={tw`font-bold`}>{person.birth_year}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Hair Color: <Text style={tw`font-bold`}>{person.hair_color}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Eye Color: <Text style={tw`font-bold`}>{person.eye_color}</Text>
        </Text>
      </View>
      <View style={tw`p-5 border-b-[0.5px] border-neutral-300`}>
        <Text style={tw`capitalize`}>
          Skin Color: <Text style={tw`font-bold`}>{person.skin_color}</Text>
        </Text>
      </View>
    </View>
  );
}
