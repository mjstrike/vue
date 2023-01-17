<script>
    export default{
        data(){
            return {
                username:'',
                password:''   
            }
        }
    }
</script>
<template>
    <!-- <div class="container-fluid vh-100 d-flex justify-content-center">
        <div class="d-flex align-item-center w-75">
           <div class="border border-dark w-100 ">test</div>
        </div>
    </div> -->
    <div class="vh-100 d-flex align-items-center justify-content-center">
        <div class="w-75 border border-secondary border-2 rounded backimg">
            <div class="row">
                <div class="col-8 ">
                    <img src="./back.jpg" class="backimg w-100 p-1" />
                </div>
                <div class="col-4">
                    <div class="row">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .backimg  {
        background-color: white;
    }
</style>