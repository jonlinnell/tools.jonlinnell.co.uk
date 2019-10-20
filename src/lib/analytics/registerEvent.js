import ReactGA from 'react-ga';

const registerEvent = event => ReactGA.event(event);

export default registerEvent;
