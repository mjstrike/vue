<script>
    import TextField from '../components/TextField.vue';
    import TextFieldBinding from '../components/binding/TextFieldBinding';
    import Button from '../components/Button.vue';
    import ButtonBinding from '../components/binding/ButtonBinding';

    export default{
        data(){
            return {
                username:new TextFieldBinding("","username","text"),
                password:new TextFieldBinding("","password","password"),
                btnSubmit:new ButtonBinding('Submit',null)
            }
        },
        components:{
            TextField,Button            
        },
        methods:{
            btnClick(){ 

                console.log(this.username);

                if(this.username.value==""){
                    console.log("invalid");
                    this.username.invalid = true;
                    console.log(this.username.cmp);
                }else{
                    this.username.invalid = false;
                }

                console.log(this.username);

                if(this.password.value==""){
                    this.password.invalid = true;
                }

                console.log("is a click");
                console.log(this.btnSubmit);

                console.log("lets make it enable");
                this.btnSubmit.disabled = false;
            }
        },
        mounted(){
            
        }
    }
</script>

<template>
    <div class="d-flex min-vh-100 justify-content-center align-content-center">        
        <div class="d-flex w-75 align-items-center">
            <div class="container-fluid  border border-dark rounded">
                <div class="row">
                    <div class="col-8 border-end border-dark login-logo" ></div>
                    <div class="col-4">
                        <div class="row login-container">
                            <div class="col-12">Login</div>
                            <div class="col-12">
                                <TextField v-model:value="username" label="Username" ref="txtUsername"  />                                                 
                            </div>
                            <div class="col-12">
                                <TextField v-model:value="password" label="password" type-field="password" ref="txtPassword" />                                
                            </div>
                            <div class="col-12">
                                <Button v-model:model="btnSubmit" @evt-click="btnClick" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>        
    </div>    
</template>
<style>
    .login-logo{
        background-image: url('../assets/img/login-img.jpg');
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat; 
    }
   
    .login-container{
        background-color: lavender;
    }

</style>