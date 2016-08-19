<script>
	import Question from './Question.vue';

	import 'jquery-appear-poetic'


	export default {
		name: "Hot",
		components: {
			'question': Question
		},
		data: function(){
			return {
				questions: [],
				nextPage: '',
				loadingQuestions: false
			}
		},
		methods: {
		 	loadMoreQuestions: function (event) {
		 		var self = this;
		 		if (!self.loadingQuestions) {
			 		self.loadingQuestions = true;
			    $(function() {
				 		$('.load-more').text('Loading...');
			      $.getJSON(self.nextPage).done(function(resp) {
							self.questions = self.questions.concat(resp.data);
							self.nextPage = resp.links.next;
							
					 		$('.load-more').text('More pls');
					 		self.loadingQuestions = false;
						});
			    });
		 		}
			},
			onSroll: function (event, position) {
				var self = this;
		 		if (!self.loadingQuestions && $('.questions-container').height() + position.top >= $('.load-more').position().top) {
		 			self.loadMoreQuestions
		 		}
		 		else {
		 			console.log($('.questions-container').height() + position.top, $('-load-more').position().top)
		 		}
			}
		},
		ready () {
			var self = this;
	    $(function() {
	      $.getJSON(Global.apiUrl + '/questions').done(function(resp) {
					self.questions = resp.data;
					self.nextPage = resp.links.next;
				});

				$(document).on('scroll', function(event) {
			    if (!self.loadingQuestions && $('.load-more').is(':appeared')) {
			    	self.loadMoreQuestions()
			    }
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
			<div class="question-wrapper" v-else>No more for you :c</div>
		</div>
	</div>
</template>
