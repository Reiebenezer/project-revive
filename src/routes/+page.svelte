<script lang="ts">
    import asset from '$lib/img/asset.png';
    import rcylogo from '$lib/img/rcy.jpg';
    import bg from '$lib/img/bg.png';
</script>

<section id="hero" style="--bg: url('{bg}')">
    <div class="container">
        <h1>
            Providing <span class="brown">Sustainable</span>
            <span class="green">Solutions</span>
        </h1>
        <p>
            From your closet to a community’s heart. Together, we can combat
            fast fashion and aid those in need by providing essential clothing.
        </p>
        <a href="/donate" class="button">Donate Now</a>
    </div>
</section>

<section id="about">
    <div class="container">
        <div class="content">
            <h2>What is <span class="green">#ProjectRevive</span>?</h2>
            <p>
                Fast fashion has become a pressing issue in the environment. As
                a solution to this problem, our volunteers sparked <strong
                    >#ProjectRevive</strong
                >, a non-profit project, as a sustainable means to address the
                issue of fast fashion as one of the prevalent problems in many
                communities these days.
            </p>

            <a href="/about" class="button secondary">Learn More</a>
        </div>
        <img src="{asset}" alt="" />
    </div>
</section>

<section id="us">
    <div class="container">
        <img src="{rcylogo}" alt="" />

        <div class="content">
            <h2>Meet the Advocates</h2>
            <p>
                The <strong>UPHSI Senior Red Cross Youth Council</strong> is an
                independent organization that serves the student body in case of
                emergencies that require the assistance of physical and
                emotional support.<br /><br />Our organization upholds the Red
                Cross and Red Crescent movement's seven fundamental principles:
                Humanity, Impartiality, Neutrality, Independence, Voluntary
                Service, Unity, and Universality.
            </p>

            <a href="/contact" class="button secondary">Contact Us</a>
        </div>
    </div>
</section>

<section id="conclusion">
    <div class="container">
        <h2>Support Our Cause</h2>
        <p>
            <strong>#ProjectRevive</strong> is committed to eliminating pollution
            and supporting long-lasting, eco-friendly fashion choices. Join our movement
            to embrace mindful consumption, support sustainable brands, and make
            a positive impact on our planet.
        </p>

        <a href="/donate" class="button">Donate Now</a>
    </div>
</section>

<style lang="scss">
    section {
        max-width: 100%;
        overflow-x: hidden;

        .container {
            max-width: 1440px;
            margin-inline: auto;

            padding: 72px 96px;

            display: grid;
            gap: 2rem;

            position: relative;
            isolation: isolate;

            @media screen and (width < 768px) {
                padding: 48px 24px;
                flex-direction: column;

                gap: 1.5rem;
            }
        }
    }

    span.green {
        color: var(--accent-1);
    }

    span.brown,
    h2 {
        color: var(--accent-2);
    }

    #hero .container,
    #conclusion .container {
        text-align: center;
        justify-items: center;
        align-content: center;
    }

    #hero .container {
        min-height: 80vh;
        background:
            var(--bg) center/cover no-repeat,
            var(--secondary);
        color: var(--light-surface);

        &::before {
            content: '';
            position: absolute;
            inset: 0;

            backdrop-filter: blur(20px) brightness(0.4);
            z-index: -1;
        }

        p {
            text-wrap: pretty;
        }
    }

    .content {
        display: grid;
        gap: 1rem;

        justify-items: start;
    }

    #about .container,
    #us .container {
        grid-template-columns: 2fr 1fr;
        align-items: center;
        justify-content: start;

        @media screen and (width < 768px) {
            grid-template-columns: auto;

            img {
                display: none;
            }
        }
    }
    
    #us .container {
        grid-template-columns: 1fr 2fr;
    }
</style>
