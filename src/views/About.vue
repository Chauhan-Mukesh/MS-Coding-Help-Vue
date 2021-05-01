<template>
  <div class="about is-family-code">
    <section class="hero has-background-grey is-fullheight is-fullheight-with-navbar has-text-left">
      <div class="hero-body has-text-light">
        <div class="container has-text-light reveal-text">
          <p class="title has-text-light">
            Hello! I am
          </p>
          <p class="title is-1 has-text-light">
            Mukesh Chauhan
          </p>
          <p class="subtitle is-3 has-text-light">
            Full Stack Web Developer
          </p>
        </div>
      </div>
    </section>
    <!-- About -->
    <section class="section" id="about">
      <!-- Title -->
      <div class="section-heading">
        <p class="title is-size-3">About Me</p>
        <h4 class="subtitle is-5 mb-6">Jack of all trades, master of "some"</h4>
        <div class="container">
          <p>Web developer and <strong>still learning, but have 0 years experience</strong>. Looking for an opportunity
            to work and upgrade,<br> as well as being involved in an organization that
            believes
            in gaining a competitive edge and giving back to the community.</p> I have a degree in the
          field of
          <strong>BCA ( Bachelor of Computer Applications) </strong>, good knowledge of modern Web techniques and love
          for
          <strong>Coffee</strong>
        </div>
      </div>
      <div class="columns has-same-height is-gapless">
        <div class="column">
          <!-- Profile picture -->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/me.jpeg" alt="Placeholder image">
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <!-- Skills -->
          <div class="card">
            <div class="card-content skills-content">
              <p class="title is-4">Skills</p>
              <div class="content">

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>JavaScript:</strong>
                        <br>
                        <progress class="progress is-primary" value="30" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Vue.js:</strong>
                        <br>
                        <progress class="progress is-primary" value="25" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>HTML5/CSS3</strong>
                        <br>
                        <progress class="progress is-primary" value="40" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Python</strong>
                        <br>
                        <progress class="progress is-primary" value="30" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Databases-MySQL/sqlite3</strong>
                        <br>
                        <progress class="progress is-primary" value="32" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns has-same-height is-gapless">
        <div class="column">
          <!-- Profile -->
          <div class="card has-background-light has-text-dark">
            <div class="card-content">
              <h3 class="title is-4">Profile</h3>

              <div class="content">
                <table class="table-profile">
                  <tr>
                    <th colspan="1"></th>
                    <th colspan="2"></th>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Ahmedabad, Gujrat, India</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>+91 8128494###</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>mrchauhan93143@gmail.com</td>
                  </tr>

                </table>
              </div>
              <br>
              <div class="buttons has-addons is-centered">
                <a href="https://github.com/Chauhan-Mukesh/" class="button is-link" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/chauhan-mukesh-965a57195/" class="button is-link" target="_blank">LinkedIn</a>
                <a href="https://twitter.com/M8128494414" class="button is-link" target="_blank">Twitter</a>
                <a href="https://stackoverflow.com/users/11138858/chauhan-mukesh" class="button is-link"
                   target="_blank">Stack OverFlow</a>
                <a href="https://www.instagram.com/mukeshchauhan3106/" class="button is-link"
                   target="_blank">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<style scoped>

.has-same-height .card {
  height: 320px;
  overflow: hidden;
}

.card-content h3 {
  text-align: center;
}

.table-profile td,
th {
  border: none !important;
}

.table-profile td:first-of-type {
  font-weight: bold;
}

.skills-content .media {
  margin: 0 !important;
  padding: 4px !important;
  border: 0 !important;
}

.skills-content .progress {
  height: 4px !important;
}

.portfolio-container .card {
  margin-bottom: 2em;
}

.section-heading {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 6em;
}


:root {
	--delay: 0;
	--duration: 10000ms;
	--iterations: 1;
}
/* •·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•· */


.reveal-text,
.reveal-text::after {
	animation-delay: var(--animation-delay, 2s);
	animation-iteration-count: var(--iterations, 1);
	animation-duration: var(--duration, 10000ms);
	animation-fill-mode: both;
	animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}

.reveal-text {
	--animation-delay: var(--delay, 0);
	--animation-duration: var(--duration, 10000ms);
	--animation-iterations: var(--iterations, 1);
	position: relative;
	font-size: 10vw;
	animation-name: clip-text;
	color: #FFF;
	white-space: nowrap;
	cursor: default;

	&::after {
		content: "";
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f2f98b;
		transform: scaleX(0);
		transform-origin: 0 100%;
		pointer-events: none;
		animation-name: text-revealer;
	}

}


@keyframes clip-text {
	from {
		clip-path: inset(0 100% 0 0);
	}
	to {
		clip-path: inset(0 0 0 0);
	}
}


@keyframes text-revealer {

	0%, 50% {
		transform-origin: 0 50%;
	}

	60%, 100% {
		transform-origin: 100% 50%;
	}


	60% {
		transform: scaleX(1);
	}

	100% {
		transform: scaleX(0);
	}
}
</style>