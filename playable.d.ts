function sendEvent(event: 'startPlayPlayable' | 'finishPlayPlayable'): void;
function sendEvent(
	event: 'enterSection' | 'autoClick',
	params: {
		section: string;
	}
): void;
function sendEvent(
	event: 'clickDownloadBar' | 'clickResurrection' | 'clickContent' | 'clickFinishDownloadBar' | 'clickFinishContent',
	params: {
		section: string;
		area: string;
	}
): void;

interface Window {
	playableSDK: {
		openAppStore: () => void;
		sendEvent: typeof sendEvent;
	};
}
