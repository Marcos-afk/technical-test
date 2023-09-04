import 'styled-components';

import { DEFAULT_THEME } from '@libs/styled-components/theme';

type ThemeType = typeof DEFAULT_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
