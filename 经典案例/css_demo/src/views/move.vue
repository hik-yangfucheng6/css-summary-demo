<template>
  <div>
     <a class="track-btn" @mousemove="move">
      <span>用鼠标滑动,颜色会改变...</span>
    </a>
  </div>
</template>
<script>
export default {
    name: "track-btn",
    methods: {
        move(e) {
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;
            e.target.style.setProperty("--x", `${x}px`);
            e.target.style.setProperty("--y", `${y}px`);
        }
    }
};
</script>
<style lang="scss">
  .track-btn {
    overflow: hidden;
    position: relative;
    border-radius: 25px;
    width: 400px;
    height: 50px;
    display: inline-block;
    background-color: red;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    span {
        position: relative;
        pointer-events: none;
    }
    &::before {
        --size: 0;
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background-image: radial-gradient(circle closest-side, yellow, transparent);
        content: "";
        transform: translate3d(-50%, -50%, 0);
        transition: width 200ms ease, height 200ms ease;
    }
    &:hover::before {
        --size: 400px;
    }
}
</style>