type Props = {
  kanji: string;
  kana: string;
};

export default function Furi({ kanji, kana }: Props) {
  return (
    <ruby>
      {kanji}
      <rt>{kana}</rt>
    </ruby>
  );
}