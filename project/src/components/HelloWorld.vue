<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
   <section class="Register">
        <div class="Login-1">
            <div class="gr rounded ">
                <div class="regester">
                    Register
                </div>
                <label class="e" for="emile">User</label>
                <input type="email" id="emile" name="emile" class="mt-1.5  Rectangle-194 rounded">
                <label class="e" for="emile">Email</label>
                <input type="email" id="emile" name="emile" class="mt-1.5 mb-12 Rectangle-194 rounded">
                <label class="pasword" for="Password">Password</label>
                <input type="password" id="password" name="password" class="mt-1.5 Rectangle-199 rounded">
                <div class="pasword">Required field</div>
                <button type="button" class="btn rounded mb-2 ">Register</button>
                <div class="flex">
                    <div class="ml-1 d">Already Registered?</div>
                    <div class="ml-1 d"><b>Login</b></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
 .regester {
            width: 144px;
            height: 45px;
            margin: 0 133px 60px 34px;
            font-family: HelveticaNeue;
            font-size: 47px;
            color: #707070;
            padding-left: 90px;
        }

        .gr {
            width: 450px;
            height: 523px;
            margin: 222px 9px 0 0;
            padding: 37px 20px 100px;
            background-color: silver;
        }
        .e {
            font-size: 16px;
            margin-bottom: 5px;
        }
        .Rectangle-194 {
            width: 405px;
            height: 30px;
            padding-top: 38px;
            margin-bottom: 23px;
            border-radius: 4px;
            border: solid 1px #ddd;
            background-color: #fff;
            margin-top: 5px;
        }
        .Login-1 {
            width: 1440px;
            height: 1024px;
            padding: 30px 30px 300px 495px;
            background-color: #fff;
        }
        .btn {
            border: solid 1px #1c7cd5;
            background-color: #1c7cd5;
            padding-top: 3px;
            margin-top: 16px;
            width: 405px;
            height: 40px;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
        }
        .flex {
            display: flex;
        }
        .pasword {
            color: #cb2e25;
            font-size: 16px;
        }
</style>
