<script setup lang="ts">
import { IconType } from "~~/.nuxt/svg-transformer";
import { useTheme } from "~/store";

type ListItem = { icon: IconType };

const tech = {
  tools: [
    { icon: "logo-css" },
    { icon: "logo-scss" },
    { icon: "logo-tailwind" },
    { icon: "logo-javascript" },
    { icon: "logo-vuejs" },
    { icon: "logo-nuxtjs" },
    { icon: "logo-nodejs" },
    { icon: "logo-expressjs" },
    { icon: "logo-mongodb" },
  ],
  tech: [
    { icon: "logo-pwa" },
    { icon: "logo-firebase" },
    { icon: "logo-heroku" },
    { icon: "logo-npm" },
    { icon: "logo-gitlab" },
    { icon: "logo-wasm" },
  ],
} as { tools: ListItem[]; tech: ListItem[] };

const socials = [
  { name: "github", link: "https://github.com/Sirkastik" },
  { name: "linkedin", link: "https://www.linkedin.com/in/rioba-victor/" },
  {
    name: "upwork",
    link: "https://www.upwork.com/freelancers/~013fdb2112c2d21183",
  },
] as const;
</script>

<template>
  <div :class="[useTheme().isDark ? 'dark' : 'light']">
    <header class="flex justify-between items-center px-6 py-6 text-[color: var(--headline)]">
      <nuxt-link to="/" class="flex items-center gap-2">
        <SvgIcon name="musical-brain" />
        <span>rioba.dev</span>
      </nuxt-link>

      <div class="links">
        <nuxt-link to="/">About</nuxt-link>
        <a href="./projects.html">Projects</a>
        <a href="./contact.html">Contact</a>
      </div>
    </header>
    <article class="py-4 px-40">
      <div class="relative h-[39rem] flex justify-start items-end mb-16">
        <div :class="`rounded-md absolute inset-0 h-[32rem] w-full bg-[url(~/assets/img/bg1.jpg)] bg-cover bg-center`">
        </div>
        <div class="ml-12 mr-4 h-40 w-40 rounded-[50%] relative overflow-hidden outline-1 outline-red">
          <img class="w-full h-full" src="~/assets/img/photo.jpg" alt="My-Photo" />
        </div>
        <div class="mb-4">
          <h1 class="text-[2rem]">Victor Rioba</h1>
          <h4 class="flex gap-2">
            <SvgIcon name="briefcase"></SvgIcon>
            <span class="italic">Software Engineer</span>
          </h4>
        </div>
      </div>

      <h2 class="text-[1.3rem] font-bold text-[color: var(--headline)]">
        About Me
      </h2>
      <p class="px-10 py-8 leading-6">
        A Full Stack developer specializing in Front End web development with
        incredible skills in creating successful websites that meet customer
        needs. I am fully proficient in Vue JS, Node JS, MongoDB and Firebase
        Services; well-versed in design standards and user preferences.
      </p>

      <div class="flex justify-around mb-16">
        <LazyCircularList :list="tech.tools" name="Tools" icon="code" />

        <LazyCircularList :list="tech.tech" name="Technologies" icon="briefcase" />
      </div>

      <h2>Work History</h2>
      <div class="work section">
        <div class="entry">
          <span class="time italic">2022-12 - Current</span>
          <h3 class="text-[1.2rem]">Backend Engineer</h3>
          <h5 class="opacity-80">Outlier.org, US(Remote)</h5>
        </div>
        <div class="entry">
          <span class="time italic">2022-11 - Current</span>
          <h3 class="text-[1.2rem]">Frontend Engineer</h3>
          <h5 class="opacity-80">Inisev, US(Remote)</h5>
        </div>
        <div class="entry">
          <span class="time italic">2022-02 - 2022-11</span>
          <h3 class="text-[1.2rem]">Full Stack Engineer</h3>
          <h5 class="opacity-80">Dreamax LTD, Israel(Remote)</h5>
        </div>
        <div class="entry">
          <span class="time italic">2021-04 - 2022-01</span>
          <h3 class="text-[1.2rem]">Frontend Developer</h3>
          <h5 class="opacity-80">Lotus Designs, Nairobi, Kenya</h5>
        </div>
      </div>

      <h2>Education</h2>
      <div class="edu section">
        <div class="entry">
          <span class="time">2018-08 - 2022-04</span>
          <h3>Bachelor of Science: Computer Science</h3>
          <h5>Moi University - Eldoret</h5>
        </div>
        <div class="entry">
          <span class="time">2014-01 - 2017-12</span>
          <h3>High School Diploma - Grade: [A-]</h3>
          <h5>Mang'u High School - Thika</h5>
        </div>
      </div>

      <h2>Interests</h2>
      <div class="interests section">
        <ul>
          <li>
          <li> • Learning</li>
          </li>
          <li>
          <li> • Reading</li>
          </li>
          <li>
          <li> • Writing</li>
          </li>
        </ul>
      </div>
    </article>
    <footer>
      <div class="socials">
        <a v-for="social in socials" :href="social.link" target="_blank">
          <SvgIcon :class="{ 'invert-[50]': social.name === 'github' }" :name="`logo-${social.name}`" />
        </a>
      </div>
      &copy; Victor Rioba <span> • 2021</span>
    </footer>
  </div>
</template>

<style lang="css" scoped>
.italic {
  font-family: "Operator Mono Medium", "Source Code Pro", "SF Mono Regular",
    sans-serif;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.logo {
  width: 3rem;
}

.logo>svg {
  fill: var(--paragraph);
}

.links {
  flex: auto;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
}

header .links a {
  color: var(--btn_txt);
  cursor: pointer;
}

header .links a:hover {
  color: var(--btn_bg);
}

.menu {
  display: none;
  height: 2.3rem;
}

.close {
  display: none;
}

.darker,
.lighter {
  cursor: pointer;
  width: 1.2rem;
}

.info h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section {
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow);
  border-radius: 0.2rem;
  margin: 1rem 0;
  margin-bottom: 3rem;
  line-height: 2;
}

.tools,
.tech,
.learning {
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  flex-wrap: wrap;
}

.section>span {
  height: 4rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section span>img {
  max-height: 100%;
}

#dark .section span>img {
  filter: grayscale(100%);
}

#dark .section .invert>img {
  filter: grayscale(100%);
  filter: invert(50%);
}

.more {
  display: none;
  text-decoration: underline;
  cursor: pointer;
}

.less {
  text-decoration: underline;
  cursor: pointer;
}

.entry {
  border-left: 2px solid var(--paragraph);
  margin: 1.5rem 1rem;
  padding: 1rem;
  position: relative;
}

.entry::after {
  content: "";
  position: absolute;
  height: 1rem;
  width: 1rem;
  background: currentColor;
  top: 0;
  left: 0;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.time {
  opacity: 0.7;
  font-size: 0.9em;
}

footer {
  padding: 0.5rem;
  text-align: center;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 1.5rem;
}

.socials>span {
  width: 2rem;
  cursor: pointer;
}

/* @media screen and (max-width: 680px) {
  .logo {
    width: 2em;
  }

  .menu {
    flex: auto;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    cursor: pointer;
    padding-right: 1rem;
  }

  .links {
    position: fixed;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
    gap: 2rem;
    background: var(--bg);
    z-index: 10;
    opacity: 0;
    pointer-events: none;
  }

  .close {
    display: block;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    height: 3rem;
  }

  article {
    padding: 1rem 1.5rem;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
    padding-left: 1.5rem;
    height: 19rem;
  }

  .intro h1 {
    font-size: 1.8em;
    line-height: 1.3em;
  }

  .mode {
    bottom: 5rem;
  }

  .intro .bg {
    height: 10rem;
  }

  .photo {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    position: relative;
  }

  .photo img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }

  .photo::after {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--bg);
    border-radius: 50%;
    top: -0.25rem;
    left: -0.25rem;
    height: 7.5rem;
    width: 7.5rem;
  }

  .entry > p {
    display: none;
  }

  .more {
    display: block;
  }

  .less {
    display: none;
  }
} */
</style>
