/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export const Colors = {
	light: {
		text: '#11181C',
		background: '#fff',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
	},
	dark: {
		primary: '#fc3c44',
		textMuted: '#9ca3af',
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		icon: '#fff',
		maximumTrackTintColor: 'rgba(255, 255, 255, 0.4)',
		minimumTrackTintColor: 'rgba(255, 255, 255, 0.6)',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
	},
}

export const fontSize = {
	xs: 12,
	sm: 16,
	base: 20,
	lg: 24
}

export const screenPadding = {
	horizontal: 24,
}
