export { SlideDeck, type SlideDeckProps } from './slide-deck';
export { polastackTheme, polastackDarkTheme } from './theme';
export {
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  QuoteSlide,
  type TitleSlideProps,
  type ContentSlideProps,
  type SplitSlideProps,
  type StatSlideProps,
  type StatSlideItem,
  type QuoteSlideProps,
} from './slide-layouts';

// Spectacle の基本コンポーネントを re-export（利用者が直接使えるように）
export {
  Slide,
  Heading as SlideHeading,
  Text as SlideText,
  FlexBox,
  Box,
  Image,
  OrderedList,
  UnorderedList,
  ListItem,
  CodePane,
  Notes,
  Appear,
} from 'spectacle';
