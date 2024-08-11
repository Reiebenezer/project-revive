<script lang="ts">
    import './imports';
    
    // JS LIBRARIES

    // ASSET IMPORTS
    import RCYLogo from '$lib/img/rcy.jpg';
    import ReviveLogo from '$lib/img/logo.jpg';
</script>

<div class="container">
    <header class="cl-l">
        <div class="logos">
            <img src="{ReviveLogo}" alt="Revive Logo">
            <img src="{RCYLogo}" alt="RCY Logo">
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <slot />
    </main>
    
    <footer>
        <p>UPHSI Red Cross Youth Council &copy; 2024. All rights reserved.</p>
    </footer>
</div>


<style lang="scss">
    .container {
        position: absolute;
        inset: 0;

        display: flex;
        flex-direction: column;
    }

    header {
        // SPACING
        padding: 16px 96px;
        
        // LAYOUT
        display: flex;

        justify-content: space-between;
        align-items: center;

        // COLOR
        background: var(--accent-2);

        .logos img {
            margin-inline: .5rem;
        }

        nav > a {
            margin-inline: 1.5rem;
            font-family: var(--font-heading);
        }

        img {
            width: 48px;
            height: 48px;

            object-fit: cover;
            border-radius: 100vw;
        }
        
        @media screen and (width < 768px) {
            padding: 16px 32px;
            flex-direction: column;

            gap: 1rem;
        }
    }

    main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    footer {
        text-align: center;

        margin-inline: 96px;
        padding-block: 72px;
        
        font-size: .75rem;
        border-top: 1px solid var(--secondary);
        
        @media screen and (width < 768px) {
            margin-inline: 16px;
            padding-block: 32px;
        }
    }
</style>