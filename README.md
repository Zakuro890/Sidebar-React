# Getting Started with Create React App


### このプロジェクトは、ReactとMaterialUIを使用して作成されたカスタムサイドバーコンポーネントです。(YOuTUBEをイメージしました)
![キャプチャ](https://github.com/Zakuro890/Sidebar-React/assets/102887065/c5f64454-e099-4cdc-b521-172d7501a77c)
## 概要

このプロジェクトには以下のファイルが含まれています:

- `Sidebar.js`: サイドバーのメインコンポーネント
- `SidebarIcon.js`: サイドバーアイコンを表示するコンポーネント
- `SidebarData.js`: サイドバーメニューのデータ配列
- `App.css`: アプリケーションのスタイルシート

サイドバーコンポーネントは、渡されたメニューデータを基にサイドバーメニューを表示し、各メニューアイテムのクリックイベントを処理します。

## 使用方法

1. プロジェクトに上記のファイルを配置します。
2. 必要なコンポーネントをインポートします。例: `import Sidebar from "./Sidebar";`
3. JSX内で `<Sidebar />` を使用してサイドバーコンポーネントを表示します。

```jsx
import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* 他のコンポーネントやコンテンツ */}
    </div>
  );
}

export default App;
```

## カスタマイズ

### SidebarData.js

`SidebarData.js` ファイルを編集することで、表示されるメニューアイテムをカスタマイズできます。各メニューアイテムは、`title`、`icon`、`link` のプロパティを持ちます。適宜編集してください。

```jsx
import React from "react";
import RoofingIcon from "@mui/icons-material/Roofing";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
// 他のアイコンのインポート

export const SidebarData = [
  {
    title: "ホーム",
    icon: <RoofingIcon />,
    link: "/home",
  },
  {
    title: "急上昇",
    icon: <LocalFireDepartmentIcon />,
    link: "/up",
  },
  // 他のメニューアイテム
];
```

### スタイリング

`App.css` ファイル内のスタイルを編集することで、サイドバーやメニューアイテムの見た目をカスタマイズできます。

## 注意事項

- サイドバーコンポーネントのスタイリングは、適切に調整する必要があります。提供されたスタイルシートを編集するか、別途スタイルを追加してください。
- このプロジェクトを実行するには、Node.jsが必要です。Node.jsをインストールしていない場合は、公式ウェブサイトからダウンロードしてインストールしてください。Node.jsのインストールが完了したら、以下の手順に従ってプロジェクトを起動できます。

1. プロジェクトフォルダーを開きます。
2. コマンドラインまたはターミナルを開き、プロジェクトフォルダーに移動します。
3. `npm install` コマンドを実行して、プロジェクトの依存関係をインストールします。
4. 依存関係のインストールが完了したら、`npm start` コマンドを実行してアプリケーションを起動します。
5. ブラウザで `http://localhost:3000` にアクセスすると、アプリケーションが表示されます。

Node.jsを使用することで、Reactアプリケーションをローカル環境で実行できます。必要な依存関係をインストールし、開発サーバーを起動してアプリケーションを実行してください。


---
このReadmeでは、Reactを使用して作成されたカスタムサイドバーコンポーネントの使用方法とカスタマイズ手順を提供しています。プロジェクトに組み込んで、柔軟なサイドバーメニューを実装してください。
