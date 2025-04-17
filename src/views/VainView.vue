<template>
    <section>
        <h2>Skills</h2>
        <p>below is a list of my technical skills, primarily <i>(because that's what I believe I can monetize and profit
                off of and employers look for)</i>, which I am apt to work with and understand😁.</p>
        <ul :class="$style.flow">
            <li v-for="skill in skills" :key="skill.name">

                <p>
                    {{ skill.name }}
                </p>
                <img :src="`https://cdn.simpleicons.org/${skill.icon.slug}?viewbox=auto`" :alt="skill.name"
                    :title="skill.description" height="120" width="120" />
                <!-- <p>{{ skill.description }}</p> -->
            </li>
        </ul>
        <p><small>There are many other languages frameworks, skills, and abilities that I don't list here because there
                icons aren't availble on <a href="https://simpleicons.org/" target="_blank">simpleicons.org</a> likely
                because of the company's licensing and trademark policies for their branding😒</small></p>
    </section>
    <section>
        <h2
            title="no not experience because my-, scratch that,  &quot;experience&quot; is so much more than the hours logged at work: no matter how enormous or well-paid. Life is experience. And if you're life is summed up in your work history, then fine. But not so for me — and I'm glad for it.">
            Jobs</h2>
        <p>I've been fortunate to work at jobs I really do enjoy and had even better colleagues who are loving and not
            deluded by work or status (<i>at least I hope they deluded not and genuinely prioritizing workplace prestige
                over humanity: respect, honesty, connection, and empathy primarily</i>)</p>
        <ul></ul>
    </section>
</template>

<script setup lang="ts">
    import { siAndroid, siMacos, siUbuntu,siDotnet, siMicroeditor, siLinux, siAndroidstudio, siKotlin, siFlutter, siJavascript, siSpring, siGo, siJetbrains, siCodeberg, siCodeium, siVscodium, siNushell, siDocker, siZoom, siNuxt, siAngular, siReact, siBootstrap, siNodemon, siDeno, siBun, siGit, siGithub, siGithubactions, siGithubcopilot, siGithubpages, siGoogle, siGoogledocs, siGooglesheets, siFirebase, siFireship,si1password,siDiscord, type SimpleIcon, siNpm, siYarn, siMongodb, siTypescript,siNodedotjs, siSqlite, siMysql, siPostgresql } from 'simple-icons';
    const jobs = [];
    const skills: { icon: SimpleIcon, name: string, description: string; }[] = [
        {icon:siGoogle,name:'Google',description:"more than a search engine, but tool for many uses for everyday"},
        {icon:siGoogledocs,name:'Google Docs',description:"Google workspaces word-processor of which I am an afficiando"},
        {icon:siGooglesheets,name:'Google Sheets',description:"google's excel which I excel at"},
        {icon:siFirebase,name:'Firebase',description:"a cloud platform for the web and mobile; simple and scalable backend-as-a-service"},
        {icon:siUbuntu,name:'Ubuntu',description:"my go-to linux distro (for now), reliable and stable"},
        { icon: siGithubactions, name: 'Github Actions', description: "Github's CI/CD platform, a tool for automating the build, test, and deployment of your software" },
        { icon: siGithubcopilot, name: 'Github Copilot', description: "Github's A.I. code assitant (and first iirc) which has only gotten better with time" },
        { icon: siGithubpages, name: 'Github Pages', description: "Github's static web hosting platform" },
            {icon:siDiscord,name:'Discord',description:"I've created app and bots and chatting"},
        { icon: siAndroid, name: 'Android', description: 'A loyal team Android supporter and user; comfortable with the platform and its ecosystem' },
        { icon: siMacos, name: 'macOS', description: 'A late bloomer in the apple ecosystem, but I fell in love with its simplicity and suite of available developer tools with it Unix based system' },
        // { icon: siWindows, name: 'Windows', description: 'your average windows power user from its cmd shell, powershell, to its Microsoft suite of products: I\'ve become a bit of an excel wizard (∩｀-´)⊃━☆ﾟ.*･｡ﾟ' },
        { icon: siLinux, name: 'Linux', description: 'Not my everyday OS but by far my favourite (Arch btw). I love developing on Linux, it\'s just🤌🏿!!. Linux my distant love. Now don\'t get me wrong I can work my way around a terminal, bash out some scripts, and exit vim (at times) I just haven\t had the resources or time to rice up a distro, that\'s my dream.' },
        { icon: siAndroidstudio, name: 'Android Studio', description: 'the IDE for android development; another well-made tool by Jetbrains' },
        { icon: siKotlin, name: 'Kotlin', description: 'I love kotlin and especially it\'s interoperability with Java; excited for its adoption and availability (outside the intellij platform)' },
        { icon: siFlutter, name: 'Flutter', description: "I've worked a bit with flutter and it's widget-ed structure; that seem to quickly descend to the coziest nest I've seen in any language" },
        { icon: siJavascript, name: 'Javascript', description: "oh js, I'm woefully great at it and I don't want to be; get me back to the lower levels😭. But I have fun tho" },
        { icon: siSpring, name: 'Spring', description: "Learning spring with spring boot and it's been fun; anything that keeps my first love of java alive" },
        { icon: siGo, name: 'Golang', description: "it took awhile but I finally stepped into go and understand the love" },
        { icon: siJetbrains, name: 'Jetbrains', description: "the king of IDEs, and tyrant of [disk] space; a small price to pay for performant, efficient, and effective tools (+ the large price to pay for the subscription😂)" },
        { icon: siVscodium, name: 'Visual Studio Code', description: "the code-editor for whatever language, framework, or project you need" },
        { icon: siCodeberg, name: 'Codeberg', description: "a free and open source alternative to github" },
        { icon: siCodeium, name: 'Codeium', description: "my go to for A.I. code completion and assistance; and they don't participate in the unauthorized scraping of repos for test data(?)" },
        { icon: siNushell, name: 'Nushell', description: "a nu type of shell; genetically altered! By far my favourite, simplest, and versatile shell I've had the pleasure to work with" },
        { icon: siMicroeditor, name: 'Micro', description: "my go-to terminal text editor; one day I'm might be able to join the (n)vim community" },
        { icon: siDocker, name: 'Docker', description: "a container platform and tool for running applications in containers; I've dabbled a bit with it" },
        { icon: siZoom, name: 'Zoom', description: "bit of an expert; zero accidental un-mutings, video, or presentation problems thank you very much" },
        { icon: siNuxt, name: 'Nuxt', description: "server-side framework for Vue that just works" },
        { icon: siAngular, name: 'Angular', description: "the only other JS framework that rivals react... in how much I don't like it; it's a bit verbose and JAVA heavy for javascript which is kinda good kinda of working to the languages weaknesses (weak point in the community and common application at least" },
        { icon: siReact, name: 'React', description: "oh react, how I hate it, but yes I can React.js. Reluctantly." },
        { icon: siBootstrap, name: 'Bootstrap', description: "First CSS framework I've worked with. Easily start implementing functionality and structure to a project" },
        {icon:siGit,name:'Git',description:'Git is a distributed version control system'},
        {icon:siGithub,name:'Github',description:'Github is a code repository and a collaboration platform for software developers'},
        {icon:siNpm,name:'npm',description:'the node package manager: the js devs dependency'},
        {icon:siYarn,name:'Yarn',description:'like node but a bit more performant when working with multiple projects'},
        {icon:siSqlite,name:'SQLite',description:'a simpler database'},
        {icon:siMysql,name:'MySQL',description:'the standard open source relational database'},
        {icon:siPostgresql,name:'PostgreSQL',description:'the hyper-extended mysql for robustness and performance'},
        {icon:siNodedotjs,name:'Node.js',description:"Chrome's V8 engine that put JavaScript on the server 😭(;´༎ຶД༎ຶ`)😭"},
        {icon:siMongodb,name:'MongoDB',description:'the no-sql database; a document database with a schema, a query language, and a data model'},
        {icon:siDeno,name:'Deno',description:'a runtime for javascript and typescript; my current #1 choice for dreaded javascript development'},
        {icon:siBun,name:'Bun',description:"the blazingly fast runtime for javascript and typescript; my current #2 eaten by the dino but it's still very close" },
        {icon:siTypescript,name:'Typescript',description:'adding type safety and structure to javascript, but at what cost?'},
        {icon:siNodemon,name:'Nodemon',description:'my devtool for arbitrary file based script or app execution '},
        {icon:siDotnet,name:'.NET',description:'the .NET framework; an open source framework for creating cross-platform applications'},
        {icon:si1password,name:'1Password',description:'a password manager and secrets manager, great for development and security'},


    ].sort((a, b) => (a.name.length * new Date().getDate()) - (b.name.length * navigator.hardwareConcurrency));
</script>

<style module>
    .flow {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: baseline;
        justify-content: space-around;

        padding: 0;


        list-style: none;

        text-align: center;
    }
</style>