import ReactGA from 'react-ga';

const registerPageView = ({ pathname } = {}) => ReactGA.pageview(pathname);

export default registerPageView
