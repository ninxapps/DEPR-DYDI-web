<script>
	import Question from './Question.vue';
	export default {
		name: "Hot",
		components: {
			'question': Question
		},
		data: function(){
			return {
				questions: [],
				nextPage: ''
			}
		},
		methods: {
		 	loadMoreQuestions: function (event) {
		 		var self = this;
		    $(function() {
		      $.getJSON(self.nextPage).done(function(resp) {
						self.questions = self.questions.concat(resp.data);
						self.nextPage = resp.links.next;
					});
		    });
			}
		},
		ready () {
			var self = this;
	    $(function() {
	      $.getJSON(Global.apiUrl + '/questions').done(function(resp) {
					self.questions = resp.data;
					self.nextPage = resp.links.next;
				});
	    });
	  }
	}
</script>

<template>
	<div class="row">
		<div class="large-6 large-offset-3 medium-12 columns questions-container">
			<question v-for="q in questions" :question="q"></question>
			<div class="load-more question-wrapper" v-if="nextPage" v-on:click="loadMoreQuestions">More pls</div>
			<div class="load-more question-wrapper" v-else>No more for you :c</div>
		</div>
	</div>
</template>
