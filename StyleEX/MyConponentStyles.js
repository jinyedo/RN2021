import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const Color = {
    dark: 'black',
    light: 'white'
};

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 159
}

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Color.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Color.dark
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Color.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Color.light
    }
});

// Boolean 값에 따라 해당하는 테마를 반환하는 함수
export default function getStyleSheet(useDarkTheme) {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}