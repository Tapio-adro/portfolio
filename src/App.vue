<template>
  <nav id="nav">
    <div @click="curPage = 'projects'" :class="{active: curPage == 'projects'}">My Projects</div>
    <div @click="curPage = 'about'" :class="{active: curPage == 'about'}">About me</div>
  </nav>
  <main id="content">
    <div id="projects" v-if="curPage == 'projects'">
      <div id="main" class="box_shadow">
        <div class="container">
          <h1 class="title">{{main.title}}</h1>
          <a :href="main.link" class="img_link" target="_blank">
            <div class="img_title"><div>Visit page</div></div>
            <img src="./assets/img/img1.png" alt="project1">
          </a>
          <ul>
            <li><span>Description</span>: {{main.description}}</li>
            <li><span>Technologies</span>: {{main.technologies}}</li>
            <li v-if="main.layout != ''" class="last"><span>Layout</span>: {{main.layout}}</li>
          </ul>
          <div class="links">
            <a :href="main.link" target="_blank" class="page">Go to page</a>
            <a :href="main.github" target="_blank" class="github">GitHub Repo</a>
          </div>
        </div>
      </div>
      <div id="projects_holder">
        <div 
          class="project"
          v-for="(project, index) in projects" :key="index"
        >
          <div class="container">
            <h1 class="title">{{project.title}}</h1>
            <a :href="project.link" class="img_link" target="_blank">
              <div class="img_title"><div>Visit page</div></div>
              <img :src="require('./assets/img/img' + (index + 2) +'.png')" alt="project1">
            </a>
            <ul>
              <li><span>Description</span>: {{project.description}}</li>
              <li><span>Technologies</span>: {{project.technologies}}</li>
              <li v-if="project.layout != ''"><span>Layout</span>: {{project.layout}}</li>
            </ul>
            <div class="links">
              <a :href="project.link" target="_blank" class="page">Go to page</a>
              <a :href="project.github" target="_blank" class="github">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" v-if="curPage == 'about'">
      <h1>Ostap Terentiuk</h1>
      <div id="summary">
        <h2>Summary</h2>
        <span>{{summary}}</span>
      </div>
      <div id="skills">
        <div>
          <h2>Hard skills</h2>
          <ul>
            <li v-for="(skill, index) in hardSkills" :key="index">
              {{skill}}
            </li>
          </ul>
        </div>
        <div>
          <h2>Soft skills</h2>
          <ul>
            <li v-for="(skill, index) in softSkills" :key="index">
              {{skill}}
            </li>
          </ul>
        </div>
      </div>
      <div id="contact_me">
        <h2>Contact me</h2>
        <div id="contacts">
          <div>
            <a href="https://t.me/tap_io" target="_blank">
              <i class="fa fa-telegram" aria-hidden="true"></i>&nbsp;Telegram
            </a>
          </div>
          <div id="email">
            <span
              @click="copyEmail()"
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
              terentuk4321@gmail.com
            </span>
          </div>
          <Teleport to="body">
            <CopiedModal :show="doShowCopied"></CopiedModal>
          </Teleport>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CopiedModal from './components/CopiedModal.vue'

export default {
  name: 'App',
  data() {
    return {
      projects: [
        {
          title: '4Dots',
          technologies: 'plain HTML/CSS/JS',
          description: 'Simple grid-based game written in JavaScript, where you need to capture all the enemies cells to win.',
          github: 'https://github.com/Tapio-adro/4dots',
          link: 'https://tapio-adro.github.io/4dots/',
          layout: ''
        },
        {
          title: 'Timeloops',
          technologies: 'Vue.js, Sass',
          description: 'App that allows you to create any unique countdown loops.',
          github: 'https://github.com/Tapio-adro/timeloops',
          link: 'https://tapio-adro.github.io/timeloops/',
          layout: 'adaptive, for phone devices'
        }
      ],
      main: {
        title: 'Muiltiply-trainer',
        technologies: 'plain HTML/CSS/JS',
        description: 'App consists of two parts. First is actualy for learning multiplication table. Second is for training in solving fractional equations, also has exslusive feature of creating step by step explanation for every equation.',
        github: 'https://github.com/Tapio-adro/multiply-trainer',
        link: 'https://tapio-adro.github.io/multiply-trainer/index.html',
        layout: 'adaptive, for phone devices with 1 break-point'
      },
      curPage: 'projects',
      summary: 'Passionate junior front-end developer with a desire to learn and grow. Have solid knowledge of HTML, CSS and JS. Ready to develop high-quality software with Vue.js.',
      hardSkills: [
        'HTML5/CSS3/JS.',
        'SASS/SCSS preprocessors', 
        'Adaptive layout, layout for mobile devices', 
        'Flexbox, Grid', 
        'OOP methodology', 
        'Vue.js', 
        'Visual Studio code IDE.'
      ],
      softSkills: [
        'Fast-learning',
        'Problem-solving',
        'Critical thinking',
        'Organizational',
        'Resourcefulness',
        'English: intermediate in written, basic in speaking',
      ],
      doShowCopied: false
    }
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText('terentuk4321@gmail.com');
      this.doShowCopied = true;
      setTimeout(() => {
        this.doShowCopied = false;
      }, 1000)
    }
  },
  components: {
    CopiedModal
  }
}
</script>

<style></style>
