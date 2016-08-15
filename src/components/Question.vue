<script>
import QuestionService from '../services/question'

export default {
    name: "Question",

    // data: function(){
    //     return {
    //         question: ""
    //     }
    // },
    props: ['question']

    // ready: function() {
    //   QuestionService.getQuestion(this).then(function(response){
    //     this.$set('question', response.data[0].content);
    //   }, function(response){
    //     console.log(response);
    //   });
    // }
}
</script>

<template>
    <div class="question-wrapper">
        <div class="category">{{question.attributes['category-name']}}</div>
        <div v-if="question.attributes.nsfw" class="nsfw">NSFW</div>
        <div class="text">{{question.id}}: {{question.attributes.text}}</div>
        <div class="controls">
            <div v-if="question.attributes.answered" class="answered">
                results
            </div>
            <div v-else class="unanswered">
                
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    // Imports
    @import "../stylesheets/variables.scss";

    // Styles
    .question-wrapper {
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
        padding: 1em;
        border: solid 1px $grey2;
        margin-top: 1em;
        width: 100%;
        text-align: center;
        border-radius: 2px;    

        .category {
            color: $black;
            font-size: 0.7em;
            font-weight: bold;
        }

        .nsfw {
            color: $white;
            font-size: 0.6em;
            font-weight: bold;
            background-color: red;
            width: 3.6em;
            margin: auto;
            border: 1px solid $grey2;
            border-radius: 2px;
        }

        .text {
            font-size: 2em;
            margin-top: 1em;
            margin-bottom: 1em;
        }
    }
</style>
