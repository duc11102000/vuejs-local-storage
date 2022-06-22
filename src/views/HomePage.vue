<template>
  <div class="home">
    <v-app>
      <v-main>
        <section id="about" class="about-mf sect-pt4 route">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="box-shadow-full">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-sm-6 col-md-5">
                          <div class="about-img">
                            <img
                              src="../assets/logo.png"
                              class="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-7">
                          <div class="about-info">
                            <p>
                              <span class="title-s">Name: </span>
                              <span>Nguyễn Hữu Đức</span>
                            </p>
                            <p>
                              <span class="title-s">Profile: </span>
                              <span>Front-end developer</span>
                            </p>
                            <p>
                              <span class="title-s">Email: </span>
                              <span>duc11102000@gmail.com</span>
                            </p>
                            <p>
                              <span class="title-s">Phone: </span>
                              <span>0968765936</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="skill-mf">
                        <p class="title-s">Skill</p>
                        <span>HTML</span> <span class="pull-right">85%</span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 85%"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>CSS3</span> <span class="pull-right">75%</span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 75%"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>JAVASCRIPT</span>
                        <span class="pull-right">60%</span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 60%"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="about-me pt-4 pt-md-0">
                        <div class="title-box-2">
                          <h2 class="title-left">About me</h2>
                        </div>
                        <p class="lead">
                          My name is Nguyễn Hữu Đức. I currently study in HUTECH
                          university and in a internship duration in TMA
                          solutions.
                        </p>
                        <p class="lead">
                          I have experience with HTML, CSS, Javascript. I also
                          have experience with some library and framework like:
                          Bootstrap, Jquery.
                        </p>
                        <p class="lead">
                          With my knowledge and skill gained during internship
                          and school, i am very confident with my skill to
                          become front-end developer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- <footer-page></footer-page> -->
      </v-main>
    </v-app>
    <!-- End About Section -->
  </div>
</template>

<script>
// import FooterPage from "../components/FooterPage.vue";
export default {
  components: {
    // FooterPage,
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
}

/* .row {
  margin-top: 20px;
}

.col-right {
  display: flex;
  position: relative;
}

.col-right h1 {
  position: absolute;
}

.col-right p {
  position: absolute;
  top: 50%;
} */

.about-mf .box-shadow-full {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.about-mf .about-img {
  margin-bottom: 2rem;
}
.about-mf .about-img img {
  margin-left: 10px;
}
@media (min-width: 767px) {
  .about-mf .box-pl2 {
    margin-top: 3rem;
    padding-left: 0rem;
  }
}

.skill-mf span {
  color: #4e4e4e;
}
.skill-mf .progress {
  background-color: #cde1f8;
  margin: 0.5rem 0 1.2rem 0;
  border-radius: 0;
  height: 0.7rem;
}
.skill-mf .progress .progress-bar {
  height: 0.7rem;
  background-color: #0078ff;
}
</style>