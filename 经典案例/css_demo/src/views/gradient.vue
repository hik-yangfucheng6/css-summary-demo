<template>
    <div class="grad">
        <div>
            <h4>线性渐变说明</h4>
            <p>tip:线性角度以顺时针旋转,to bottom = 180deg</p>
            <p :class="`img img${index}`" v-for="(x,index) in descs"  :key="x">{{x}}</p>
        </div>
        <div>
            <h4>径向渐变说明</h4>
            <div class="voucher">
                <div class="money">100元</div>
                <div class="content">王力宏演唱会优惠券</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            descs:['线性方向说明','线性角度说明']
        }
    }
}
</script>
<style lang="scss" scoped>

    $bg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210222ac%2F214%2Fw2048h1366%2F20210222%2F4f01-kkmphps2124354.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616583475&t=c2bb3fd897fb17157b146de817c6caa1';
    .grad{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .img {
        width: 200px;
        height: 200px;
        display: inline-block;
        color: red;
        margin-left: 20px;
    }

    .img0{
        background-image: linear-gradient( to bottom, #FFF 10%, blue, #ccc 60%);
    }

     .img1{
        background-image: linear-gradient(180deg, #FFF 10%, blue, #ccc 60%);
    }


    //径向渐变
    .voucher {
        width: 300px;
        height: 100px;
        display: flex;
        margin-left: 100px;
        position: relative;
        font-size: 14px;;
        .money {
            width: 30%;
            height: 100%;
            background-color: #f76260;
            line-height: 100px;
        }
        .content {
            height: 100%;
            border: 1px solid #ddd;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }
        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 6px;
            left: 0;
            top: 0;
            background-image: radial-gradient(circle at 0px 10px, white 6px, #f76260 6px);
            background-size: 6px 20px;
        }
    }
        
</style>