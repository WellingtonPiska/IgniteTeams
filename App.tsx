import { StatusBar } from "react-native";

import { Groups } from "@screens/Groups";
import { useFonts, Roboto_400Regular, Roboto_700Bold  } from "@expo-google-fonts/roboto"; 
import { ThemeProvider } from "styled-components";
import theme from './src/theme';

import { Loading } from "@components/loading";


export default function App() {
	const [fontsLoaded] =	useFonts({ Roboto_400Regular, Roboto_700Bold});



  return (
	<ThemeProvider theme={theme}>
		<StatusBar
			barStyle="light-content"
			backgroundColor="transparent"
			translucent
		/>
	{fontsLoaded ? <Groups /> : <Loading/> } 
	</ThemeProvider>
	)
}