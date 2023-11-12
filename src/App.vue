<template>
  <nav id="nav">
    <a
      v-for="(page, index) in pages" :key="index"
      :class="{active: curPage == page[0]}"
      :href="( '#' + page[0] )"
    >{{ page[1] }}</a>
  </nav>
  <main id="content">
    <section id="home">
      <div id="full_screen">
        <div class="wrapper">
          <div class="title">
            Hi, my name is
            <br>
            <div class="name">Ostap Terentiuk</div>
            <div class="create">
              I develop web applications with <span class="vue">Vue</span> and <span class="react">React</span>
            </div>
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
    </section>
    <section id="projects">
      <h1 id="projects_title">Projects</h1>
      <div id="main" class="box_shadow">
        <div class="container">
          <h1 class="title">{{project.title}}</h1>
          <a :href="project.link" class="img_link" target="_blank">
            <div class="img_title"><div>Visit page</div></div>
            <img :src="require('./assets/img/img1.png')" alt="project1">
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
      <div id="projects_holder">
        <template
          v-for="(project, index) in projects" :key="index"
        >
          <div 
            class="project"
            v-if="index != 0"
          >
            <div class="container"
              v-if="project.title != 'Muiltiply-trainer'"
            >
              <h1 class="title">{{project.title}}</h1>
              <a :href="project.link" class="img_link" target="_blank">
                <div class="img_title"><div>Visit page</div></div>
                <img :src="require('./assets/img/img' + (project.imgIndex) +'.png')" alt="project1">
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
            <div class="container"
              v-else
            >
              <h1 class="title">{{project.title}}</h1>
              <a :href="project.link" class="img_link" target="_blank">
                <div class="img_title"><div>Visit page</div></div>
                <img src="./assets/img/img2.png" alt="project1">
              </a>
              <ul>
                <li><span>Description</span>: 
                  {{project.description[0]}}
                  <span class="link_highlighted" :class="{active: linkPart == '1'}">
                    {{project.description[1]}}
                  </span>
                  {{ ' ' }}
                  <span class="link_highlighted" :class="{active: linkPart == '2'}">
                    {{project.description[2]}}
                  </span>
                  <span class="link_highlighted" :class="{active: linkPart == '3'}">
                    {{project.description[3]}}
                  </span>
                </li>
                <li><span>Technologies</span>: {{project.technologies}}</li>
                <li v-if="project.layout != ''" class="last"><span>Layout</span>: {{project.layout}}</li>
              </ul>
              <div class="links">
                <div id="links_holder"
                  @mouseover="hideDoubleLink = false"
                  @mouseleave="hideDoubleLink = true"
                  v-auto-animate
                  :class="{active: !hideDoubleLink}"
                >
                  <div v-if="hideDoubleLink">Go to page</div>
                  <div v-else id="double_link">
                    <a :href="project.links[0]" target="_blank" class="left"
                      @mouseover="linkPart = '1'"
                      @mouseleave="linkPart = ''"
                    >1</a>
                    <a :href="project.links[1]" target="_blank" class="right"
                      @mouseover="linkPart = '2'"
                      @mouseleave="linkPart = ''"
                    >2</a>
                    <a :href="project.links[2]" target="_blank" class="right"
                      @mouseover="linkPart = '3'"
                      @mouseleave="linkPart = ''"
                    >3</a>
                  </div>
                </div>
                <a :href="project.github" target="_blank" class="github">GitHub Repo</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
    <section id="about">
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
    </section>
  </main>

</template>

<script>
import CopiedModal from './components/CopiedModal.vue'
import projects from './assets/data/projectsData.js'
import { watchSectionsScroll, stopWatchSectionsScroll } from './assets/scripts/watchSectionsScroll.js'

export default {
  name: 'App',
  data() {
    return {
      projects: projects,
      project: projects[0],
      curPage: 'home',
      pages: [
        ['home', 'Home'],
        ['projects', 'My projects'],
        ['about', 'About me']
      ],
      pagesHome: [],
      summary: 'Passionate front-end developer with a desire to learn and grow. Have solid knowledge of HTML, CSS and JS, as well as SASS and TypeScript. Ready to make efforts to develop quality software with React.js or Vue.js.',
      hardSkills: [
        'HTML5/CSS3/JS',
        'TypeScript',
        'React.js', 
        'Vue.js', 
        'Styled components', 
        'SASS/SCSS preprocessors', 
        'OOP methodology', 
        'Visual Studio code IDE.'
      ],
      softSkills: [
        'Fast-learning',
        'Problem-solving',
        'Critical thinking',
        'Resourcefulness',
        'English: intermediate',
      ],
      showCopied: false,
      hideDoubleLink: true,
      linkPart: ''
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
  mounted() {
    watchSectionsScroll();
  },
  beforeUnmout() {
    stopWatchSectionsScroll();
  },
  components: {
    CopiedModal
  }
}
</script>

<style></style>
