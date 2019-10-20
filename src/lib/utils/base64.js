const INVALID = '$INVALID';

export const decodeBase64 = (data) => (function() { try { return atob(data) } catch(e) { return INVALID }})(data);
export const encodeBase64 = (data) => (function() { try { return btoa(data) } catch(e) { return INVALID }})(data);