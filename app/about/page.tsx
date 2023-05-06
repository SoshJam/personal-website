'use client';

export default function AboutPage() {

    return (
        <main>
            <aside>
                <a href="#">Introduction</a>
                <a href="#education">Education</a>
                <a href="#work">Work History</a>
            </aside>

            <article>
                
                <h1>About Me</h1>

                <section id="introduction">
                    <h2>Introduction</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, vel nam? Commodi, amet, atque reiciendis fugit ullam architecto sequi rerum, ex aspernatur eius velit? Illum adipisci fuga quibusdam nobis laborum.</p>
                </section>

                <section id="education">
                    <h2>Education</h2>

                    <h3>Lone Peak High School</h3>
                    <small>August 2019 - May 2022 &bull; Highland, Utah<br />3.98 GPA &bull; 35 ACT</small>
                    <ul>
                        <li>Took every available Computer Science class.</li>
                        <li>Completed Programming and Software Development CTE pathway.</li>
                        <li>Completed Broadcasting and Digital Media CTE pathway.</li>
                        <li>Ranked in the top 10 in my graduating class.</li>
                    </ul>
                    
                    <h3>University of Utah</h3>
                    <small>August 2022 - April 2026 (expected) &bull; Salt Lake City, Utah<br />Current student &bull; Computer Science major</small>
                    <ul>
                        <li>Made Deans List in first semester, on track to do so again in second semester.</li>
                        <li>Took prerequisite Computer Science courses in high school.</li>
                        <li>Took CS 2420 and CS 3500. Scheduled to take CS 3505 and CS 3130 next Fall.</li>
                    </ul>
                </section>

                <section id="work">
                    <h2>Work History</h2>

                    <h3>Data Entry</h3>
                    <small>SocialClimb &bull; Highland, Utah<br />June 2019 - January 2023</small>
                    <ul>
                        <li>Responsible for gathering online information on doctors and doctors&apos; offices from specific websites.</li>
                        <li>Created an automatic web-scraping and API entry program using Python to greatly speed up this process.</li>
                    </ul>
                    
                    <h3>Web Development Internship</h3>
                    <small>Christa McAuliffe Space Center &bull; Pleasant Grove, Utah<br />June 2021 - May 2022</small>
                    <ul>
                        <li>Responsible for addressing user bug reports on the <a href="https://thoriumsim.com" target="_blank">Thorium</a> software which powers their simulator.</li>
                        <li>Working with React, Express, and GraphQL, primarily in Typescript, on both front-end and back-end functionality.</li>
                    </ul>

                    <h3>Shopify Development</h3>
                    <small>Freelance<br />June 2023 - Present</small>
                    <ul>
                        <li>Developing online stores for local Shopify merchants.</li>
                        <li>Expanding theme code (using Shopify&apos;s <a href="https://shopify.dev/docs/api/liquid" target="_blank">Liquid</a>) and creating custom apps (using React and Express).</li>
                        <li>Communicating with clients to determine how to best implement their requested features.</li>
                    </ul>
                </section>

            </article>

        </main>
    )
};