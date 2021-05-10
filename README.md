[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT PREVIEW -->
<p align="center">
  <a href="https://github.com/GleidsonDaniel/poke-rn">
    <img src="images/preview.gif" alt="Logo" width="150" height="300">
  </a>

  <h3 align="center">poke-rn</h3>
</p>

<br />

<!-- ABOUT THE PROJECT -->

## About The Project

Repository made to show my knowledge of react native.

There is not much to talk about the technologies used, given that they are the most used in the market. The only point would be about using swr instead of axios, but it was chosen because of cache management making it unnecessary to use another state management library like a redux or similar.

## 📦 Getting started

This project assumes that you have knowledge of react native and have all the necessary dependencies to run the project, if you have not configured it, follow the [official documentation](https://reactnative.dev/docs/environment-setup), there are a multitude of configurations and variables and the documentation is always up to date.

Installing Dependencies:

```sh
$ yarn
```

Running the app:

```sh
$ yarn start
```

For starting the app on a specfic OS:

```sh
$ yarn ios | yarn android
```

To run on ios devices you need to run the code first

```
$ npx pod-install
```

<br />

## 🛠 Testing

live preview:

<a href="https://gfycat.com/complexlivelygull">
    <img src="https://thumbs.gfycat.com/ComplexLivelyGull-size_restricted.gif" alt="LivePreview" >
</a>

<br />

Generate first the apk to test:

```
$ yarn build:android-release
```

then run the command to run e2e tests using detox

```
$ yarn test:android-release
```

Remember to generate a device with the same configuration of the device on the .detoxrc.json file.

<br />

## ✨ Used technologies

- React + Hooks
- Typescript
- Swr
- Styled Components
- React Navigation
- Prettier
- Detox

<br />

## TODO

- [ ] Storybook documentation
- [ ] More tests

<br />

<!-- CONTACT -->

## Contact

[Daniel Silva](https://www.linkedin.com/in/gleidson10daniel/) - gleidson10daniel@gmail.com

[https://github.com/GleidsonDaniel](https://github.com/GleidsonDaniel)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gleidson10daniel/
