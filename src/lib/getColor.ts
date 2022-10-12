import { ThemeProps } from "components/themes";

export type COLOR_VARIANT = 'primary' | 'secondary' | 'success' | 'danger';
export const getColor = (variant: COLOR_VARIANT, theme: ThemeProps) => {
  switch (variant) {
    case 'primary':
      return theme.primaryColor;
    case 'secondary':
      return theme.secondaryColor;
    case 'danger':
      return theme.dangerColor;
    case 'success':
      return theme.successColor;
    default:
      return theme.primaryColor;
  }
};
