# Star Wars Characters App

## Setup

### 1. Clone the repository.

```
git clone <repository-url>
```

### 2. Install dependencies.

```
npm install
```

### 3. Start the Expo development server.

```
npx expo start
```

### 4. To run on Android.

```
npx expo run:android
```

## Features

- Fetches Star Wars characters from the SWAPI People endpoint.
- Displays the characters using a FlatList.
- Shows a loading indicator while fetching data.
- Displays an error message if the request fails.
- Uses Zustand for state management.
- Saves the last successful response using AsyncStorage for offline use.
- Supports pull-to-refresh.
- Includes a detail screen to view more information about a selected character.

## Notes

- The API request and state management are handled inside the Zustand store.
- If the device is offline, the app loads the last cached data from AsyncStorage.
- The app was built using Expo SDK 54 with TypeScript.

## Recording
https://drive.google.com/file/d/16Aw2QHNprToHvRipdjvjL2G6IGMX2nfN/view?usp=sharing

## Android APK
https://github.com/VeoScript/TaugaAI/releases/download/1.0.0/starwars-tauga-ai.apk
