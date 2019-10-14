# Loki Storybook UI Support

Addition UI Library support for [Loki](https://github.com/oblador/loki)

## Rationale

[Loki](https://github.com/oblador/loki) supports React, React Native, and Vue out of the box. Storybook supports several other UI libraries.


## Limitations

These additional libraries do not currently support Native (iOS, or Android), and there are no plans to support them.

## Supported platforms

- Chrome in docker (recommended)
- Local Chrome application


## Installation

Install [Loki](https://github.com/oblador/loki)

```
npm install loki --save-dev
npx loki init
```

Install Loki Storybook UI Support

```
npm install @amindunited/loki-storybook-ui-support --save-dev
```
Add [Loki](https://github.com/oblador/loki) configuration to your package.json

```JSON
  "loki": {
    "configurations": {
      "chrome.laptop": {
        "target": "chrome.app",
        "width": 1366,
        "height": 768,
        "deviceScaleFactor": 1,
        "mobile": false
      },
      "chrome.iphone7": {
        "target": "chrome.app",
        "preset": "iPhone 7"
      },
      "chrome.iphone6": {
        "target": "chrome.app",
        "preset": "iPhone 7"
      }
    }
```

Add [Loki](https://github.com/oblador/loki) to your .storybook/config.js

```
import '@amindunited/loki-storybook-ui-support/configure-html';
```

Additional [Loki](https://github.com/oblador/loki) Workflow, and configuration documentation can be found at the [Loki project page](https://loki.js.org/getting-started.html)
