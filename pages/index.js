import { Select, Item } from '../components/Select';

export default function Home() {
  return (
    <main>
      <Select label="Favorite Color">
        <Item>Red</Item>
        <Item>Orange</Item>
        <Item>Yellow</Item>
        <Item>Green</Item>
        <Item>Blue</Item>
        <Item>Purple</Item>
      </Select>
    </main>
  );
}
