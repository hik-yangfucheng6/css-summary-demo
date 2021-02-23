<template>
    <div class="hover-tips btn-1" :data-msg="content">
        <slot></slot>
    </div>
</template>
<script>
export default {
   props:{
       content:{
           type:String
       }
   }
}
</script>
<style lang="scss">
    .hover-tips {
        position: relative;
        padding: 0 20px;
        border-radius: 10px;
        height: 40px;
        background-color: #fff;  
        border: 1px solid #ccc;
        line-height: 40px;
        color: #000;
        &:hover{
            background: #eee;
        }
        & + .hover-tips {
            margin-top: 10px;
        }
        &.btn-1 {
            width: 100px;
            &::after {
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 5px;
                width: 100%;
                height: 30px;
                line-height: 30px;
                background-color: rgba(#000, .5);
                opacity: 0;
                text-align: center;
                font-size: 12px;
                content: attr(data-msg);
            }
            &:hover::after {
                left: calc(100% + 5px);
                opacity: 1;
            }
        }
        // &.btn-2:empty::after {
        //     content: attr(href);
        // }
    }
</style>