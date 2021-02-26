# Hugo Theme Willow

![](construction.gif)

## Javascript

### Current
```zsh
.
|_____windowGUI.js
|____icons.js
|_____constants.js
|____global.js
|____window.js
|____desktop.js
|____utils.js
|_____drag.js
|____app.js
|____debug.js
|_____iconGUI.js
```

### Refactor

```zsh
.
|____utils.js
|____icons.js
|____global.js
```

- `utils.js`: Contains `Utils`. Functions that make repetitive tasks less verbose. **Global**.
- `icons.js`: Contains `Icons`. Makes icons draggable. **Global**.
- `global.js`: Contains `Global`. Initiates all global modules when document is ready. It gets compiled into `main.js`.
