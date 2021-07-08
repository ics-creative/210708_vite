# Viteによる環境構築のサンプル集

すべてのサンプルは2021/7時点の最新版であるVite2.8.3で構築しています。

## vite-vanilla-js-jquery

- [動作サンプル](https://ics-creative.github.io/210708_vite/vite-vanilla-js-jquery/)

ViteでプレーンなJavaScript（バニラJS）を使用したサンプルプロジェクトです。構築時のコマンドは下記の通りです。

```sh
npm init @vitejs/app
? Project name: › hello-vite # ①プロジェクト名を入力
? Select a framework: › - Use arrow-keys. Return to submit.
❯   vanilla # ②フレームワークを選択（vanilla = フレームワークを使わない）
    vue
    react
    preact
    lit-element
    svelte
? Select a variant: › - Use arrow-keys. Return to submit.
❯   vanilla # ③バリエーションを選択（TypeScriptは使わない）
    vanilla-ts
```

またはまとめて下記の1行でも同じです。

```sh
# npmの場合
npm init @vitejs/app hello-vite -- --template vanilla
# yarnの場合
yarn create @vitejs/app hello-vite --template vanilla
```

このサンプルでは構築後、以下の方法で`jQuery`を導入しています。

```sh
npm install jquery
```

## vite-typescript-three

- [動作サンプル](https://ics-creative.github.io/210708_vite/vite-typescript-three/)

ViteでシンプルにTypeScriptを利用する例です。構築時のコマンドは下記の通りです。

```sh
npm init @vitejs/app
? Project name: › hello-vite-ts # ①プロジェクト名を入力
? Select a framework: › - Use arrow-keys. Return to submit.
❯   vanilla # ②フレームワークを選択（vanilla = フレームワークを使わない）
    vue
    react
    preact
    lit-element
    svelte
? Select a variant: › - Use arrow-keys. Return to submit.
    vanilla 
❯   vanilla-ts # ③TypeScriptを使う
```

またはまとめて下記の1行でも同じです。

```sh
# npmの場合
npm init @vitejs/app hello-vite -- --template vanilla-ts
# yarnの場合
yarn create @vitejs/app hello-vite --template vanilla-ts
```

この例では3D表現のためのライブラリとしてThree.jsを導入しています。

```sh
npm install -D three @types/three
```

## vite-typescript-assets

- [動作サンプル](https://ics-creative.github.io/210708_vite/vite-typescript-assets/)

Viteで画像等のアセットファイルを使用するサンプルです。構築時のコマンドは下記の通りです。

```sh
npm init @vitejs/app
? Project name: › hello-vite-ts # ①プロジェクト名を入力
? Select a framework: › - Use arrow-keys. Return to submit.
❯   vanilla # ②フレームワークを選択（vanilla = フレームワークを使わない）
    vue
    react
    preact
    lit-element
    svelte
? Select a variant: › - Use arrow-keys. Return to submit.
    vanilla 
❯   vanilla-ts # ③TypeScriptを使う
```

使用する画像ファイルは、

- プログラムから`import`して利用するものは`/src/assets`フォルダーに
- `import`せずに直接URLを指定して読み込むものは`/public`フォルダーに

それぞれ配置しています。

## vite-typescript-vue

- [動作サンプル](https://ics-creative.github.io/210708_vite/vite-typescript-vue/)

ViteでVue.jsを使用するサンプルです。構築時のコマンドは下記の通りです。

```sh
npm init @vitejs/app
? Project name: › hello-vite-vue # ①プロジェクト名を入力
? Select a framework: › - Use arrow-keys. Return to submit.
    vanilla
❯   vue    # ②フレームワークとしてVueを選択
    ...
? Select a variant: › - Use arrow-keys. Return to submit.
    vue
❯   vue-ts # ③TypeScriptを使用する
```

この例では、Vue RouterとVuexを使用するため、下記のコマンドでインストールを行っています。

```sh
# Vue Routerを追加。こちらも2021/7時点では@4の指定が必要です
npm install vue-router@4

# Vuexを追加。2021/7時点ではVue3対応版のVuex4系は@nextが必要です
npm install vuex@next
```

Vue Routerの設定は`/src/main.ts`と`/src/router.ts`を、Vuexの設定は同じく`/src/main.ts`と`/src/store.ts`を、それぞれ参照してください。

## vite-typescript-ie

- [動作サンプル](https://ics-creative.github.io/210708_vite/vite-typescript-ie/)

Viteで作成したウェブページをIE11でも動作するようにビルドしたサンプルです。ここでは最初の例（vite-vanilla-js-jquery）のjQueryを使用したTODOアプリをTypeScript化したものをサンプルとして用いています。

初期構築は下記の通り、通常のTypeScriptの例と同じです。

```sh
npm init @vitejs/app
? Project name: › hello-vite-ie # ①プロジェクト名を入力
? Select a framework: › - Use arrow-keys. Return to submit.
❯   vanilla # ②フレームワークを選択（vanilla = フレームワークを使わない）
    vue
    react
    preact
    lit-element
    svelte
? Select a variant: › - Use arrow-keys. Return to submit.
    vanilla 
❯   vanilla-ts # ③TypeScriptを使う
```

またはまとめて下記の1行でも同じです。

```sh
# npmの場合
npm init @vitejs/app hello-vite -- --template vanilla-ts
# yarnの場合
yarn create @vitejs/app hello-vite --template vanilla-ts
```

続けてjQueryとIEに対応させるためのプラグインをインストールします。

```sh
# jQueryとTypeScriptで　またないすんを使うための型定義をインストール
npm install jquery
npm install -D @types/jquery

# IE11向けビルドを行うプラグインを追加
npm install -D @vitejs/plugin-legacy
```

最後にプラグインの設定を行なってIE向けビルドを有効にします。

▼ vite.config.ts
```ts
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  // IE11向けの変換を行うプラグインの設定
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ]
})
```

設定を保存してビルドを行うと、通常のビルドに加え、IE11向けのビルドを行います。
