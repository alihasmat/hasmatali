# Vite

vite is like a webpack which speed up your web development process.
npm create vite@latest
cd nameofproject you just created
npm install
npm run dev

# JAMSTACK - Javascript, Api, Markup

# 11ty

Eleventy is a static site generator. It is same like Jekyll. https://www.youtube.com/watch?v=4wD00RT6d-g

npm init -y
npm install @111ty/Eleventy --save-dev
make some changes in package.json file
make .eleventy.js file and add some code
npm start - you will see public folder - links are broken
make changes in .eleventy.js file to add all your files
again npm start - your blog works
now remove public folder
inside src => create \_include folder => create base.njk(Nunjucks) file
Nunjucks is a templating language
VsCode to treat .njk as .html, open setting(command + ,), click Text Editor > Files, click Add item button > key is \*.njk and value is html. Then click OK.

# Requirements

- css reset https://piccalil.li/blog/a-modern-css-reset/
- google font Source Sans Pro and Open Sans.
