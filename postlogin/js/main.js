var current_content = "workspace";
var current_bill_type = "billing_invoice";
var billing_type = ['billing_invoice', 'billing_payment', 'billing_due', 'billing_exp'];

function workspace(case_num) {
	$('WorkspaceModule').hide();
	setTimeout(function(){
		$('WorkspaceModule').show();
	}, 500);
}

function hide_workspace() {
	$('WorkspaceModule').hide();
}

$(document).ready(function(){
	for(i = 1; i < billing_type.length; i++) {
		$('.'+billing_type[i]).hide();
	}

	$('WorkspaceModule').hide();
	$('sideNav').hide();
	$('perCauselist').hide();
	$('calendar').hide();
	$('billing').hide();

	$('.add_work').click(function(){
		$('addworkspace').slideDown();
	});
	$('#closeAddWorkspace').click(function(){
		$('addworkspace').slideUp();
	});

	$('.menu').click(function(){
		$('sideNav').show();
	});

	$('.billing_tabs').click(function(){
		$('.billing_tabs').removeClass('filter-date');
		$(this).addClass('filter-date');
		$('.bills').hide();
		$('.'+billing_type[$(this).index()]).show();
		change_current_bill_type(billing_type[$(this).index()]);
	});

	

	$("sideNav a").click(function(){
		console.log(current_content);
		$(current_content).hide();
		var hash_url = this.hash.substr(1);
		console.log(hash_url);
		$(hash_url).show();
		$('sideNav').hide();
		change_current_content(hash_url);
	});	
});

function change_current_content(result) {
	current_content = result;
}

function change_current_bill_type(result) {
	current_bill_type = result;
}