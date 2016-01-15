Ionic App Base
=====================

Project uses node uuid to create unique id's for each note. Do the following to install note uuid plugin:

1. run: bower install node-uuid --save
1. include the following script tag above the ionic.bundle.js script tag in your index.html:
  ```<script src="lib/node-uuid/uuid.js"></script>```

A starting project for Ionic that optionally supports using custom SCSS.

##This project is available for ios and android 5.0.1 and 5.0.0
1. Add Android to ionic
```$ ionic platform add android``
1. Check cordova android version or add cordova
```$ cordova platform version android```
1. Install android SDK API 21 package
```$ android```
1. Make sure project.properties file has 'target=android-21'
1. Compile android code
```$ ionic build android```
1.Run Android
```$ ionic run andriod```

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic
```

Then run:

```bash
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.
