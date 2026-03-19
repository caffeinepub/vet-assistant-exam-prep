// Simple module-level debug flag toggled by tapping the question counter 5x
let _debugMode = false;
let _tapCount = 0;
let _tapTimer: ReturnType<typeof setTimeout> | null = null;

export function isDebugMode(): boolean {
  return _debugMode;
}

export function registerDebugTap(): boolean {
  _tapCount++;
  if (_tapTimer) clearTimeout(_tapTimer);
  _tapTimer = setTimeout(() => {
    _tapCount = 0;
  }, 2000);
  if (_tapCount >= 5) {
    _tapCount = 0;
    _debugMode = !_debugMode;
    return true; // toggled
  }
  return false;
}
