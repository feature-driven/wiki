import type { Example } from "@site/src/entities/example";

export const VERSIONS = {
    V0: "v0",
    V1: "v1",
    V2: "v2",
};

/**
 * List of site examples
 * @remark Add site here only if you're sure that its allowed to share website link / codebase
 * @example How to add new site?
 * 1. Add new item in `examples` const
 * 2. Fill details (required with "*"):
 *  - *title (should be unique)
 *  - *description (shortly)
 *  - *preview (image preview - `/pages/examples/img/{YOUR_SITE}.[png|jpg|jpeg]`)
 *  - *updatetAt (date of adding on examples list, for highlighting first two weeks)
 *  - *version (FSD version which implemented in your codebase)
 *  - website, source (links for your site)
 *  - tech (e.g. used UIKit/state-management tech)
 * 3. Profit!
 */
export const examples: Example[] = [
    {
        title: "Cardbox",
        description: "The best solutions from developers in one place",
        source: "https://github.com/cardbox/frontend",
        preview: require("./img/cardbox.png"),
        version: VERSIONS.V2,
        updatedAt: "2021-11-12",
        tech: ["react", "effector"],
    },
    {
        title: "Github Client",
        description: "React & GraphQL powered github web-client",
        website: "http://github-client.gq/",
        source: "https://github.com/ani-team/github-client/tree/workshop/feature-sliced-next",
        preview: require("./img/github-client.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-04-26",
        tech: ["react", "graphql", "antd"],
    },
    {
        title: "Todo App (React+Effector)",
        description: "QuickStart todo-app example for React developers (Effector version)",
        website: "https://7b64m.csb.app/",
        source: "https://github.com/feature-sliced/examples/tree/master/todo-app",
        preview: require("./img/todo-app-react-effector.png"),
        version: VERSIONS.V2,
        updatedAt: "2021-07-05",
        tech: ["react", "effector", "antd"],
    },
    {
        title: "Todo App (React+Redux)",
        description: "QuickStart todo-app example for React developers (Redux version)",
        website: "https://kxn7cx-3000.preview.csb.app/",
        source: "https://github.com/EliseyMartynov/fs-rtk",
        preview: require("./img/todo-app-react-redux.png"),
        version: VERSIONS.V2,
        updatedAt: "2022-09-06",
        tech: ["react", "redux", "antd"],
    },
    {
        title: "Todo App (Vue 3)",
        description: "QuickStart todo-app example for Vue developers",
        website: "https://fccls.sse.codesandbox.io/",
        source: "https://github.com/EliseyMartynov/fs-vue",
        preview: require("./img/todo-app-vue.png"),
        version: VERSIONS.V2,
        updatedAt: "2021-12-27",
        tech: ["vue", "vuex", "antd"],
    },
    {
        title: "Todo App (Angular 13)",
        description: "QuickStart todo-app example for Angular developers",
        website: "https://angular-feature-sliced-architecture.netlify.app/",
        source: "https://github.com/Affiction/angular-feature-sliced",
        preview: require("./img/todo-app-angular.png"),
        version: VERSIONS.V2,
        updatedAt: "2022-01-31",
        tech: ["angular", "rxjs"],
    },
    {
        title: "Sharead (demo)",
        description: "Book Marketplace",
        website: "https://dev-sharead.netlify.app/",
        source: "https://github.com/select-name/sharead-frontend",
        preview: require("./img/sharead.png"),
        version: VERSIONS.V2,
        updatedAt: "2021-11-06",
        tech: ["react", "effector", "antd"],
    },
    {
        title: "Projentry (demo)",
        description: "Assistant for your projects",
        website: "https://projentry.netlify.app/",
        source: "https://github.com/ani-team/projentry",
        preview: require("./img/projentry.png"),
        version: VERSIONS.V2,
        updatedAt: "2021-11-06",
        tech: ["react", "antd"],
    },
    {
        title: "Loripsum generator",
        description: "Simple fish text generator",
        website: "https://loripsum-generator.vercel.app",
        source: "https://github.com/yesnoruly/loripsum-generator",
        preview: require("./img/loripsum-generator.png"),
        version: VERSIONS.V2,
        updatedAt: "2021-11-17",
        tech: ["react", "effector"],
    },
    {
        title: "Cast",
        description: "A podcast listening PWA with automated quality assurance",
        website: "https://cast-iu.pages.dev/",
        source: "https://github.com/aabounegm/cast",
        preview: require("./img/cast.png"),
        version: VERSIONS.V2,
        updatedAt: "2022-05-31",
        tech: ["svelte"],
    },
    {
        title: "Draw, I'll Help",
        description: "A drawing app with shape correction powered by ML",
        website: "https://illright.github.io/draw-ill-help/",
        source: "https://github.com/illright/draw-ill-help",
        preview: require("./img/draw-ill-help.png"),
        version: VERSIONS.V2,
        updatedAt: "2022-06-13",
        tech: ["svelte"],
    },
    {
        title: "Rastrr",
        description: "A simple and free graphic editor for novice artists",
        website: "https://rastrr.ru",
        source: "https://github.com/rastrr-editor/client",
        preview: require("./img/rastrr-editor.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-03-25",
        tech: ["svelte"],
    },
    {
        title: "Todo App (ReactNative+Redux)",
        description: "QuickStart todo-app example for ReactNative(Expo) developers",
        website: "https://expo.dev/@berdimyradov/todo-app",
        source: "https://github.com/berdimyradov/fs-rn-todo-app",
        preview: require("./img/fs-rn-todo-app.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-03-27",
        tech: ["react-native", "expo", "redux"],
    },
    {
        title: "Simple Greenhouse App (React+MobX)",
        description:
            "Simple demonstration of how FSD can be implemented with TypeScript, React.js, MobX and Firebase",
        source: "https://github.com/NIRumiantsev/feature-sliced-design",
        preview: require("./img/greenhouse.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-04-17",
        tech: ["react", "mobx", "typescript", "firebase", "mui", "vite"],
    },
    {
        title: "Nukeapp (React+ReduxToolkit)",
        description: "Shopping app build on React/ReduxToolkit stack",
        website: "https://nukeapp.netlify.app/",
        source: "https://github.com/noveogroup-amorgunov/nukeapp",
        preview: require("./img/nukeapp.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-04-24",
        tech: ["react", "redux-toolkit", "typescript", "vite"],
    },
    {
        title: "Sudoku (React+Effector)",
        description: "A simple crossword of numbers on effector / fsd",
        website: "https://sudoku-effector.pages.dev/",
        source: "https://github.com/Shiyan7/sudoku-effector",
        preview: require("./img/sudoku.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-06-08",
        tech: ["react", "effector", "typescript", "vite", "tailwind", "atomic-router"],
    },
    {
        title: "Conduit",
        description:
            "A social blogging site powered by Feature-Sliced Design architectural methodology.",
        website: "https://realworld-fsd.netlify.app/",
        source: "https://github.com/sldk-yuri/realworld-react-fsd",
        preview: require("./img/conduit.png"),
        version: VERSIONS.V2,
        updatedAt: "2023-06-15",
        tech: ["react", "react-router", "react-query", "zustand", "vite", "typescript"],
    },
    // Reverse the list (last examples should be at the top)
].reverse();
