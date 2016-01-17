Ionic Collapsible Comment Threads
===================

Threaded comments for Ionic and Angular. Used for collapsible nested comment threads with multiple levels of indendation for Wordpress, Reddit or various other social networks. Can also be used to display any other list of comments.

## Install

`bower install ionic-threads`

## Usage

Include `ionic.threads.js` and `ionic.threads.css` after the rest of your Ionic and Angular includes.

```html
<script src="lib/ionic-threads/ionic.threads.js"></script>
<link href="lib/ionic-threads/ionic.threads.css" rel="stylesheet">
```

Add `ionic.contrib.ui.ionicThreads` as a module dependency of your app. Then use the following AngularJS directives:

```html
<ion-thread comments="comments"></ion-thread>
```

## Running the demo

Included is an example app that loads the first few posts from the Reddit frontpage, clicking on a post leads to the comment section.

Go to `/example` folder and run:
`npm install`
`ionic serve`

## Customizing

Open up `ionic.threads.js` and change the `ionComment` template and add your `<ion-option-button>` of choice and add the code for the button events.

Included is the `ionic.threads.scss` if you want to customize the styling. There are variables for colors, font sizes and thread indendation. Add `ionic.threads.scss` to your `scss` folder and include it in your `ionic.app.scss` file with:

```javascript
@import "www/lib/ionic-threads/ionic.threads.scss";
```

## Used in

Ionic threads is currently used in Updraft for Reddit (www.upvote.io)

## License

MIT