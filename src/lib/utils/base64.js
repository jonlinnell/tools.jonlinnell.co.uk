export const decodeBase64 = (data) => (function() { try { return atob(data) } catch(e) { return '$INVALID' }})(data);
export const encodeBase64 = (data) => btoa(data);