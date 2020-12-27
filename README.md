# Auto Translate (English) Firefox Add-On

This Firefox Add-on uses Frengly APIs to convert a selected text into English language. 
Planning to use different translation service like Google, Yandex in the near future.

# How it Works?

There are two javascript files which are used for converting the text.

1) script.js: This script creates a new entry in Context Menu under Selection. Also it fetches the selected text and translates it into English using the backend API calls. Then it forwards the text to the Message Handler written in content.js

2) content.js: This replaces the selected text with the translated text obtained from API call

# Screenshots

![1](https://raw.githubusercontent.com/rahuldshetty/Translate-This/main/screenshots/1.png)


