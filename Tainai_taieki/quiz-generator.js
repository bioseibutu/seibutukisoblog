/*========================================
 * Quiz Generator v 2.1
 * Copyright 2012 Sawa's Factory
 * http://sawa-s.com/quiz-generator.html
========================================*/
var q_now=0, tokuten=0, q_tok=0, tsum=0, percent=0,seikai_num=0;
var credit="<div id='quiz_credit'>Created by <a href='http://sawa-s.com/' target='_blank'>Sawa's Factory</a></div>";
var tag_p="</p><p>",tag_br="&nbsp;<br />";
var ques = new Array();
for (i=0;  i<q_no ; i++){ques[i] = 0;}
var qs_len = questions.length;
if (qs_len < q_no){alert("エラー：出題数" + q_no + "問ですが、問題数が" + qs_len + "問しかありません。\n問題数を増やすか、出題数を減らしてください。");throw new Error(0, "");}
var seq = new Array();
for (i=0; i<qs_len; i++){seq[i] = i;}
if (q_rnd){shuffle(seq);}
$(function(){
	if (q_dsp){var q_img_div="<div id='dsp0'><img src='" + img_file[0] + "' /></div><div id='dsp1'><img src='" + img_file[1] + "' /></div>";}else{var q_img_div="";}
	if (q_dsp && q_sound){var sound_msg="<span style='font-size:11px;'>※注：音が出ます。</span><embed src='" + sound_file[0] + "' hidden='true' autostart='false' /><embed src='" + sound_file[1] + "' hidden='true' autostart='false' /><br />";}else{var sound_msg="";}
	if (q_timer){var q_timer_div="<div id='quiz_timer'></div>";}else{var q_timer_div="";}
	$("#quiz_box").html("<div id='quiz_title'>" + q_title + "</div><div id='quiz_msg'><p>" + opening_msg.join(tag_p)
		+ "</p>" + sound_msg + "<div id='quiz_start'>" + opening_start_button 
		+ "</div></div><div id='quiz_wrap'></div>" + credit + q_img_div + q_timer_div)
	.width(q_w).height(q_h);
	$("#quiz_wrap").height(q_h - 90);
	$("#quiz_start").click(function(){
		$("#quiz_msg").hide();
		var a_seq = new Array();
		go_question();
	});
});
function next_question(){
	q_now ++;
	if (q_now >= q_no){n = setTimeout(ending,1000);}
	else {go_question();}
}
function go_question(){
		var list_html="<div id='quiz_answer'>";
		a_seq = [];
		for (i=0; i<questions[seq[q_now]][1].length; i++){a_seq[i] = i;}
		if (q_sfl){shuffle(a_seq);}
		for (i=0; i < a_seq.length; i++){
			j = a_seq[i] + 1;
			list_html = list_html + "<div id='qan" + j + "' class='qan_list' onclick='q_answer(" + j + ");'>" + questions[seq[q_now]][1][a_seq[i]] + "</div>";
		}
		list_html += "</div>";
		$("#quiz_wrap").html("<div id='quiz_question'>" + questions[seq[q_now]][0] + "</div>" + list_html).slideDown("slow");
		if (q_timer){
			tm_count=q_timer;
			qt_interval=setInterval(quiz_timer,1000);
		}
}
function q_answer(ans){
	if (ques[q_now] == 0){
		if (q_timer){clearInterval(qt_interval);}
		ques[q_now] = 1;
		for (i=0; i < questions[seq[q_now]][1].length; i++){
			j = i + 1;
			if (ans == j){$("#qan" + j).css("background","#FFE").css("border","2px inset #eee").css("cursor","wait");}
			else{$("#qan" + j).css("background","#cfc").css("border","2px outset #6c6").css("cursor","wait");}
		}
		if (questions[seq[q_now]][2] == ans){
			tokuten = tokuten + questions[seq[q_now]][3];
			qa = 1;
			seikai_num ++;
		}
		else{qa = 0;}
		if (q_dsp){
			if (q_sound){$("#quiz_question").append("<embed src='"  + sound_file[qa] + "' autostart='true' hidden='true' loop='false' />");}
			$("#dsp" + qa ).fadeIn();
			nl=setTimeout(q_answer_close,q_dtime*1000);}
		else {nl=setTimeout(q_answer_close,500);}
	}
}
function q_answer_close(){
	tsum = tsum + questions[seq[q_now]][3];
	$("#dsp0,#dsp1").hide();
	$("#quiz_wrap").slideUp("slow");
	if (q_timer){
		$("#quiz_timer").html("");
	}
	n = setTimeout(next_question,1000);
}
function quiz_timer(){
	tm_count --;
	if (tm_count <= 0){
		$("#quiz_timer").html("時間切れ！！");
		q_answer(0);
	}
	else {
		$("#quiz_timer").html("残り：" + tm_count + "秒");
	}
}
function ending(){
	if (tokuten < 1){var q_tok=0;}
	else {var q_tok=Math.round(tokuten / tsum * 100);}
	percent = Math.round(seikai_num / q_no * 100);
	for (i=0; i < endings.length; i++){
		if (q_tok >= endings[i][0]){
			var ending_msg = endings[i][1];
			break;
		}
	}

	var ending_msg_html = ending_msg.join(tag_br);
	ending_msg_html = ending_msg_html.replace(/!tokuten!/g, q_tok); 
	ending_msg_html = ending_msg_html.replace(/!seikai_num!/g,seikai_num); 
	ending_msg_html = ending_msg_html.replace(/!percent!/g, percent); 
	var restart_button_div = "<div id='quiz_start' onclick='location.reload();'>" + restart_button + "</div>"
	if (restart_button == ""){restart_button_div = "";}

	$("#quiz_msg").html(ending_msg_html  + restart_button_div).slideDown("slow");
}
function shuffle(list) {var i = list.length;while (--i) {var j = Math.floor(Math.random() * (i + 1));if (i == j) continue;var k = list[i];list[i] = list[j];list[j] = k;}return list;}
