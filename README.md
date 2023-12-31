## Accordify JS
### Accordion Menu
#### by Brian McClain
#### Instructor of JavaScript and Python Programming; Noble Desktop, NYC
- This **Accordify** accordion widget / plugin can be deployed anywhere in your website, integrating seamlessly with your existing code.
- In your html page, import the css into your html page's **head**:
```js
    <link href="css/accordify-styles.css" rel="stylesheet">
```

- In your html page, add this **ul** tag wherever you want the accordion to appear:
```js
    <ul class="accordify"></ul>
```
- Import the js file(s) at the end of the body.  
The different imports are shown below for each of the four versions:

- This project has four versions of an accordion menu.  
- Each version has its own **html** and **js** files. 
- All four versions look and behave identically in the browser--  
the difference is in how the same result is made four different ways  
in the JavaScript.
- Versions **1.5+** also use the **accordify-data.js** file.
- All four versions use the same **css** file.
- The accordion is structured as a **ul**, hard-coded into the html.
- Each accordion item is a **li** tag inside the **ul**.
- Each **li** contains a **button**, which is the only visible part of the accordion when the accordion is fully closed.
- Click the button to open/close one of the accordion items. The part that appears is the **li** for that list item.
- Each **li** also contains a **div** which appears when the accordion opens.
- The div can contain whatever content you wish to put in it, but in these examples the divs just contain text.
- **animation**: The accordion uses CSS transition property and JavaScript to animate the opening and closing of the accordion menu items.

### The four versions of the Accordify Menu:

**v.1.0 Accordify Accordion Menu (Hard-Coded HTML)** :  
- The **li** tags are all hard-coded in the **ul**.  
- The **li** tags each contain a hard-coded button and div.
- Change to button and div content from the demo gibberish to whatever text you wish. You can all add images or other html tags inside the div.
```js
    <li>
        <button>Blather<span>+</span></button>
        <div><p>Blah blee foo bar tic tac toe.</p></div>
    </li>
```
- To use **v.1.0**, add this to the bottom of your html page:

```js
    <script src="js/v.1.0-accordify-accordion-menu.html"></script>
```

**v.1.5 - Accordify Dynamic Menu** :  
- The **<ul class="accordify"** is still hard-coded into the html, but only as an empty tag. All the **li** tags, complete with their child buttons and divs, are all made dynamically in JS, using data provided by **accordify-data.js**.
- This v.1.5 version, as well as all higher versions, import **accordify-data.js**, which contains an array of objects, one object per accordion item.
- To use **v.1.5**, import it the bottom of your html page. It needs to be imported above the **v.1.5** js file.
- If you want html in the div, such as p-tags, images, etc. add these in the dataset as part of the **divHTML** string.
```js
    <script src="js/accordify-data.js"></script>
    <script src="js/v.1.5-accordion-dynamic.js"></script>
```

**v.2.0 - Accordify OOP** :  
- For this version, the accordion menu is made by the **Accordify** Class, which you need to import into your html page and instantiate.
- To use **v.2.0**, add this to the bottom of your html page:

```js
    <script src="js/accordify-data.js"></script>
    <script src="js/v.2.0-Accordify-OOP-Class.js"></script>
    <script>
        const accordify = new Accordify(".accordify", accordionData);
    </script>
```

**v.2.1 - Accordify OOP Minified** : 
- Same as v.2.0, just with the JS Class file minified to make it smaller 
- The minified version, **Accordify.min.js** is only 558 bytes.
- To use **v.2.1**, add this to the bottom of your html page.

```js
    <script src="js/accordify-data.js"></script>
    <script src="js/v.2.1-Accordify-OOP-Class.min.js"></script>
    <script>
        const accordify = new Accordify(".accordify", accordionData);
    </script>
```
- In keeping with the minified theme, you may wish to also use the **.min.css**:
```js
    <link href="css/accordify-styles.min.css" rel="stylesheet">
```

### About the **accordify-data.js** file and how to use it:  
- **accordify-data.js** provides the data for all accordion versions with the exception of **v.1.0**, which is hard-coded.
- **accordify-data.js**, has two keys: **btnText** and **divHTML**. 
- Change the values to be your own text. Suppose you had two accordion menu buttons, **Foo** and **Bar**. Clicking either button expanded that **li** to reveal a div containing a paragraph of **lorem impum** text. This is what the objects for that would look like:
```js
    {btnText:'Foo', divHTML:`<p>Lorem ipsum dolor sit amet.</p>`},
    {btnText:'Bar', divHTML:`<p>Recusandae provident asqit.</p>`},
```
- **btnText** appears on the individual accordion button. This is what you see to click on.
- **divHTML** is the content that shows/hides when accordion opens/closes.

**Adding images to the Accordify Accordion Menu**
- For **v.1.0**, just hard-code the image path into the div:
```js
    <li>
        <button>Blather<span>+</span></button>
        <div>
            <image src='blee-blah.jpg'>
            <p>Blah blee foo bar tic tac toe.</p>
        </div>
    </li>
```
- For **v.1.5+**, the versions that use the dataset, add the **img** tag and any other html directly in the **divHTML** string:

```js
  {btnText:'Cat', divHTML:`<img src="cat.jpg"><p>Meet my cat!</p>`}
```
