<template>
<section class="Login">
        <div class="Login-1">
            <div class="g rounded ">
                <div class="LOGIN bg-yekta">
                    LOGIN
                </div>
                <label class="e" for="emile">Email</label>
                <input type="email" id="emile" name="emile" class="mt-1.5 mb-12 Rectangle-194 rounded">
                <br>
                <label class="pasword" for="Password">Password</label>
                <input type="password" id="password" name="password" class="mt-1.5 mb-4 Rectangle-199 rounded">
                <div class=" pasword">Required field</div>
                <div>
                    <button class="btn rounded mb-2 " type="submit">Login</button>
                </div>
                <div class="flex">
                    <div class="ml-1 f">Don’t have account?</div>
                    <div class="ml-1 f"><b>Register Now</b></div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.Login-1 {
            width: 1440px;
            height: 1024px;
            padding: 30px 30px 300px 495px;
            background-color: #fff;
        }

        .g {
            width: 450px;
            height: 415px;
            margin: 222px 9px 0 0;
            padding: 37px 20px 100px;
            background-color: silver;
        }

        .LOGIN {
            width: 144px;
            height: 60px;
            margin: 0 133px 27px 34px;
            font-size: 47px;
            color: #707070;
            padding-left: 102px;
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

        .Rectangle-199 {
            width: 405px;
            height: 40px;
            padding-top: 12px;
            margin-bottom: 5px;
            margin-top: 5px;
            border-radius: 4px;
            border: solid 1px #ddd;
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


        .pasword {
            color: #cb2e25;
            font-size: 16px;
        }
        .flex {
            display: flex;
        }
        .f {
            font-size: 16px;
            margin-top: 10px;
        }
        .e {
            font-size: 16px;
            margin-bottom: 5px;
        }
</style>