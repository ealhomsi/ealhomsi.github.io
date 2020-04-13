## [eliashomsi.com](https://eliashomsi.com) 

My personal website. Easily modifiable, and built using modern javascript with Node.js, React, Express, React-Router, Hot Module Reloading, Webpack and many other technologies.
The master branch of this repository contains a simplified version of my website intended for serverless hosting on github pages. 
This website is hosted on github pages.

### Dependencies:

Tested with:
* node >= v8, v9, v10, v11
* Recommend [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) >= 1.0.0


### Set up:


1. To download the repository and install dependencies, run the following commands:
```bash
git clone git@github.com:ealhomsi/ealhomsi.github.io.git
git fetch && git checkout dev
cd ealhomsi.github.io
yarn
```
If you do not have `yarn` installed, you may run `npm install` instead.

2. Next, you should create a `.env` file. To do this, run:
```bash
cp sample.env .env
```
and set values as appropriate. Most people will not need to make changes.

3. Run the following command to build the react application and serve it with hot module reloading:
```bash
npm run dev
```
Navigate to `<ip>:<port>` default: [http://localhost:7999](http://localhost:7999) to view the website.

4. Deployment on master branch
```bash
npm run deploy
```

5. Setup custom domain
Decide how and where you are going to host this project. I recommend purchasing your own domain name from [Google Domains](https://domains.google). If you would like to host on github pages, run `npm run predeploy && npm run gh-pages`. Configure your domains DNS record. See [here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for more information.

If using a custom url, modify the `CNAME` file to point to your URL. Modify the npm deploy script by appending `&& cp CNAME dist/` to the end of the `predeploy` line in the scripts section of package.json.

6. Setup Contentful CMS
Most of the contents on this website is hosted through [ContentfulCMS](https://contentful.com). To run this as a headless server while allowing the flexibility of dynamically modifying content this is a nice solution. You would need to have a setup of of content models like: category, course, degree, position, project and skill similar to mine.

### License
[MIT](./Public/LICENSE)

### Forked from
- [@mldangelo](https://github.com/mldangelo)
