<template>
   <div class="magnifier" @mousemove="move"></div>
</template>
<script>
export default {
    methods: {
        move(e) {
            e.target.style.setProperty("--x", `${e.offsetX}px`);
            e.target.style.setProperty("--y", `${e.offsetY}px`);
        }
    }
};
</script>
<style lang="scss">
    $ratio: 3;
    $box-w: 600px;
    $box-h: 400px;
    $box-bg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210222ac%2F214%2Fw2048h1366%2F20210222%2F4f01-kkmphps2124354.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616583475&t=c2bb3fd897fb17157b146de817c6caa1';
    $outbox-w: $box-w * $ratio;
    $outbox-h: $box-h * $ratio;
    .magnifier {
       margin: 0 auto;
        --x: 0;
        --y: 0;
        overflow: hidden;
        position: relative;
        width: $box-w;
        height: $box-h;
        background: url($box-bg) no-repeat center/100% 100%;
        cursor: pointer;
        &::before {
            --size: 0;
            $scale-x: calc(var(--size) / #{$ratio} - #{$ratio} * var(--x));
            $scale-y: calc(var(--size) / #{$ratio} - #{$ratio} * var(--y));
            position: absolute;
            left: var(--x);
            top: var(--y);
            border-radius: 100%;
            width: var(--size);
            height: var(--size);
            background: #333 url($box-bg) no-repeat $scale-x $scale-y/$outbox-w $outbox-h;
            box-shadow: 1px 1px 3px rgba(#000, .5);
            content: "";
            will-change: left, top;
            transform: translate(-50%, -50%);
        }
        &:hover::before {
            --size: 100px;
        }
    }
</style>