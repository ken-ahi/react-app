import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

// コンポーネントのメモ化(計算結果を保持し、結果を再利用すること＝不要な再レンダリングを防ぐ)
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];

  data.forEach(() => {
    console.log("...");
  });

  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子どもコンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
