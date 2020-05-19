# hexui 一个 UI 组件库

## 作者 hanson-hex

[![Build Status](https://travis-ci.org/hanson-hex/hexui.svg?branch=dev)](https://travis-ci.org/hanson-hex/hexui)

## 介绍

专业造轮子，使用 VUE 做的 UI 框架，希望帮助你开发使用。

## 开始使用

1、添加 css 样式

    使用本框架前需要在 css 中开启 border-box

    ```css
    *,
    *::before,
    *::after {
    border-size: border-box;
    }
    ```

    你还需要设置默认颜色等变量（后续会会改为 scss 变量）

    ```css
    html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    }
    ```

    IE 15 及以上浏览器都支持此样式

2、安装 hansonhex-ui

    ```javascript
    npm i --save hansonhex-ui
    ```

3、引入 hansonhex-ui

    ```javascript
    import { Button } from "hansonhex-ui";
    import "hansonhex-ui/dist/index.css";

    export default {
    name: "Home",
    components: {
        "h-button": Button
    }
    };
    ```

4、引入 svg symbols

    ```javascript
    <script src="//at.alicdn.com/t/font_1824005_8goz0ip4zrx.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
