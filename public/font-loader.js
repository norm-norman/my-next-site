import localFont from 'next/font/local';

// grab from lib/fonts/neue-regrade
const NEUE_REGRADE_PATH_PREFIX = '../lib/fonts/neue-regrade';
const neueRegradeFont = localFont({
  src: '../lib/fonts/neue-regrade/Neue-Regrade-Variable.ttf',
});

export default neueRegradeFont;
