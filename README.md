# Tailwind + React + Typescript + Vite

Project called `Life is just seconds`. It's made of two seconds counters that start once the components are mounted, a `fullscreen` button and a `darkmode feature`

Try it [HERE](https://life-is-just-seconds-vanesascode.vercel.app)

![Captura](https://github.com/vanesascode/exercises-react-typescript-vite/assets/131259155/974e77e9-39a1-4f5f-a158-1b8e99bb0c96)

![Captura2](https://github.com/vanesascode/exercises-react-typescript-vite/assets/131259155/7bb36537-35af-4999-8278-01d1c843b59c)

---

## 🌟VITE

- To create a project:

- [x] run: `npm create vite@latest`

select 'React' as the framework and select 'Javascript' as the variant.

- [x] run: `npm install` to install all the dependencies

---

- To run the project:

- [x] run: `npm run dev`

---

## 🌟DEPLOYMENT - VITE & VERCEL

Prepare your Vite application:

- [x] Run `npm run build`

In Vite, running the npm run build command triggers the build process, which generates a production-ready build of your application, the folder `dist`

If you don't have Vercel installed:

- [x] Create an account in Vercel.com
- [x] Install the Now package in the terminal, globally: `npm install now -g`
- [x] Run: `now` in the terminal, inside the root folder of the project.
- [x] The terminal will ask you your email.
- [x] Then, you'll receive an email in which you will have to verify your credentials.

Deployment steps:

- [x] Run: `now` again.
- [x] It will ask you if you want to deploy. You say Y
- [x] Asks the scope (your name)
- [x] Asks if you want to link to existing project. You say N
- [x] In which directory is your code located? If it's in the root folder just leave it like this: ./
- [x] You want to override the settings? You say N
- [x] You can now get the URL that is in the ✅ production line. It's live!

Add new changes to the live URL

- [x] Run: `now --prod` Then, changes are saved in the same URL you published before.

---

## 🌟TAILWIND

Go to the frameworks guides. [In this case for Vite](https://tailwindcss.com/docs/guides/vite)

- [x] `npm install -D tailwindcss postcss autoprefixer`

- [x] `npx tailwindcss init -p`

---

### tailwind.config.js

- The `content` property is an array that specifies the files which Tailwind CSS should scan for classes.

In this case, it includes the "./index.html" file and all files matching the pattern "./src/\*_/_.{js,jsx}". This means that Tailwind CSS will scan the index.html file and all JavaScript and JSX files inside the src directory for classes to include in the final CSS output.

- The `mode` property is set to `jit`, which stands for "just-in-time" mode. This mode allows Tailwind CSS to generate styles on-demand, resulting in smaller file sizes and improved performance.

- The `theme` property is an object that allows you to customize various aspects of the default styling provided by Tailwind CSS.

In this case, the extend property is an object that includes customizations for colors and fonts. The colors object defines custom color values for the "primary", "secondary", "dimWhite", and "dimBlue" colors. The fontFamily object defines a custom font stack for the "poppins" font.

The `screens` property is an object that defines custom breakpoints for responsive design. It includes various screen sizes such as "xs", "ss", "sm", "md", "lg", and "xl", and their corresponding pixel values.

The `plugins` property is an array that allows you to add additional plugins to Tailwind CSS. In this case, the array is empty, so no additional plugins are being added.

---

## 🌟 Button.tsx file (FULLSCREEN)

To make the button toggle between fullscreen and normal screen, we use the `Fullscreen API` provided by the browser.

```
  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

```
