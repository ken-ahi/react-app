
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';

export default function App() {
  console.log('App');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // setOpen　という値が変わったときにこの関数を再生成（関数のメモ化）
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 変数のメモ化
  const temp = useMemo(() => 1+3, []);
  console.log(temp);

  return (
    <div>
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open = {open} onClickClose = {onClickClose} />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}