---
sidebar_position: 3
sidebar_label: カスタムアーキテクチャからの移行
---

# カスタムアーキテクチャからの移行

このガイドは、カスタムのアーキテクチャからFeature-Sliced Designへの移行に役立つアプローチを説明します。

以下は、典型的なカスタムアーキテクチャのフォルダ構造です。このガイドでは、これを例として使用します。フォルダの内容が見えるように、フォルダの横にある青い矢印をクリックすることができます。

<details className="file-tree">
      <summary>📁 src</summary>
      <ul>
            <li>
                  <details className="file-tree">
                        <summary>📁 actions</summary>
                        <ul>
                              <li>📁 product</li>
                              <li>📁 order</li>
                        </ul>
                  </details>
            </li>
            <li>📁 api</li>
            <li>📁 components</li>
            <li>📁 containers</li>
            <li>📁 constants</li>
            <li>📁 i18n</li>
            <li>📁 modules</li>
            <li>📁 helpers</li>
            <li>
                  <details className="file-tree">
                        <summary>📁 routes</summary>
                        <ul>
                              <li>📁 products.jsx</li>
                              <li>📄 products.[id].jsx</li>
                        </ul>
                  </details>
            </li>
            <li>📁 utils</li>
            <li>📁 reducers</li>
            <li>📁 selectors</li>
            <li>📁 styles</li>
            <li>📄 App.jsx</li>
            <li>📄 index.js</li>
      </ul>
</details>

## 開始前に {#before-you-start}

Feature-Sliced Designへの移行を検討する際に、チームに最も重要な質問は「本当に必要か？」です。私たちはFeature-Sliced Designが好きですが、いくつかのプロジェクトはそれなしでうまくいけることを認めています。

移行を検討すべき理由はいくつかあります。

1. 新しいチームメンバーが生産的なレベルに達するのが難しいと不満を言う。
2. コードの一部を変更すると、**しばしば**他の無関係な部分が壊れる。
3. 巨大なコードベースのため、新しい機能を追加するのが難しい。

**同僚の意に反してFSDに移行することは避けてください**。たとえあなたがチームリーダーであっても、まずは同僚を説得し、移行の利点がコストを上回ることを理解させる必要があります。

また、アーキテクチャの変更は、瞬時には経営陣には見えないことを覚えておいてください。始める前に、経営陣が移行を支持していることを確認し、この移行がプロジェクトにどのように役立つかを説明してください。

:::tip

プロジェクトマネージャーをFSDの有用性に納得させるためのアイデアをいくつか紹介します。

1. FSDへの移行は段階的に行えるため、新機能の開発を止めることはありません。
2. 良いアーキテクチャは、新しい開発者が生産性を達成するのにかかる時間を大幅に短縮できます。
3. FSDは文書化されたアーキテクチャであるため、チームは独自の文書を維持するために常に時間を費やす必要がありません。

:::

---

もし移行を始める決断をした場合、最初に行うべきことは`📁 src`のエイリアスを設定することです。これは、後で上位フォルダを参照するのに便利です。以降のテキストでは、`@`を`./src`のエイリアスとして扱います。

## ステップ１。コードをページごとに分割する {#divide-code-by-pages}

ほとんどのカスタムアーキテクチャは、ロジックのサイズに関係なく、すでにページごとに分割されています。もし`📁 pages`がすでに存在する場合は、このステップをスキップできます。

もし`📁 routes`しかない場合は、`📁 pages`を作成し、できるだけ多くのコンポーネントコードを`📁 routes`から移動させてみてください。理想的には、小さなルートファイルと大きなページファイルがあることです。コードを移動させる際には、各ページのためのフォルダを作成し、その中にインデックスファイルを追加します。

:::note

現時点では、ページ同士が互いにインポートすることは問題ありません。後でこれらの依存関係を解消するための別のステップがあります。今はページごとの明確な分割を確立することに集中します。

:::

ルートファイル

```js title="src/routes/products.[id].js"
export { ProductPage as default } from "@/pages/product"
```

ページのインデックスファイル

```js title="src/pages/product/index.js"
export { ProductPage } from "./ProductPage.jsx"
```

ページコンポーネントファイル

```jsx title="src/pages/product/ProductPage.jsx"
export function ProductPage(props) {
  return <div />;
}
```

## ステップ２。 ページ以外のすべてを分離する {#separate-everything-else-from-pages}

`📁 src/shared`フォルダを作成し、`📁 pages`や`📁 routes`からインポートされないすべてをそこに移動します。`📁 src/app`フォルダを作成し、ページやルートをインポートするすべてをそこに移動します。

Shared層にはスライスがないことを覚えておいてください。したがって、セグメントは互いにインポートできます。

最終的には、次のようなファイル構造になるはずです。

<details className="file-tree" open>
      <summary>📁 src</summary>
      <ul>
            <li>
                  <details className="file-tree">
                        <summary>📁 app</summary>
                        <ul>
                              <li>
                                    <details className="file-tree">
                                          <summary>📁 routes</summary>
                                          <ul>
                                                <li>📄 products.jsx</li>
                                                <li>📄 products.[id].jsx</li>
                                          </ul>
                                    </details>
                              </li>
                              <li>📄 App.jsx</li>
                              <li>📄 index.js</li>
                        </ul>
                  </details>
            </li>
            <li>
                  <details className="file-tree">
                        <summary>📁 pages</summary>
                        <ul>
                              <li>
                                    <details className="file-tree">
                                          <summary>📁 product</summary>
                                          <ul>
                                                <li>
                                                      <details className="file-tree">
                                                            <summary>📁 ui</summary>
                                                            <ul>
                                                                  <li>📄 ProductPage.jsx</li>
                                                            </ul>
                                                      </details>
                                                </li>
                                                <li>📄 index.js</li>
                                          </ul>
                                    </details>
                              </li>
                              <li>📁 catalog</li>
                        </ul>
                  </details>
            </li>
            <li>
                  <details className="file-tree">
                        <summary>📁 shared</summary>
                        <ul>
                              <li>📁 actions</li>
                              <li>📁 api</li>
                              <li>📁 components</li>
                              <li>📁 containers</li>
                              <li>📁 constants</li>
                              <li>📁 i18n</li>
                              <li>📁 modules</li>
                              <li>📁 helpers</li>
                              <li>📁 utils</li>
                              <li>📁 reducers</li>
                              <li>📁 selectors</li>
                              <li>📁 styles</li>
                        </ul>
                  </details>
            </li>
      </ul>
</details>

## ステップ３。 ページ間のクロスインポートを解消する {#tackle-cross-imports-between-pages}

あるページが他のページから何かをインポートしているすべての箇所を見つけ、次のいずれかを行います。

1. インポートされているコードを依存するページにコピーして、依存関係を取り除く。
2. コードをShared層の適切なセグメントに移動する
   - UIキットの一部であれば、`📁 shared/ui`に移動。
   - 設定の定数であれば、`📁 shared/config`に移動。
   - バックエンドとのやり取りであれば、`📁 shared/api`に移動。

:::note

**コピー自体はアーキテクチャの問題ではありません**。実際、時には新しい再利用可能なモジュールに何かを抽象化するよりも、何かを複製する方が正しい場合もあります。ページの共通部分が異なってくることがあるため、その場合、依存関係が妨げにならないようにする必要があります。

ただし、DRY（"don't repeat yourself" — "繰り返さない"）の原則には意味があるため、ビジネスロジックをコピーしないようにしてください。そうしないと、バグを複数の箇所で修正することになることを頭に入れておく必要があります。

:::

## ステップ４。 Shared層を分解する {#unpack-shared-layer}

この段階では、Shared層に多くのものが入っているかもしれませんが、一般的にはそのような状況を避けるべきです。理由は、Shared層に依存している他の層にあるコードが存在している可能性があるため、そこに変更を加えることは予期しない結果を引き起こす可能性が高くなります。

特定のページでのみ使用されるすべてのオブジェクトを見つけ、それらをそのページのスライスに移動します。そして、_これにはアクション、リデューサー、セレクターも含まれます_。すべてのアクションを一緒にグループ化することには意味がありませんが、関連するアクションをその使用場所の近くに置くことには意味があります。

最終的には、次のようなファイル構造になるはずです。

<details className="file-tree" open>
      <summary>📁 src</summary>
      <ul>
            <li>📁 app (変更なし)</li>
            <li>
                  <details className="file-tree" open>
                        <summary>📁 pages</summary>
                        <ul>
                              <li>
                                    <details className="file-tree" open>
                                          <summary>📁 product</summary>
                                          <ul>
                                                <li>📁 actions</li>
                                                <li>📁 reducers</li>
                                                <li>📁 selectors</li>
                                                <li>
                                                      <details className="file-tree">
                                                            <summary>📁 ui</summary>
                                                            <ul>
                                                                  <li>📄 Component.jsx</li>
                                                                  <li>📄 Container.jsx</li>
                                                                  <li>📄 ProductPage.jsx</li>
                                                            </ul>
                                                      </details>
                                                </li>
                                                <li>📄 index.js</li>
                                          </ul>
                                    </details>
                              </li>
                              <li>📁 catalog</li>
                        </ul>
                  </details>
            </li>
            <li>
                  <details className="file-tree">
                        <summary>📁 shared (再利用されるオブジェクトのみ)</summary>
                        <ul>
                              <li>📁 actions</li>
                              <li>📁 api</li>
                              <li>📁 components</li>
                              <li>📁 containers</li>
                              <li>📁 constants</li>
                              <li>📁 i18n</li>
                              <li>📁 modules</li>
                              <li>📁 helpers</li>
                              <li>📁 utils</li>
                              <li>📁 reducers</li>
                              <li>📁 selectors</li>
                              <li>📁 styles</li>
                        </ul>
                  </details>
            </li>
      </ul>
</details>

## ステップ５。 コードを技術的な目的に基づいて整理する {#organize-by-technical-purpose}

FSDでは、技術的な目的に基づく分割が<i>セグメント</i>によって行われます。よく見られるセグメントはいくつかあります。

- `ui` — インターフェースの表示に関連するすべて: UIコンポーネント、日付のフォーマット、スタイルなど。
- `api` — バックエンドとのやり取り: リクエスト関数、データ型、マッパーなど。
- `model` — データモデル: スキーマ、インターフェース、ストレージ、ビジネスロジック。
- `lib` — 他のモジュールに必要なライブラリコード。
- `config` — 設定ファイルやフィーチャーフラグ。

必要に応じて独自のセグメントを作成できます。ただし、コードをその性質によってグループ化するセグメント（例: `components`、`actions`、`types`、`utils`）を作成しないようにしてください。代わりに、コードの目的に基づいてグループ化してください。

ページのコードをセグメントに再分配します。すでに`ui`セグメントがあるはずなので、今は他のセグメント（例えば、アクション、リデューサー、セレクターのための`model`や、サンクやミューテーションのための`api`）を作成するときです。

また、Shared層を再分配して、次のフォルダを削除します。

- `📁 components`、`📁 containers` — その内容のほとんどは`📁 shared/ui`になるべきです。
- `📁 helpers`、`📁 utils` — 再利用可能なヘルパー関数が残っている場合は、目的に基づいてグループ化し、これらのグループを`📁 shared/lib`に移動します。
- `📁 constants` — 同様に、目的に基づいてグループ化し、`📁 shared/config`に移動します。

## 任意のステップ  {#optional-steps}

### ステップ６。 複数のページで使用されるReduxスライスからエンティティ/フィーチャーを形成する {#form-entities-features-from-redux}

通常、これらの再利用可能なReduxスライスは、ビジネスに関連する何かを説明します（例えば、プロダクトやユーザーなど）。したがって、それらをエンティティ層に移動できます。1つのエンティティにつき1つのフォルダです。Reduxスライスが、ユーザーがアプリケーションで実行したいアクションに関連している場合（例えば、コメントなど）、それをフィーチャー層に移動できます。

エンティティとフィーチャーは互いに独立している必要があります。ビジネス領域に組み込まれたエンティティ間の関係がある場合は、[ビジネスエンティティに関するガイド][business-entities-cross-relations]を参照して、これらの関係を整理する方法を確認してください。

これらのスライスに関連するAPI関数は、`📁 shared/api`に残すことができます。

### ステップ７。 モジュールをリファクタリングする {#refactor-your-modules}

`📁 modules`フォルダは通常、ビジネスロジックに使用されるため、すでにFSDのフィーチャー層に似た性質を持っています。一部のモジュールは、アプリケーションの大きな部分（例えば、アプリのヘッダーなど）を説明することもあります。この場合、それらをウィジェット層に移動できます。

### ステップ8。 `shared/ui`にUI基盤を正しく形成する {#form-clean-ui-foundation}

理想的には、`📁 shared/ui`にはビジネスロジックが含まれていないUI要素のセットが含まれるべきです。また、非常に再利用可能である必要があります。

以前`📁 components`や`📁 containers`にあったUIコンポーネントをリファクタリングして、ビジネスロジックを分離します。このビジネスロジックを上位層に移動します。あまり多くの場所で使用されていない場合は、コピーを検討することもできます。

[ext-steiger]: https://github.com/feature-sliced/steiger
[business-entities-cross-relations]: /docs/guides/examples/types#business-entities-and-their-cross-references
