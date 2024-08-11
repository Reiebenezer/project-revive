<script lang="ts">
    export let labels: string[];
    export let progress = 0;

    const len = labels.length;
</script>

<figure
    class="progress"
    class:disabled="{progress === 0}"
    style="--length: {(progress / len - 1 / (2 * len)) * 100}%">
    {#each labels as label, index}
        <span class="bubble" class:complete="{index < progress}">
            <p class="text">{index + 1}</p>
            <p class="label">{label}</p>
        </span>
    {/each}

    <div class="bar"></div>
    <div class="bar filled"></div>
</figure>

<style lang="scss">
    figure {
        display: flex;
        justify-content: space-around;

        margin-block: 2rem 6rem;

        position: relative;
        isolation: isolate;

        &.disabled .filled {
            width: 0% !important;
        }
    }

    .bar {
        position: absolute;
        height: 0.35rem;

        inset-inline: 0;
        background-color: var(--secondary);

        z-index: -1;

        top: 50%;
        transform: translateY(-50%);

        &.filled {
            background-color: var(--accent-1);
            width: var(--length);

            transition: width 700ms;
        }
    }

    span.bubble {
        color: var(--accent-1);
        background-color: var(--light-surface);

        outline: 2px solid var(--accent-1);
        outline-offset: -2px;

        position: relative;

        font-family: var(--font-heading);
        font-size: 0.75rem;

        height: 1.5rem;
        width: 1.5rem;

        display: grid;
        place-items: center;

        border-radius: 50vw;

        @keyframes animate {
            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.25);
            }
        }

        &.complete {
            background-color: var(--accent-1);
            color: var(--light-surface);

            animation: animate 350ms;
        }

        p.text {
            margin-bottom: 0.125rem;
        }

        .label {
            color: var(--dark-surface);
            position: absolute;

            top: calc(100% + 0.5rem);
            left: 50%;
            transform: translateX(-50%);

            line-height: 1;

            max-width: 16ch;
            text-align: center;

            @media screen and (width < 768px) {
                max-width: 15ch;
            }
        }
    }
</style>
