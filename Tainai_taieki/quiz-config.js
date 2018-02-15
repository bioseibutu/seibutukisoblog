﻿/*========================================
 * Quiz Generator v 2.1 設定ファイル
 * Copyright 2012 Sawa's Factory
 * http://sawa-s.com/quiz-generator.html
========================================*/

/* ===================	オープニング&クイズ設定	=================== */
/* クイズボックスの横幅 縦幅*/
var q_w = 450;		//横幅 px  min=400
var q_h = 380;		//縦幅 px  選択数の増減によって調整してください。3択：330  4択：380   5択：430
/* タイトル */
var q_title = "生物基礎４択クイズ<br>～体内環境(体液と循環系、腎臓と肝臓)～";
/* オープニングメッセージ ＆スタートボタン名 */
var opening_msg=[
	"このクイズは４択形式のクイズです。"
	,"全部で１０問あり、満点は１００点です。"
	,""
	,"あなたは何点取れるでしょうか？"
];
opening_start_button = "ＳＴＡＲＴ";
/* 出題数 */
var q_no = 10;
/* 出題順 0-昇順 1-ランダム */
var q_rnd = 1;
/* 正解・不正解の表示 0-しない 1-する */
var q_dsp = 1;
/* 正解・不正解を表示する場合、表示する秒数 */
var q_dtime = 2;
/* 正解・不正解を表示する場合、サウンドを使用  0-しない 1-する */
var q_sound = 0;
/* 制限時間（秒） 0-設定なし  */
var q_timer = 25;
/* 選択岐をシャッフル 0-しない 1-する */
var q_sfl = 1;
/* 正解・不正解を表示する 画像ファイル（入れ替える場合のみ）　不正解画像,正解画像の順 */
var img_file = ["image/0.png","image/1.png"];
/* サウンドを鳴らす場合のサウンドファイル （入れ替える場合のみ）　不正解サウンド,正解サウンドの順 */
var sound_file = ["sound/0.wav","sound/1.wav"];

/* ====  問   題  ==== */

/*["設問文",・
	["選択肢1",・"選択肢2",・"選択肢3",・"選択肢4",・正答の番号,・配点]]*/

var questions = [
 ["体内環境が一定に維持される状態をなんというか。", 
	["恒常性", "ホモサピエンス", "恒等性", "ヘテオスタシス"], 1, 10]
,["ヒトの体液は「？」と「組織液」と「リンパ液」の3つに大別される。", 
	["血漿", "細胞液", "胃液", "汗"], 1, 10]
,["ヒトの体液は「血しょう」と「？」と「リンパ液」の3つに大別される。", 
	["組織液", "細胞液", "汗", "膵液"], 1, 10]
,["ヒトの体液は「血しょう」と「組織液」と「？」の3つに大別される。", 
	["リンパ液", "胆汁", "汗", "細胞液"], 1, 10]
,["血液の液体成分をなんというか。", 
	["血漿", "血餅", "血塊", "血小"], 1, 10]
,["血液の有形成分には、「赤血球」・「血小板」・「？」が存在する。", 
	["白血球", "緑血球", "黒血球", "青血球"], 1, 10]
,["主として酸素の運搬に関わる血球成分はなにか。", 
	["赤血球", "白血球", "血小板", "血漿"], 1, 10]
,["主として免疫に関わる血球成分はなにか。", 
	["白血球", "赤血球", "血小板", "血漿"], 1, 10]
,["主として血液凝固に関わる血球成分はなにか。", 
	["血小板", "白血球", "赤血球", "血漿"], 1, 10]
,["次のうち、核をもつ血球成分はどれか。", 
	["白血球", "赤血球", "血小板", "血漿"], 1, 10]
,["赤血球の大きさに最も近いものはどれか。", 
	["6～7μm", "2～3μm", "4～5μm", "10～20μm"], 1, 10]
,["赤血球の寿命に最も近いものはどれか。", 
	["120日", "10日", "60日", "180日"], 1, 10]
,["最も酸素濃度の高い血液が通る血管はどれか", 
	["肺静脈", "肺動脈", "肝門脈", "肝静脈"], 1, 10]
,["最も尿素濃度が高い血液が通る血管はどれか。", 
	["肝静脈", "腎動脈", "腎静脈", "肝動脈"], 1, 10]
,["リンパ管と血管が合流する血管をなんというか。", 
	["鎖骨下静脈", "尾骨下静脈", "鎖骨下動脈", "肋骨下動脈"], 1, 10]
,["最もグルコース濃度の高い体液が通る管はどれか", 
	["肝門脈", "肝動脈", "肝静脈", "肝リンパ管"], 1, 10]
,["肺循環として正しいものはどれか", 
	["右心室→肺動脈→肺静脈→左心房", "左心室→肺動脈→肺静脈→右心房", "右心房→肺動脈→肺静脈→左心室", "左心房→肺動脈→肺静脈→右心室"], 1, 10]
,["動脈の特徴として正しいものはどれか。", 
	["厚い平滑筋の層をもつ", "弁をもつ", "内皮細胞一層からなる", "弾性膜をもたない"], 1, 10]
,["静脈の特徴として正しいものはどれか", 
	["弁をもつ", "厚い平滑筋の層をもつ", "内皮細胞一層からなる", "弾性膜をもたない"], 1, 10]
,["毛細血管の特徴として正しいものはどれか", 
	["内皮細胞一層からなる", "弁を持つ", "厚い平滑筋の層をもつ", "弾性膜をもつ"], 1, 10]
,["ヒトの血管系は、「心臓」→「？」→「？」→「？」→「心臓」というようにつながっている", 
	["動脈→毛細血管→静脈", "動脈→静脈→毛細血管", "毛細血管→動脈→静脈", "静脈→動脈→毛細血管"], 1, 10]
,["次のうち、開放血管系をもつのはどれ？", 
	["節足動物", "環形動物", "脊椎動物", "頭足類"], 1, 10]
,["次のうち、閉鎖血管をもつのはどれ？", 
	["ホヤ類", "節足動物", "二枚貝類", "刺胞動物"], 1, 10]
,["ヒトの赤血球に含まれる、酸素の運搬にはたらくタンパク質を何というか。", 
	["ヘモグロビン", "ヘモシアニン", "ミオグロビン", "エリスロクルオリン"], 1, 10]
,["呼吸色素中に鉄イオンを含むものとして正しい組み合わせはどれか", 
	["ヘモグロビンとミオグロビン", "ヘモシアニンとヘモグロビン", "ミオグロビンとヘモシアニン", "エリスロクルオリンとヘモバナジン"], 1, 10]
,["ヘモグロビンは、「A」が「B」に結合してできている。", 
	["A…ヘム　B…グロビン", "A…鉄イオン　B…グロブリン", "A…ヘム　B…ビリルビン", "A…鉄イオン　B…グロビン"], 1, 10]
,["脊椎動物の筋肉に含まれる、呼吸色素をなんというか。", 
	["ミオグロビン", "ヘモグロビン", "ヘモシアニン", "エリスロクルオリン"], 1, 10]
,["赤血球に含まれる、二酸化炭素の運搬に関連するタンパク質をなんというか。", 
	["炭酸脱水酵素", "存在しない", "脱水素酵素", "カタラーゼ"], 1, 10]
,["血液凝固の際、集まって繊維状になるタンパク質をなんというか。", 
	["フィブリン", "フィブリノーゲン", "トロンビン", "プラスミン"], 1, 10]
,["フィブリノーゲンをフィブリンに変化させる酵素をなんというか。", 
	["トロンビン", "トロンボプラスチン", "プロトロンビン", "プラスミン"], 1, 10]
,["線溶のとき、フィブリンを分解する酵素をなんというか", 
	["プラスミン", "プラスミノゲン", "フィブリノーゲン", "ヘモグロビン"], 1, 10]
,["腎臓は何が集まって形成されるか。", 
	["腎単位", "腎小体", "腎盂", "腎杯"], 1, 10]
,["腎小体を構成しているものはなにか。", 
	["糸球体とボーマンのう", "マルピーギ小体とネフロン", "糸球体とネフロン", "マルピーギ小体とボーマンのう"], 1, 10]
,["尿の生成や体液の塩類濃度の調節に関係する臓器はなにか。", 
	["腎臓", "肝臓", "膵臓", "脾臓"], 1, 10]
,["ろ過を行うのは特にどこか。", 
	["糸球体", "ボーマンのう", "細尿管", "集合管"], 1, 10]
,["グルコースの再吸収は特にどこで行われるか。", 
	["細尿管", "集合管", "糸球体", "ボーマンのう"], 1, 10]
,["次の中でろ過されるものはどれか。", 
	["イヌリン", "タンパク質", "赤血球", "アルブミン"], 1, 10]
,["次の中で最も再吸収されるものはどれか。", 
	["グルコース", "水", "イヌリン", "尿素"], 1, 10]
,["次の中で最も再吸収されないものはどれか。", 
	["イヌリン", "タンパク質", "赤血球", "尿素"], 1, 10]
,["淡水生無脊椎動物のうち、特に単細胞生物が体液濃度を調節するために使っている細胞小器官はなにか。", 
	["収縮胞", "食胞", "腎胞", "液胞"], 1, 10]
,["濃縮率（倍）＝「？」", 
	["尿中濃度／血漿中濃度", "血漿中濃度／尿中濃度", "原尿中濃度／血漿中濃度", "原尿中濃度／尿中濃度"], 1, 10]
,["再吸収量＝「？」", 
	["原尿中の量－尿中の量", "原尿中の濃度―尿中の濃度", "尿中の量―原尿中の量", "尿中の濃度―原尿中の濃度"], 1, 10]
,["再吸収率（％）＝「？」", 
	["再吸収量／原尿中の量", "尿中の量／原尿中の量", "原尿中の量／再吸収量", "尿中の量／再吸収量"], 1, 10]
,["海水生軟骨魚は「塩類」と「？」によって、体液濃度を海水よりもやや高めに維持している。", 
	["尿素", "アンモニア", "アルブミン", "尿酸"], 1, 10]
,["淡水生硬骨魚は、体液「A」尿を、「B」排出する。", 
	["A…より低張な　B…大量に", "A…と等張な　B…少量だけ", "A…より高張な　B…少量だけ", "A…と等張な　B…大量に"], 1, 10]
,["海水生硬骨魚は、体液「A」尿を、「B」排出する。", 
	["A…と等張な　B…少量だけ", "A…より低張な　B…大量に", "A…より高張な　B…少量だけ", "A…と等張な　B…大量に"], 1, 10]
,["硬骨魚は尿の生成の他に、えらの「？」を利用することで、塩類濃度を調節している。", 
	["塩類細胞", "塩数細胞", "塩輸送細胞", "塩田細胞"], 1, 10]
,["特に深海に住む無脊椎動物の体液濃度は、「？」だ。", 
	["体液濃度＝海水濃度", "体液濃度＞海水濃度", "体液濃度＜海水濃度", "体液濃度＝0"], 1, 10]
,["ヒトの体液の塩類濃度は約何％か。", 
	["0.9％", "0.1％", "0.65％", "1.5％"], 1, 10]
,["ヒトの体液の血糖濃度は約何％か。", 
	["0.1％", "0.65％", "0.9％", "1.5％"], 1, 10]
,["カエルの体液の塩類濃度は約何％か。", 
	["0.65％", "0.1％", "0.9％", "1.5％"], 1, 10]
,["肝臓はたくさんの「？」が集まってできている。", 
	["肝小葉", "肝単位", "肝小体", "肝要素"], 1, 10]
,["肝臓に血液が流入するための大きな血管は何本あるか。", 
	["2本", "0本", "1本", "3本"], 1, 10]
,["肝臓につながる大きな血管は何本あるか。", 
	["3本", "0本", "1本", "2本"], 1, 10]
,["肝臓が生成した胆汁を胆のうに送るための管を何というか。", 
	["胆管", "肝管", "輸肝管", "胆肝"], 1, 10]
,["肝小葉の内部の毛細血管は、動脈と門脈が混合しており、とくに「？」と呼ぶ。", 
	["類洞", "数洞", "類同", "数同"], 1, 10]
,["類洞と、糸球体の毛細血管の共通する特徴はなにか。", 
	["小孔が存在する", "ボーマンのうに包まれる", "基底膜をもたない", "共通性はない"], 1, 10]
,["肝臓の機能として誤っているものはなにか。", 
	["アンモニアの生成", "血液の貯留", "解毒作用", "多くの代謝"], 1, 10]
,["肝臓の機能として誤っているものはなにか。", 
	["ヘモグロビンの生成", "体温の生成", "胆汁の生成", "血糖値の調節"], 1, 10]
,["次のうち、肝臓で合成されないタンパク質はどれか。", 
	["免疫グロブリン", "アルブミン", "グロブリン", "プラスミノゲン"], 1, 10]
,["肝臓で分解されたヘモグロビンのうち、「A」から「B」が生成される。", 
	["A…ヘム　B…ビリルビン", "A…グロブリン　B…ビリルビン", "A…ヘム　B…胆汁酸", "A…グロブリン　B…胆汁酸"], 1, 10]
,["胆汁は「A」性の液体であり、脂肪の「B」を行う。", 
	["A…アルカリ　B…乳化", "A…酸　B…消化", "A…酸　B…乳化", "A…中　B…消化"], 1, 10]
,["肝臓で生成された胆汁は、「A」で貯蔵・濃縮され、「B」に放出されることで消化の補助を行う。", 
	["A…胆のう　B…十二指腸", "A…胆のう　B…大腸", "A…肝小葉　B…盲腸", "A…肝小葉　B…胃"], 1, 10]
,["肝臓は、「？」に次いで2番目の発熱量をもつ。", 
	["骨格筋", "平滑筋", "心筋", "筋繊維性血管周皮細胞"], 1, 10]
];
/* ==== エンディング ==== */
var endings = [
	 [100, [
		"<span class='msg_tokuten'> う～ん、お見事!!</span>"
		,"<span class='msg_tokuten'> あなたの得点は <strong>満点</strong>でした。</span>"
		,"",
		,"正解数は!seikai_num!問、正解率は!percent!％です。"
	]]
	,[80, [
		"<span class='msg_tokuten'>う～ん。さすがですね。</span>"
		,"<span class='msg_tokuten'>あなたの得点は <strong>!tokuten!点</strong> でした。</span>"
		,""
		,"正解数は!seikai_num!問、正解率は!percent!％です。"
		,"再挑戦をお待ちしています。"
	]]
	,[50, [
		"<span class='msg_tokuten'>なかなかやりますね。</span>"
		,"<span class='msg_tokuten'>あなたの得点は <strong>!tokuten!点</strong> でした。</span>"
		,""
		,"正解数は!seikai_num!問、正解率は!percent!％です。"
		,"再挑戦をお待ちしています。"
	]]
	,[30, [
		"<span class='msg_tokuten'>もうちょっとです。がんばりましょう</span>"
		,"<span class='msg_tokuten'>あなたの得点は <strong>!tokuten!点</strong> でした。</span>"
		,""
		,"正解数は!seikai_num!問、正解率は!percent!％です。"
		,"再挑戦をお待ちしています。"
	]]
	,[0, [
		"<span class='msg_tokuten'>あれ、わざと間違えたのかな。</span>"
		,"<span class='msg_tokuten'>あなたの得点は <strong>!tokuten!点</strong> でした。</span>"
		,""
		,"正解数は!seikai_num!問、正解率は!percent!％です。"
		,"再挑戦をお待ちしています。"
	]]
];
/* リスタートボタン名 空白("")にするとボタンを非表示にする事ができます。 */
var restart_button = "再挑戦する";
