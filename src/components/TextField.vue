<script>
import anime from 'animejs';

    export default{
        data(){
            return {

            }
        },
        props:{
            value:Object
        },
        emits:['update:value'],
        computed:{
            val:{
                get(){
                    return this.value.value;
                },
                set(newValue){
                    this.$emit('update:value',{...this.value,['value']:newValue});
                }
            },
            class(){
                let defClass = this.value.overideClass;
                console.log("invalid : "+this.value.invalid);
                if(this.value.invalid){
                    defClass = defClass + " is-invalid";                    
                }                                
                return defClass;
            }
             
        },
        methods:{
            shakeIt(){
                let xMax = 16;
                    anime({
                        targets:this.$refs.template,
                        easing: 'easeInOutSine',
                        duration: 550,
                        translateX: [
                            {
                                value: xMax * -1,
                            },
                            {
                                value: xMax,
                            },
                            {
                                value: xMax/-2,
                            },
                            {
                                value: xMax/2,
                            },
                            {
                                value: 0
                            }
                        ]                        
                    })
            }
        }
    }
</script>

<template>
    <div class="row mx-0 my-2" ref="template">
        <div class="col-12 px-0">{{ value.label }}</div>
        <input v-model="val" :type="value.typeField" :class="class" :disabled="value.isDisabled" />        
    </div>
    
</template>
