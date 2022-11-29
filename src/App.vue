<template>
  <nav id="nav">
    <div 
      v-for="(page, index) in pages" :key="index"
      @click="curPage = page[0]"
      :class="{active: curPage == page[0]}"
    >{{ page[1] }}</div>
  </nav>
  <main id="content" v-if="curPage != 'home'">
    <div id="projects" v-if="curPage == 'projects'">
      <div id="main" class="box_shadow">
        <div class="container">
          <h1 class="title">{{main.title}}</h1>
          <a :href="main.link" class="img_link" target="_blank">
            <div class="img_title"><div>Visit page</div></div>
            <img src="./assets/img/img1.png" alt="project1">
          </a>
          <ul>
            <li><span>Description</span>: 
              {{main.description[0]}}
              <span class="double_link_highlighted" :class="{active: doubleLinkPart == 'first'}">
                {{main.description[1]}}
              </span>
              {{ ' ' }}
              <span class="double_link_highlighted" :class="{active: doubleLinkPart == 'second'}">
                {{main.description[2]}}
              </span>
            </li>
            <li><span>Technologies</span>: {{main.technologies}}</li>
            <li v-if="main.layout != ''" class="last"><span>Layout</span>: {{main.layout}}</li>
          </ul>
          <div class="links">
            <div id="double_link_holder"
              @mouseover="hideDoubleLink = false"
              @mouseleave="hideDoubleLink = true"
              v-auto-animate
              :class="{active: !hideDoubleLink}"
            >
              <div v-if="hideDoubleLink">Go to page</div>
              <div v-else id="double_link">
                <a :href="main.links[0]" target="_blank" class="left"
                  @mouseover="doubleLinkPart = 'first'"
                  @mouseleave="doubleLinkPart = ''"
                >First part</a>
                <i class="fa fa-arrows-h" aria-hidden="true"></i>
                <a :href="main.links[1]" target="_blank" class="right"
                  @mouseover="doubleLinkPart = 'second'"
                  @mouseleave="doubleLinkPart = ''"
                >Second part</a>
              </div>
            </div>
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
            <CopiedModal :show="showCopied"></CopiedModal>
          </Teleport>
        </div>
      </div>
    </div>
  </main>
  <div id="home" v-if="curPage == 'home'">
    <div id="full_screen">
      <div class="wrapper">
        <div class="title">
          Hi, my name is
          <br>
          <div class="name">Ostap Terentiuk</div>
          <div class="create">I develop web applications with <span>Vue</span></div>
        </div>
        <div id="external_links">
          <div class="link_holder">
            <a href="https://github.com/Tapio-adro?tab=repositories" target="_blank" class="github">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <div class="link_caption">Github</div>
          </div>
          <div class="link_holder">
            <a href="https://www.linkedin.com/in/ostap-terentiuk" target="_blank" class="linkedin">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <div class="link_caption">LinkedIn</div>
          </div>
        </div>
      </div>
    </div>
    <div id="internal_links">
      <div id="links_inner">
        <div
          v-for="(page, index) in pagesHome" :key="index"
        >
          <div
            v-if="page[0] != ''"
            class="link"
            @click="curPage = page[0]; scrollToTop()"
          >
            {{ page[1] }}
          </div>
          <div class="center_elem" v-else>
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            &nbsp;
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
      </div>
      </div>
    </div>
  </div>
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
          technologies: 'originally coded with plain HTML/CSS/JS, functionality extended with Vue.js, Sass',
          description: 'Simple grid-based game written in JavaScript, where you need to capture all the enemies cells to win.',
          github: 'https://github.com/Tapio-adro/4dots',
          link: 'https://4dots.netlify.app/',
          layout: ''
        },
        {
          title: 'Timeloops',
          technologies: 'HTML, JS, Vue.js, Sass',
          description: 'App that allows you to create any unique countdown loops.',
          github: 'https://github.com/Tapio-adro/timeloops',
          link: 'https://timeloops.netlify.app/',
          layout: 'adaptive, for phone devices'
        }
      ],
      main: {
        title: 'Muiltiply-trainer',
        technologies: 'plain HTML/CSS/JS',
        description: [
          'App consists of two parts. ', 
          'First is actualy for learning multiplication table.', 
          'Second is for training in solving fractional equations, also has exslusive feature of creating step by step explanation for every equation.'
        ],
        github: 'https://github.com/Tapio-adro/multiply-trainer',
        links: [
          'https://tapio-adro.github.io/multiply-trainer/index.html',
          'https://tapio-adro.github.io/multiply-trainer/fraction/index.html'
        ],
        layout: 'adaptive, for phone devices with 1 break-point'
      },
      curPage: 'home',
      pages: [
        ['home', 'Home'],
        ['projects', 'My Projects'],
        ['about', 'About me']
      ],
      pagesHome: [],
      summary: 'Passionate junior front-end developer with a desire to learn and grow. Have solid knowledge of HTML, CSS and JS. Ready to make efforts to develop quality software with Vue.js.',
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
        'Resourcefulness',
        'English: intermediate in written and spoken',
      ],
      showCopied: false,
      hideDoubleLink: true,
      doubleLinkPart: ''
    }
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText('terentuk4321@gmail.com');
      this.showCopied = true;
      setTimeout(() => {
        this.showCopied = false;
      }, 1000)
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  beforeMount() {
    this.pagesHome = this.pages.slice(1);
    this.pagesHome.splice(1, 0, ['',''])
  },
  components: {
    CopiedModal
  }
}
</script>

<style></style>
