<script lang="ts">
    import './imports';
    
    // JS LIBRARIES

    // ASSET IMPORTS
    import RCYLogo from '$lib/img/rcy.jpg';
    import ReviveLogo from '$lib/img/logo.jpg';
</script>

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

<slot />

<footer></footer>

<style lang="scss">
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
    }
</style>