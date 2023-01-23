<script>
    export default{
        data(){
            return {

            }
        },
        props:{
            model:Object
        },
        emits:['update:model','evtClick'],
        computed:{
            class(){
                let defClass = "btn ";
                if(this.model.type==undefined || this.model.type==null){
                    defClass = defClass + "btn-secondary"
                }else{
                    defClass = defClass + "btn-"+this.model.type;
                }
                
                return defClass;
            }
        },
        methods:{
            evtClick(){
                this.$emit('update:model',{...this.model,['disabled']:true});
                this.$emit('evtClick');
            }
        }


    }
</script>
<template>
    <button type="button" :class="class" @click="evtClick" :disabled="model.disabled" >{{ model.label }}</button>
</template>