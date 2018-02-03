import React, { Component } from 'react'
import Link from 'gatsby-link'
import cssLogo from '../../../assets/css3_unofficial_shaped.png'
import flutterLogo from '../../../assets/flutter-logo.png'
import onTheGridLogo from '../../../assets/on-the-grid-logo.png'
import OptInForm from '../../Forms/OptInForm/HomeOptIn'

class CoursesPage extends Component {
  render() {
    return (
      <main>
        <section className="Hero">
          <h1>Portfolio</h1>
          <h2 style={{ width: '80%' }}>
            Open-source contributions, personal projects, and client work
          </h2>
        </section>
        <section className="Portfolio__Body">
          <ul>
            {/*
            / New LI
            */}
            <li className="Portfolio__item">
              <a className="Portfolio__item-title" href="http://nuggets.cloud/">
                <h2>Nuggets</h2>
              </a>
              <p>
                Nuggets is a collection of easy, bite-sized tutorials and
                developer tools in the web development world. They're designed
                to help newer developers learn new technologies. Ideally you
                could get value out of these in just a couple hours on a
                Saturday afternoon.
              </p>
              <p>
                The first time I wrote a big ol' blog post it was about CSS
                Layout. Since it was out in the world with my name on it, I had
                to *really* make sure I knew what I was talking about. And I was
                shocked at how much this helped me cement these ideas. Since
                then, I've been making these mini-turotials to make sure I'm
                cementing the new technologies I learned.
              </p>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517674600/portfolio_site/Screen_Shot_2018-02-03_at_8.16.09_AM.png"
                alt="nuggets homepage"
              />
              <h4>Currently, Nugget's includes the following tools:</h4>
              <ul>
                <li>
                  <a href="https://ericwindmill.github.io/on-the-grid/">
                    On the Grid -- a CSS Grid Sandbox
                  </a>
                </li>
                <li>
                  <a href="https://dartforwebdevelopers.com">
                    Dart for JS Developers -- Learn the Dart programming
                    language.
                  </a>
                </li>
                <li>
                  <a href="https://layoutbyexample.com">
                    Layout By Example -- A CSS tutorial for layout. Grid,
                    flexbox, etc.
                  </a>
                </li>
              </ul>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517674601/portfolio_site/Screen_Shot_2018-02-03_at_8.15.59_AM.png"
                alt="nuggets homepage"
              />
            </li>
            <li className="Portfolio__item">
              <a
                className="Portfolio__item-title"
                href="https://ericwindmill.github.io/on-the-grid/"
              >
                <h2>On the Grid</h2>
              </a>
              <p>
                On the Grid is perhaps my favorite small project I've ever
                worked on. It's a sandbox of sorts for playing with CSS Grid.
                Now that Grid is almost fully supported in the browsers, it's
                really starting to take off. The API can be a bit confusting,
                which is why I built this thing. It's written in pure front-end
                magic: JS, HTML, and CSS.
              </p>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517674739/portfolio_site/Screen_Shot_2018-02-03_at_8.18.04_AM.png"
                alt="on the grid"
              />
              <p>There's a sandbox mode as well as a tutorial mode.</p>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517674740/portfolio_site/Screen_Shot_2018-02-03_at_8.18.23_AM.png"
                alt="on the grid turotial mode"
              />
            </li>
            <li className="Portfolio__item">
              <a
                className="Portfolio__item-title"
                href="https://github.com/ericwindmill/gatsby-starter-docs"
              >
                <h2>Gatsby.js Documentation Starter</h2>
              </a>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517187375/portfolio_site/Screen_Shot_2018-01-28_at_4.52.19_PM.png"
                alt="screenshot"
                width="300px"
              />
              <p>
                I created and contributed one of the most used stater packs for
                the amazing GatsbyJs Static Site Generator. Gatsby uses the
                power of React, React Router, and GraphQl to make blazing-fast
                static sites that are enjoyable to create.
              </p>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517187375/portfolio_site/Screen_Shot_2018-01-28_at_4.52.30_PM.png"
                alt="screenshot"
              />
              <p>
                The starter that I built is perfect for making docs or tutorial
                sites super fast. It's ready to go out of the box with:
              </p>
              <ul className="starter-docs-features">
                <li>auto-generated Table Of Contents</li>
                <li>Styled-Components</li>
                <li>basic UI</li>
                <li>SEO</li>
                <li>a few UI components</li>
                <li>React Icons</li>
                <li>a custom PrismJs theme</li>
                <li>auto-generated tags and category pages</li>
                <li>supports blog posts and documentation</li>
                <li>Google Analytics</li>
                <li>Disqus comments</li>
                <li>offline-support</li>
                <li>SEO</li>
                <li>React-Helmet</li>
              </ul>
            </li>
            {/*
            / New LI
            */}
            <li className="Portfolio__item">
              <a
                className="Portfolio__item-title"
                href="https://github.com/apptreesoftware/flutter_google_map_view"
              >
                <h2>Flutter Google Map View Plugin</h2>
              </a>
              <p>
                I work for a company that already uses Google's Flutter
                cross-platform framework in production, even though it's in
                alpha. Naturally, there's a lot of features that it doesn't have
                yet, the most notable being Google Maps. The Flutter team
                assures everyone that it's coming, but who knows when. We have
                to have maps, so we wrote our own plugin.
              </p>
              <p>
                I contributed the StaticMaps api. This portion of the plugin
                allows the user to create static map views on the fly using
                Google's static-maps-api. Static maps are just that: static.
                Using the API, you can create simple images that are of the area
                you pass in, has markers where you tell it, etc.
              </p>
              <p>
                To accomplish a nice developer experience, we leveraged Dart's
                uri library, the maps API, and OOP principals to create an API
                that let's you easily place multiple markers, render maps, and
                rerender as needed.
              </p>
              <img
                className="mobile-screenshot"
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1513448013/Simulator_Screen_Shot_-_iPhone_8_Plus_-_2017-12-16_at_10.09.08_cpyfaw.png"
                alt="flutter static maps"
                width="40%"
              />
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1512320238/flutter-static-maps/Simulator_Screen_Shot_-_iPhone_6_-_2017-12-03_at_08.56.53.png"
                className="mobile-screenshot"
                alt="static maps demo"
              />
              <a href="https://github.com/ericwindmill/flutter-static-maps-demo">
                <h4>Click here for a static maps example Github repo.</h4>
              </a>
            </li>
            {/*{
            * New LI
            }*/}
            <li className="Portfolio__item">
              <a
                className="Portfolio__item-title"
                href="https://wizardly-poincare-0a1ef3.netlify.com"
              >
                <h2>AppTree Website</h2>
              </a>
              <p>
                <strong>
                  The examples and demo site are from before the content was
                  changed by the owner
                </strong>
              </p>
              <p>
                When I joined the team at AppTree, the company had an outdated
                website built with SquareSpace. Like any good startup, there
                just wasn't time to work on a website when the product had
                unlimited work to be done. constructor
              </p>
              <p>
                Being obsessed with Gatsby, I took it upon myself to build an
                unsolicited new site. Luckily they were happy to have it and it
                wasn't in vain.
              </p>
              <p>
                The website is, above everything else, a sales page for
                AppTree's enterprise product. That led me to make the decisions
                that I did. I really only had 3 goals from a design standpoint:{' '}
              </p>
              <ol>
                <li>The front page should guide the user down the page.</li>
                <li>
                  Very subtle use of delight, because the important part is the
                  content.
                </li>
                <li>
                  It should be easy to find the information the user is looking
                  for.
                </li>
              </ol>
              <img
                src="http://res.cloudinary.com/ericwindmill/image/upload/v1517673579/apptree_www/Screen_Shot_2018-02-03_at_7.59.08_AM.png"
                alt="apptree homepage"
              />
              <p>
                From a technical standpoint, I used Gatsby. Gatsby is a Static
                Site Generator built over top of React. It's extremely
                performant and has a really simply content / blogging system. I
                don't know that there's a better way to build a static site in
                2017.{' '}
              </p>
              <h4>Some features that I'm most happy with:</h4>
              <dl>
                <dt>The blogging section:</dt>
                <dd>
                  This is the best looking part of the site, IMO. I took a very
                  minimalist approach. The content is definitely the focus. I
                  also took an approach that it's taken me a long time to learn:
                  simple color palettes are better!
                  <img
                    src="http://res.cloudinary.com/ericwindmill/image/upload/v1517673416/apptree_www/Screen_Shot_2018-01-28_at_5.24.03_PM.png"
                    alt="blogging page"
                  />
                  <img
                    src="http://res.cloudinary.com/ericwindmill/image/upload/v1517673415/apptree_www/Screen_Shot_2018-01-28_at_5.24.28_PM.png"
                    alt="blog post example"
                  />
                </dd>
                <dt>The syntax highlighting:</dt>
                <dd>
                  This is part of the blogging section, to be sure. But I really
                  like the syntax highlighting them I went with here. Again, I
                  went with the less is more approach. I might use this syntax
                  highlighting on my personal page.
                  <img
                    src="http://res.cloudinary.com/ericwindmill/image/upload/v1517673415/apptree_www/Screen_Shot_2018-01-28_at_5.24.46_PM.png"
                    alt="syntax highlighting example"
                  />
                </dd>
                <dt>This pure CSS Grid pricing table:</dt>
                <dd>
                  This is definitely *not* the best way to do it. But it took
                  some real CSS-muscle-flexing to accomplish. I'm happy with how
                  it turned out.
                  <img
                    src="http://res.cloudinary.com/ericwindmill/image/upload/v1517673447/apptree_www/Screen_Shot_2018-02-03_at_7.57.08_AM.png"
                    alt="pricing table"
                  />
                </dd>
              </dl>
            </li>
          </ul>
        </section>
      </main>
    )
  }
}

export default CoursesPage
