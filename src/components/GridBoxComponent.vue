<template>
    <div 
        class="gridbox" 
        :style="{
            height: size+'px',
            width: size+'px'
        }"
        @click="dosomething()"
        :class="{'start':start, 'end':end}"
    >

        {{start?'S':''}}{{end?'E':''}}

    </div>
</template>

<script>
export default {
    name: 'GridBoxComponent',
    props: ['size', 'row', 'col', 'start', 'end'],
    data(){
        return {

        }
    },
    methods: {
        dosomething(){
            console.log(`row = ${this.row}, col = ${this.col}`);
        }
    }
}
</script>

<style>
.gridbox{
    border-right: 2px solid rgb(58, 58, 58);
    border-bottom: 2px solid rgb(58, 58, 58);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 100%;
}
.start{
    color: rgb(212, 14, 0);
    background: rgb(116, 255, 116);
}
.end{
    color: rgb(0, 42, 133);
    background: rgb(82, 235, 255);
}
</style>