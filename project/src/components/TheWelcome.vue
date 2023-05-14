<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <section class="New Article">
        <div class="flex Rectangle-318">
            <div class="Arvan-Challenge ">Arvan Challenge</div>
            <div class="Arvan-Challenge2 ">Welcome {{ username }}</div>
            <button class="Rectangle-320" type="submit">Logout</button>
        </div>
        <div class="flex">
            <div class="Rectangle-321">
                <div class="Post">Post</div>
                <button type="submit" class="New-Article ">All Articles</button>
                <button type="submit" class="New-Article ">New Article</button>
            </div>
            <div class="kol">
                <div class="Ne">New Article</div>
                <label class="e" for="Title">Title</label>
                <br>
                <input type="text" placeholder="Title" class="e Rectangle-195">
                <p class="r">Required field</p>
                <label class="e" for="Description">Description</label>
                <br>
                <input type="text" placeholder="Description" class="Rectangle-195">
                <p class="e s">Body</p>
                <input type="text" class="Rectangle-196">
                <br>
                <button type="submit" class="Rectangle-201">Submit</button>
            </div>
            <div class="kol2">
                <label class="Tags" for="Tags">Tags</label>

                <input type="text" placeholder="New tag" class="Rectangle-334">
                <div class="Rectangle-197">
                    <input class="w" type="checkbox" name="tag">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox" name="tag">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox" name="tag">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox" name="">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox">
                    <label for="Tag">Tag</label>
                    <input class="w" type="checkbox">
                    <label for="Tag">Tag</label>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.Rectangle-318 {
            width: 1440px;
            height: 60px;
            padding: 10px 29.3px 10px 18px;
            background-color: #373a3c;
        }
        .Rectangle-195 {
            width: 848px;
            height: 40px;
            margin: 8px 0 6px 0;
            padding-left: 10px;
            border-radius: 4px;
            border: solid #cb2e25;
            background-color: #fff;
        }

        .Rectangle-196 {
            width: 847px;
            height: 207px;
            margin: 8px 0 0;
            border-radius: 4px;
            border: solid 1px #ddd;
            background-color: #fff;
        }

        .Rectangle-334 {
            width: 252px;
            height: 40px;
            margin: 1px 29px 6px 31px;
            padding: 11px 180px 11px 12px;
            border-radius: 4px;
            border: solid 1px #ddd;
            background-color: #fff;
        }

        .Rectangle-197 {
            width: 251.5px;
            height: 366px;
            margin: 14px 29.5px 15px 31px;
            padding: 15px 187.5px 16px 17px;
            border-radius: 4px;
            border: solid 1px #ddd;
            background-color: #fff;
        }
        .New-Article {
            width: 92px;
            height: 21px;
            font-size: 18px;
            color: #fff;
            margin: 0px 132px 17px 14px;
        }

        .kol {
            margin-top: 25px;
        }

        .kol2 {
            margin-top: 90px;
        }
        
        .flex {
            display: flex;
        }
        .w {
            margin-bottom: 15px;
        }
        .r {
            font-size: 16px;
            margin-bottom: 16px;
        }

        .s {
            margin-top: 30px;
        }
        .e {
            font-size: 16px;
            margin-bottom: 5px;
        }
        .Arvan-Challenge {
            margin: 7px 2px 7px 0;
            color: #fff;
            font-size: 22px;
            width: 165px;
            height: 26px;

        }

        .Arvan-Challenge2 {
            width: 173px;
            height: 18px;
            font-size: 16px;
            margin: 11px 953px 11px 20px;
            color: #fff;
        }
        .Tags {
            width: 33px;
            height: 18px;
            margin: 1px 248px 30px 31px;
            font-family: HelveticaNeue;
            font-size: 16px;
        }
        .Post {
            width: 45px;
            height: 26px;
            margin: 0 187px 27px 18px;
            color: #ffffff;
            font-size: 22px;
        }
        .Ne {
            font-size: 40px;
            color: #000;
        }

        .Rectangle-201 {
            width: 99px;
            height: 35px;
            margin: 25px 770px 20px 3px;
            padding: 8px 26px 9px 22px;
            border-radius: 4px;
            border: solid 1px #1c7cd5;
            background-color: #1c7cd5;
        }
        .Rectangle-320 {
            width: 82.7px;
            height: 40px;
            border-radius: 4px;
            border: solid 1px #5bc0de;
            margin-right: 0px;
        }
        .Rectangle-321 {
            width: 250px;
            height: 964px;
            margin: 0px 30px 0 0;
            padding: 13px 0 817px;
            background-color: #1c7cd5;
        }
</style>
