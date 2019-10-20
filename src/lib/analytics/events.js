const BASE64 = 'BASE64'
export const base64_encode = (label = '') => ({ category: BASE64, action: 'ENCODE', label });
export const base64_decode = (label = '') => ({ category: BASE64, action: 'DECODE', label });
export const base64_toggle_mode = (label) => ({ category: BASE64, action: 'TOGGLE_MODE', label: `to ${label}` });
export const base64_paste = (label = '') => ({ category: BASE64, action: 'PASTE', label });

const ZALGO = 'ZALGO';
export const zalgo_encode = (label = '') => ({ category: ZALGO, action: 'ENCODE', label });
export const zalgo_set_direction = (label = '') => ({ category: ZALGO, action: 'SET DIRECTION', label });
export const zalgo_set_magnitude = (label = '') => ({ category: ZALGO, action: 'SET MAGNITUDE', label });
export const zalgo_copy = () => ({ category: ZALGO, action: 'COPY RESULT' });
export const zalgo_reset = () => ({ category: ZALGO, action: 'RESET' });