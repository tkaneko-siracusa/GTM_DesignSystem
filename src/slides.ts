/**
 * @polastack/gtm-design-system/slides
 * Spectacle ベースのスライドコンポーネント
 */
export {
  SlideDeck,
  polastackTheme,
  polastackDarkTheme,
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  QuoteSlide,
  type SlideDeckProps,
  type TitleSlideProps,
  type ContentSlideProps,
  type SplitSlideProps,
  type StatSlideProps,
  type StatSlideItem,
  type QuoteSlideProps,
} from './components/slides';

// Spectacle 基本コンポーネント re-export
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
